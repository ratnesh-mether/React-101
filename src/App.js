import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { useEffect, useState } from "react";
import Clock from "./BasicApps/Clock";
import FetchData from "./BasicApps/FetchData";
import Table from "./BasicApps/Table";

function App() {
  // const [time, setTime] = useState(new Date());
  let time = new Date();
  useEffect(() => {
    // setTime(new Date())
    // time = new Date();
  })
  return (
    <div className="App">
      <h1>React-101</h1>
      {/* <TextComponentOneWithHover text="Hello" textOne="cool" />
      <TextComponentTwoWithHover text="World" />
      <PureComponent />
      <InputWriter />
      */}
      {/* <FetchAPI></FetchAPI> */}
      <Clock time={time} />
      {/* <FetchData /> */}
      <Table />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<PureComponent />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/success" element={<LoginSuccessful />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
