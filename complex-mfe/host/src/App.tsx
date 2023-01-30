import React from "react";
import ReactDOM from "react-dom";
import {
  StoreProvider,
  useStore,
  useTypedSelector,
} from "store/mfeStore";

import "./index.scss";

// Define the shape of the store. Refer to the combine reducer to get the shape
interface IStore {
  counter: { count: number };
}

const App = () => {
  const { increment, decrement, clear } = useStore();
  const { count } = useTypedSelector((state: IStore) => state.counter);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <h1 className="text-4xl mb-1">Host</h1>
      <p className="text-xs">
        This is the host component
      </p>
      <p className="text-xs">
        This will contain the login and dashboard mfe's
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
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
