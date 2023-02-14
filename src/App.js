import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import React, { useState } from "react";


const btnValues = [
  ["C","+-","%","/"],
  [7,8,9,"X"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];


const App = ()=>{

  const [calc,setCalc] = useState({
    sign:"",// the selected sign
    num: 0 ,// the entered value
    res: 0 ,//the calculated value.

  });

  //numClickHandler Function

  const numClickHandler = (e)=>{
    e.preventDefault();

    const value = e.target.innerHTML;

    if(calc.num.length < 16){
      setCalc({
        ...calc,
      num:
        calc.num === 0 && value === "0" 
        ? "0"
        :calc.num % 1 === 0
        ? Number(calc.num+value)
        :calc.num+value,
        res: !calc.sign? 0: calc.res,
      });
    }
  };

  //commaClickHandler function
  const commaClickHandler = (e)=>{
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num:!calc.num.toString().includes(".") ? calc.num + value : calc.num, 
    })
  }
  
  //signClickHandler function
  const signClickHandler = (e)=>{
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign:value,
      res: !calc.res && calc.num? calc.num : calc.res,
      num : 0,
    });
  };

  //equalsClickHandler function
  const equalsClickHandler = ()=>{
    if (calc.sign && calc.num ) {
      const math = (a,b,sign)=>{
        sign === "+"? a+b
        : sign === "-" ? a-b
        : sign === "X" ? a*b : a/b;

        setCalc({
          ...calc,
          res:calc.num === "0" && calc.sign ==="/"? 
          "Can't divide with 0"
          :math (Number(calc.res),Number(calc.num),calc.sign),
          sign : "",
          num : 0,
        })
      };
      
    }
  };

  //invertClickHandler function  first checks if there’s any entered value (num) or 
  //calculated value (res) and then inverts them by multiplying with -1:
  const invertClickHandler = ()=>{
    setCalc({
      ...calc,
      num: calc.num ? calc.num*-1 : 0,
      res: calc.res ? calc.res*-1 :0,
      sign: "",
    });
  };




  return (
    <div className="App">
    <h1>Hii i'm akash.webDev</h1>
    <Wrapper>
      <Screen value = {calc.num? calc.num : calc.res}/>

      <ButtonBox>
        {
           btnValues.flat().map((btn,i)=>{
            return (
              //edit the Button component so it can detect different button types and 
              //execute the assigned function once the specific button is pressed
              <Button 
                key={i}
                className = {btn==="=" ? "equal" : ""}
                value = {btn}
                onClick = {
                  btn === "C"? resetClickHandler
                  :btn === "+-"? invertClickHandler
                  :btn === "%"? percentClickHandler
                  :btn === "="? equalsClickHandler
                  :btn === "/" || btn === "X" || btn === "-" || btn === "+"? signClickHandler
                  :btn === "." ? commaClickHandler 
                  :numClickHandler
                }
              />
            )
           })
        }
      </ButtonBox>

    </Wrapper>

    </div>
  );
}

export default App;
