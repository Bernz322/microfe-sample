import React from "react";
import ReactDOM from "react-dom";

import Header from "header/Header";
import Button from "button/Button";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Button />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
