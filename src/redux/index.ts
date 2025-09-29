import { configureStore } from "@reduxjs/toolkit";
import root from "./root";
import { isProd } from "@/lib/env";

export const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: !isProd(),
});

export type ReduxStoreDispatchType = typeof store.dispatch;
export type ReduxRootState = ReturnType<typeof root>;
