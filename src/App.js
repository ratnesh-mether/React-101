import "./App.css";
import {
  TextComponentOneWithHover,
  TextComponentTwoWithHover,
} from "./Concepts/Higher-Order-Component";

function App() {
  return (
    <div className="App">
      <TextComponentOneWithHover text="Hello"></TextComponentOneWithHover>
      <TextComponentTwoWithHover text="World"></TextComponentTwoWithHover>
    </div>
  );
}

export default App;
