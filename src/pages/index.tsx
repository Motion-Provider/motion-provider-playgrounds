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
