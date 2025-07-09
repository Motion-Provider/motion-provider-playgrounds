import { CircleLayout } from "@/components/playground/circle-layout";
import { ImageLayout } from "@/components/playground/image-layout";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/motion/hooks/use-animation";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import { Dice6, Pause, Play, Settings } from "lucide-react";
import React from "react";

export default function Home() {
  const { control, onReverse, onStop, reset } = useAnimationControl({
    stopAnimation: false,
    reverseAnimation: false,
  });

  const { isAnimationStopped, reverse } = useAnimation(control);

  const handleRandomAnimation = () => {};

  return (
    <main className="w-full h-screen  items-center justify-center flex overflow-hidden relative dark">
      <CircleLayout
        animation={{
          mode: ["scaleZoomIn", "fadeIn"],
          transition: "cubicBounce",
        }}
        delayLogic="bounce"
        controller={{
          ...control,
          trigger: !isAnimationStopped,
          configView: {
            amount: 0.5,
            once: false,
          },
        }}
      />
      <ImageLayout />
      <div className="fixed bottom-8 min-w-96 max-w-min h-14 bg-transparent backdrop-blur-xs  justify-between flex items-center px-8 rounded-2xl z-50 *:hover:scale-110 *:cursor-pointer transition-all duration-300">
        <Button
          variant="outline"
          onClick={isAnimationStopped ? onReverse : onStop}
        >
          {isAnimationStopped ? (
            <Play className="size-5" />
          ) : (
            <Pause className="size-5" />
          )}
        </Button>
        <Button variant="outline" onClick={handleRandomAnimation}>
          <Dice6 className="size-5 " />
        </Button>
        <Button variant="outline">
          <Settings className="size-5 " />
        </Button>
      </div>
    </main>
  );
}
