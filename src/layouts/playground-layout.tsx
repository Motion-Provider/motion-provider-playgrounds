import { FC } from "react";
import { cn } from "@/lib/utils";
import { interFont } from "@/lib/fonts";
import GridBg from "@/components/grid-bg";
import InfoBox from "@/components/infobox";
import { LayoutProps } from "@/interfaces/@types-layout";
import MotionContainer from "@/motion/motion-container";
import Head from "next/head";

const PlaygroundLayout: FC<LayoutProps> = ({ children, className }) => (
  <div
    className={cn(
      "w-full h-screen items-center justify-center flex overflow-hidden relative dark ",
      interFont.className,
      className
    )}
  >
    <Head>
      <meta
        name="description"
        content="Motion Provider is a performance-first motion engine for React. Build delightful animations with clean APIs, optimized rendering, and developer-first tools."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta
        property="og:title"
        content="Motion Provider — Performance-First Motion Engine"
      />
      <meta
        property="og:description"
        content="Build delightful React animations with Motion Provider. Performance-first rendering, intuitive APIs, and seamless developer experience."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://motionprovider.dev/motionprovider-preview.webp"
      />
      <meta property="og:url" content="https://motionprovider.dev/" />
      <meta property="og:site_name" content="motionprovider.dev" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    {children}
    <GridBg className="absolute top-0 left-0 w-full h-full" />
    <InfoBox />
    <MotionContainer
      animation={{
        mode: ["fadeIn", "typingEffect"],
        transition: "delayedCubic",
        delay: 0.5,
        duration: 1,
      }}
      elementType="div"
      className="absolute -bottom-8 left-0 -z-10 w-full h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-40% to-rose-600 blur-3xl"
    />
  </div>
);

export default PlaygroundLayout;
