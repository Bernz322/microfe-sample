import { createSlice } from "@reduxjs/toolkit";

// Sample counter slice
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
