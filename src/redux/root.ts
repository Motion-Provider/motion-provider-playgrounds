import { combineReducers } from "redux";
import motion from "./slices/motion";

export default combineReducers({
  motion: motion,
});

export type ReduxCombineReducerType = ReturnType<typeof combineReducers>;
