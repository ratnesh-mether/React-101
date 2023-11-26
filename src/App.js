import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import InputWriter from "./BasicApps/InputWriter";
import LoginForm from "./BasicApps/LoginForm";
// import FetchAPI from "./Concepts/FetchAPI";
// import {
//   TextComponentOneWithHover,
//   TextComponentTwoWithHover,
// } from "./Concepts/Higher-Order-Component";
import PureComponent from "./Concepts/PureComponent";
import LoginSuccessful from "./BasicApps/LoginSuccessful";

function App() {
  return (
    <div className="App">
      <h1>React-101</h1>
      {/* <TextComponentOneWithHover text="Hello" textOne="cool" />
      <TextComponentTwoWithHover text="World" />
      <PureComponent />
      <InputWriter />
      <FetchAPI></FetchAPI>
      */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PureComponent />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/success" element={<LoginSuccessful />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
