import { useTypedDispatch, useTypedSelector } from "./rtk-hooks";
import { decrement, increment, clear } from "counter/reducer";

// TODO: Refactor to make this smaller
// Hook for taking useSelector and useDispatch hooks and  actions
export function useStore() {
  const count = useTypedSelector((state) => state.counter.count);
  const dispatch = useTypedDispatch();
  console.log(count);

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clear: () => dispatch(clear()),
  };
}
