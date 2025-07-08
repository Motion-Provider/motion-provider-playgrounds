import { combineReducers } from "redux";
import motionSlice from "./slices/motionSlice";

export default combineReducers({
  motion: motionSlice,
});

export type ReduxCombineReducerType = ReturnType<typeof combineReducers>;
