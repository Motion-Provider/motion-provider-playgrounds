import { CircleLayout } from "@/components/playground/circle-layout";
import ControllerLayout from "@/components/playground/controller-layout";
import { ImageLayout } from "@/components/playground/image-layout";
import { TextLayout } from "@/components/playground/text-layout";
import { Button } from "@/components/ui/button";
import { MotionCircleLayoutProps } from "@/interfaces";
import { interFont } from "@/lib/fonts";
import { useAnimation } from "@/motion/hooks/use-animation";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import MotionText from "@/motion/motion-text";
import getRandomAnimation from "@/utils/getRandomAnimation";
import {
  Dice6,
  Pause,
  Play,
  Settings,
  SkipBack,
  SkipForward,
} from "lucide-react";
import React, { useState } from "react";

type MotionCircleStateProps = Omit<MotionCircleLayoutProps, "controller">;
const initialState = {
  animation: {
    mode: ["scaleZoomIn", "fadeIn"],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
} satisfies MotionCircleStateProps;

export default function Home() {
  const { control, onReverse, onStop, reset } = useAnimationControl({
    stopAnimation: false,
    reverseAnimation: false,
  });

  const { isAnimationStopped, reverse } = useAnimation(control);
  const [animation, setAnimation] = useState<MotionCircleStateProps>({
    ...initialState,
  });
  const [img, setImg] = useState<string>(
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTRoZ3FjYTA2MWlqZXBkMGZlZzlteG93dXltMDF5a2E4eTBoMXhmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FyoaJE2iah7WYeyxWr/giphy.webp"
  );

  const handleRandomAnimation = () => {
    reset();
    const randomAnimations = getRandomAnimation(5);

    setAnimation((prev) => ({
      ...prev,
      animation: { ...prev.animation, mode: randomAnimations },
    }));
  };

  const handleSetAnim = () => {
    console.log(animation);
  };
  return (
    <main
      className={`w-full h-screen  items-center justify-center flex overflow-hidden relative dark ${interFont.className}  rounded-full  `}
    >
      <CircleLayout
        {...animation}
        controller={{
          configView: {
            amount: 0.5,
            once: false,
          },
          isAnimationStopped,
          reverse,
          trigger: true,
        }}
      />
      <ImageLayout
        img={img}
        {...animation}
        controller={{
          isAnimationStopped,
          configView: {
            once: false,
            amount: 0.5,
          },
          reverse,
          trigger: true,
        }}
      />
      <ControllerLayout
        control={{
          isAnimationStopped,
          reverse,
        }}
        onAnimate={onStop}
        onRandomAnimate={handleRandomAnimation}
        onReverse={onReverse}
      />
      <TextLayout
        {...animation}
        controller={{
          isAnimationStopped,
          configView: {
            once: false,
            amount: 0.5,
          },
          reverse,
          trigger: true,
        }}
      >
        The Circle
      </TextLayout>
    </main>
  );
}
