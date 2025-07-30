import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MotionChain from "@/motion/motion-chain";
import { AnimationKeys, MotionAnimationProps } from "@/motion/types";
import { FC, useCallback } from "react";
import { MotionChainProps } from "@/motion/types";
import { cn } from "@/lib/utils";
import { Ban, Trash } from "lucide-react";
import { PlaygroundSelectedMotionProps } from "@/interfaces/@types-components";

export const SelectedMotion: FC<PlaygroundSelectedMotionProps> = ({
  onSelected,
  selected,
  className,
}) => {
  const handleSelect = (val: AnimationKeys) =>
    onSelected(selected.filter((item) => item !== val));

  const itemsAnimation = useCallback(
    () =>
      ({
        mode: ["filterBlurIn", "fadeUp"],
        transition: "smooth",
        delay: 0.25,
        duration: 0.5,
      } as MotionAnimationProps),
    [selected.length]
  );

  if (selected.length === 0)
    return (
      <div className="h-[250px]  w-full">
        <div className="w-full my-1 text-rose-500 rounded-md bg-card py-2 px-4  flex items-center justify-between text-sm tracking-tight ">
          No animation found.
          <Ban className="size-4" />
        </div>
      </div>
    );
  return (
    <ScrollArea className={cn(className, "h-[250px] w-full")}>
      <MotionChain
        animations={
          Array.from({ length: selected.length }).map(
            itemsAnimation
          ) as MotionChainProps["animations"]
        }
        elementType="div"
        config={{
          duration: 1,
          delayLogic: "linear",
        }}
        controller={{
          configView: {
            once: false,
            amount: 0.5,
          },
        }}
        key={selected.length}
        className="size-full items-center justify-center flex flex-col gap-2"
      >
        {selected.map((item) => (
          <Button
            variant={"outline"}
            onClick={() => handleSelect(item)}
            className="w-full my-1 hover:text-rose-500"
          >
            <pre>{item}</pre>
            <Trash className="size-4" />
          </Button>
        ))}
      </MotionChain>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
