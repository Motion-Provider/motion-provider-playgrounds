import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import root from "./root";

export const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export type ReduxStoreDispatchType = typeof store.dispatch;
export type ReduxRootState = ReturnType<typeof root>;
