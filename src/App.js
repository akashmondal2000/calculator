import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";


const btnValues = [
  ["C","+-","%","/"],
  [7,8,9,"X"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];


const App = ()=>{
  return (
    <div className="App">
    <h1>Hii i'm akash.webDev</h1>
    <Wrapper>
      <Screen/>
      <ButtonBox>
        {
           btnValues.flat().map((btn,i)=>{
            return (
              <Button
                key={i}
                className = {btn==="=" ? "equal" : ""}
                value = {btn}
                onClick = {()=>{console.log(`${btn} Clicked`)}}
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
