import { combineReducers } from "redux";
import motion from "./slices/motion";
import metadata from "./slices/metadata";
import utils from "./slices/utils";

export default combineReducers({
  motion: motion,
  metadata: metadata,
  utils: utils,
});

export type ReduxCombineReducerType = ReturnType<typeof combineReducers>;
