import Head from "next/head";
import Cards from "@/components/home/cards";
import { useCallback, useState } from "react";
import Hero from "@/components/home/hero";
import PageLayout from "@/layouts/page-layout";
import { Background } from "@/components/home/background";
import motionCardsLib from "@/constants/motion-cards.lib";
import { useAnimation } from "@/motion/hooks/use-animation";
import { MotionCardItem } from "@/interfaces/@types-components";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MotionCardItem | undefined>(
    undefined
  );
  const { control, onReverse } = useAnimationControl();
  const controller = useAnimation(control);

  const handleHover = useCallback((id?: number) => {
    setSelectedItem(motionCardsLib.find((item) => item.id === id));
  }, []);

  const isItemHovered = typeof selectedItem !== "undefined";

  return (
    <PageLayout>
      <Head>
        <title>Motion Provider — Playgrounds</title>
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
      <div className="md:w-1/2 w-full h-full relative border-r overflow-hidden">
        <Background selectedItemID={selectedItem?.id} />
        <Hero controller={controller} />
      </div>
      <Cards
        onClick={onReverse}
        items={motionCardsLib}
        controller={controller}
        isHovered={isItemHovered}
        hoveredItemID={selectedItem?.id}
        onHover={handleHover}
      />
    </PageLayout>
  );
}
