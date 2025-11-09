import type { RootState, AppDispatch } from "../store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = <T>(
  selector: (state: RootState) => T
): T => useSelector(selector);
