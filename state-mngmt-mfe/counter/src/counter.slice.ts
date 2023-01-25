import { createSlice } from "@reduxjs/toolkit";

// TODO: This should be coming from other microfrontends
// Sample Slice starts here
export interface CounterState {
  count: number;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  } as CounterState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});
export const { increment, decrement, clear } = counterSlice.actions;
export default counterSlice.reducer;
// End of sample slice
