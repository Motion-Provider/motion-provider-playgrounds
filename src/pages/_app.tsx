import AppProvider from "@/providers/app-provider";
import ReduxProvider from "@/providers/redux-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ReduxProvider>
  );
}
