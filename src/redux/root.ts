import { combineReducers } from "redux";
import motion from "./slices/motion";
import metadata from "./slices/metadata";

export default combineReducers({
  motion: motion,
  metadata: metadata,
});

export type ReduxCombineReducerType = ReturnType<typeof combineReducers>;
