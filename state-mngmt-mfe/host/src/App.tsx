import React from "react";
import ReactDOM from "react-dom";

import Header from "header/Header";
import Button from "button/Button";
import Label from "label/Label";
import Counter from "counter/Counter";
import { useStore } from "storeHook/useStore";
import { StoreProvider } from "store/store";

import "./index.scss";

const App = () => {
  const { count, increment, decrement, clear } = useStore();
  return (
    <>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <div>Name: Host - Port 3000</div>
        <div className="flex">
          <Button text="Add 1" onClick={increment} />
          <Button text="Subtract 1" onClick={decrement} />
          <Button text="Reset" onClick={clear} />
        </div>
        <Label text={`Count ${count}`} />
      </div>
      <hr />
      <Counter />
    </>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
