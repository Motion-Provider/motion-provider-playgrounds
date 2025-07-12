import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PlaygroundSelectedMotionProps } from "@/interfaces";
import MotionChain from "@/motion/motion-chain";
import { AnimationKeys, MotionAnimationProps } from "@/motion/types";
import { FC, useCallback, useMemo, useState } from "react";
import { MotionChainProps } from "@/motion/types";
import { cn } from "@/lib/utils";

export const SelectedMotion: FC<PlaygroundSelectedMotionProps> = ({
  onSelected,
  selected,
  className,
}) => {
  const handleSelect = (val: AnimationKeys) => {
    const filteredItems = selected.filter((item) => item !== val);
    onSelected(filteredItems);
  };

  const itemsAnimation = useCallback(
    () =>
      ({
        mode: ["filterBlurIn", "fadeUp"],
        transition: "smooth",
        delay: 0.25,
        duration: 1,
      } as MotionAnimationProps),
    [selected.length]
  );

  return (
    <ScrollArea className={cn(className, "h-[250px] w-full")}>
      <div className="w-full h-auto flex items-center justify-center flex-col">
        <MotionChain
          animations={
            Array.from({ length: selected.length }).map(
              itemsAnimation
            ) as MotionChainProps["animations"]
          }
          elementType={"div"}
          config={{
            duration: 1,
            delayLogic: "linear",
          }}
          key={selected.length}
          controller={{
            configView: {
              once: false,
              amount: 0.5,
            },
          }}
          className="size-full items-center justify-center flex flex-col gap-2"
        >
          {selected.map((item) => (
            <Button
              variant={"outline"}
              onClick={() => handleSelect(item)}
              className="w-full my-1"
            >
              <pre>{item}</pre>
            </Button>
          ))}
        </MotionChain>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
