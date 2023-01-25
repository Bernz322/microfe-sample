import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
