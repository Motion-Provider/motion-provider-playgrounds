import { configureStore } from "@reduxjs/toolkit";
import root from "./root";

export const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: false,
});

export type ReduxStoreDispatchType = typeof store.dispatch;
export type ReduxRootState = ReturnType<typeof root>;
