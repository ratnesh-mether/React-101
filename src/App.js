import "./App.css";
import InputWriter from "./BasicApps/InputWriter";
// import FetchAPI from "./Concepts/FetchAPI";
import {
  TextComponentOneWithHover,
  TextComponentTwoWithHover,
} from "./Concepts/Higher-Order-Component";
import PureComponent from "./Concepts/PureComponent";

function App() {
  return (
    <div className="App">
      <h1>React-101</h1>
      <TextComponentOneWithHover text="Hello" />
      <TextComponentTwoWithHover text="World" />
      <PureComponent />
      <InputWriter />

      {/* <FetchAPI></FetchAPI> */}
    </div>
  );
}

export default App;
