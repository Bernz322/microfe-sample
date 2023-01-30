import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { createStore, StoreProvider } from "./store";
import { useStore } from "./hooks/useStore";

const App = () => {
  const { count, increment, decrement, clear } = useStore();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <h1 className="text-4xl mb-1">Store</h1>

      <p className="text-base mb-3">Default example below</p>
      <p className="text-xs">
        Count should be initally 3 as provided via preloadedState
      </p>
      <h2 className="text-2xl">Count: {count}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-base text-white font-bold p-2 rounded"
        onClick={increment}
      >
        Increment +
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-base text-white font-bold p-2 rounded mx-2"
        onClick={decrement}
      >
        Decrement -
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-base text-white font-bold p-2 rounded"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
};

ReactDOM.render(
  <StoreProvider store={createStore({ counter: { count: 3 } })}>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
