import { Circle } from "@/components/playground/circle";
import ControllerLayout from "@/components/playground/controller";
import { Image } from "@/components/playground/image";
import schema from "@/components/playground/schema";
import PlaygroundConfig from "@/components/playground/settings/config";
import { Text } from "@/components/playground/text";
import {
  MotionCircleLayoutProps,
  PlayerControllerProps,
  SchemaProps,
} from "@/interfaces";
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
    mode: ["scaleZoomIn", "fadeIn"],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
} satisfies MotionCircleStateProps;

export default function Home() {
  const { control, onReverse, onStop, reset } = useAnimationControl();

  const { isAnimationStopped, reverse } = useAnimation(control);
  const [settings, setSettings] = useState<SchemaProps>(schema);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animation, setAnimation] = useState<MotionCircleStateProps>({
    ...initialState,
  });

  const handleRandomAnimation = () => {
    reset();
    setTimeout(() => {
      const randomAnimations = getRandomAnimation(settings.complexity);
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

  const handleOpenModal = () => setIsModalOpen((prev) => !prev);

  const handleChangeAnimation: PlayerControllerProps["onAnimationChange"] = (
    key,
    value
  ) => {
    setAnimation((prev) => ({
      ...prev,
      animation: { ...prev.animation, [key]: value },
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
        fn={settings.imgMode}
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
        onModalOpen={handleOpenModal}
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
        borderColor={settings.borderColor}
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
      <PlaygroundConfig
        onAnimationChange={handleChangeAnimation}
        setIsMobileOpen={setIsModalOpen}
        animation={animation.animation}
        controller={{
          isAnimationStopped,
          configView: {
            once: false,
            amount: 0.5,
          },
          reverse,
          trigger: true,
        }}
        isModalOpen={isModalOpen}
      />
    </main>
  );
}
