import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Home />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
