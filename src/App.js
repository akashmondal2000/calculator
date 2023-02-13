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
  return (
    <div className="App">
    <h1>Hii i'm akash.webDev</h1>
    <Wrapper>
      <Screen value = {calc.num? calc.num : calc.res}/>

      <ButtonBox>
        {
           btnValues.flat().map((btn,i)=>{
            return (
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
