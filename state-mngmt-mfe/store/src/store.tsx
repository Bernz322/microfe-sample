import React from "react";
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import counterReducer from "counter/reducer";

// Combining of reducers
// TODO: Reducers should all be imported from other microfrontends
const rootReducer = combineReducers({
  counter: counterReducer,
});

/**
 *  Function mainly used for testing
 * @param preloadedState - for initializing state values
 * @returns store
 */
export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = createStore();

// This will be the Redux Provider to be wrapped to any app
export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];
