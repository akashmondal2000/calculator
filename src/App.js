import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";


function App() {
  return (
    <div className="App">
    <h1>Hii i'm akash.webDev</h1>
    <Wrapper>
      <Screen/>
      <ButtonBox>
        <Button 
        className="" 
        value = "1" 
        onClick={ ()=> {
          console.log("button clicked") // hare i print button clicked responce on console
        }}  
        />
      </ButtonBox>

    </Wrapper>

    </div>
  );
}

export default App;
