import { useTypedDispatch, useTypedSelector } from "./rtk-hooks";
import { decrement, increment, clear } from "../reducer/example.slice";

// TODO: Refactor to make this smaller
// Hook for taking states and reducer actions from different slices provided
export function useStore() {
  const { count } = useTypedSelector((state) => state.counter);
  const dispatch = useTypedDispatch();

  const exampleReducer = {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clear: () => dispatch(clear()),
  };

  return {
    ...exampleReducer,
  };
}
