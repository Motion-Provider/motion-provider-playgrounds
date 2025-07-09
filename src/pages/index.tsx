import { Circle } from "@/components/playground/circle";
import ControllerLayout from "@/components/playground/controller";
import { Image } from "@/components/playground/image";
import schema from "@/components/playground/settings/schema";
import { Text } from "@/components/playground/text";
import { MotionCircleLayoutProps, SchemaProps } from "@/interfaces";
import { interFont } from "@/lib/fonts";
import { useAnimation } from "@/motion/hooks/use-animation";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import getRandomAnimation from "@/utils/getRandomAnimation";
import React, { useState } from "react";

type MotionCircleStateProps = Omit<
  MotionCircleLayoutProps,
  "controller" | "style"
>;
const initialState = {
  animation: {
    mode: [
      "neonGlow",
      "moveToTopCenter",
      "filterSaturateIncrease",
      "filterInvertColors",
      "filterGrayscaleFade",
    ],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
} satisfies MotionCircleStateProps;

export default function Home() {
  const { control, onReverse, onStop, reset } = useAnimationControl();

  const { isAnimationStopped, reverse } = useAnimation(control);
  const [settings, setSettings] = useState<SchemaProps>(schema);

  const [animation, setAnimation] = useState<MotionCircleStateProps>({
    ...initialState,
  });
  const [img, setImg] = useState<string>(
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWt2ZTR1dWNzYWVicWsxbHZyaWgycnFnbng0MmFyb3NtcHhnaXl6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tj4jjaCxXRVSARsUzN/giphy.gif"
  );

  const handleRandomAnimation = () => {
    reset();
    setTimeout(() => {
      const randomAnimations = getRandomAnimation(5);
      setAnimation((prev) => ({
        ...prev,
        animation: { ...prev.animation, mode: randomAnimations },
      }));
    }, 150);
  };

  const handleSettings = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <main
      className={`w-full h-screen  items-center justify-center flex overflow-hidden relative dark ${interFont.className} rounded-full `}
    >
      <Circle
        {...animation}
        style={{
          borderBlur: settings.borderBlur,
          borderColor: settings.borderColor,
          circleCount: settings.circleCount,
        }}
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
      <Image
        img={settings.img}
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
        schema={settings}
        control={{
          isAnimationStopped,
          reverse,
        }}
        onAnimate={onStop}
        onReset={reset}
        onSettings={handleSettings}
        onRandomAnimate={handleRandomAnimation}
        onReverse={onReverse}
      />
      <Text
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
      </Text>
    </main>
  );
}
