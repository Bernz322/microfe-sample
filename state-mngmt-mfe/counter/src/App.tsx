import React from "react";
import ReactDOM from "react-dom";

import Header from "header/Header";
import Button from "button/Button";
import Label from "label/Label";
import { useStore } from "storeHook/useStore";
import { StoreProvider } from "store/store";
import Counter from "./Counter";

import "./index.scss";

const App = () => {
  const { count } = useStore();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: Counter App - Port 4000</div>
      <Label text={`Count ${count}`} />
      <Counter />
    </div>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
