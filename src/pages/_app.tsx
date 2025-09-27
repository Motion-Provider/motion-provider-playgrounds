import { Analytics } from "@/components/analytics";
import AppProvider from "@/providers/app-provider";
import ReduxProvider from "@/providers/redux-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <AppProvider>
        <Analytics gaId={GA_ID} />
        <Component {...pageProps} />
      </AppProvider>
    </ReduxProvider>
  );
}
