import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Header from "./components/Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: Core - Port 3001</div>
    <div>This Microfrontend has the following components:</div>
    <Header />
    <Button text="A button"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
