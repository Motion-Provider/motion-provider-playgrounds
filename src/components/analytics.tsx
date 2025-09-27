import Script from "next/script";
import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import { AnalyticsProps } from "@/interfaces/@types-components";
import { isProd } from "@/lib/env";

export const Analytics: FC<AnalyticsProps> = ({ gaId }) => {
  const router = useRouter();
  const handled = useRef(false);

  useEffect(() => {
    if (!gaId || !isProd()) return;

    const sendPageView = (url: string) => {
      const gtag = (window as any).gtag;
      if (!gtag) return false;
      gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,
      });
      return true;
    };

    const handleRouteChange = (url: string) => sendPageView(url);

    router.events.on("routeChangeComplete", handleRouteChange);

    let tries = 0;
    const maxTries = 10;
    const retry = () => {
      tries += 1;
      if (sendPageView(window.location.pathname)) return;
      if (tries < maxTries) {
        setTimeout(retry, 200);
      }
    };

    if (!handled.current) {
      handled.current = true;
      retry();
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [gaId, router.events]);

  if (!gaId || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        id="gtag-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
};
