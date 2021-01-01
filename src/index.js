import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/screens/Header";
import LiveClasses from "./components/pages/LiveClasses";
import "./index.css";
import Footer from "./components/screens/Footer";
import LiveClass from "./components/pages/LiveClass";

import { phonicsClass, mathsClass } from "./classData";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/live-classes">
          <LiveClasses />
        </Route>
        <Route path="/live-phonics">
          <LiveClass liveClass={phonicsClass}/>
        </Route>
        <Route path="/live-math">
          <LiveClass liveClass={mathsClass} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
