import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "./hooks/useStore";

import "./index.scss";
import { StoreProvider } from "./store";

const App = () => {
  return (
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: store</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
      </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
