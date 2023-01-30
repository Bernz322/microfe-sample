import React from "react";
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { counterSlice } from "./reducer/example.slice";

// Combine all reducers here
const rootReducer = combineReducers({
  counter: counterSlice.reducer, // This is an example of a reducer
});

/**
 *  Function to create redux store
 * @param preloadedState - for initializing state values
 * @returns redux store with preloaded state if provided
 */
export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// This is the Redux Provider to be wrapped to a Micro Frontend
export function StoreProvider({ children, store = createStore() }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];