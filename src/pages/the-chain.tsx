import {
  MotionCircleStateProps,
  PlayerControllerProps,
  ReduxLibMotionChainProps,
  SchemaProps,
} from "@/interfaces";
import { Circle } from "@/components/playground/circle";
import ControllerLayout from "@/components/playground/controller";
import schema from "@/components/playground/schema";
import PlaygroundConfig from "@/components/playground/settings/config";
import { Text } from "@/components/playground/text";
import PlaygroundLayout from "@/layouts/playground-layout";
import { useAnimation } from "@/motion/hooks/use-animation";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import { DelayLogic } from "@/motion/types";
import getRandomAnimation from "@/utils/getRandomAnimation";
import React, { useState } from "react";
import Head from "next/head";
import { ReduxLibMotionChainInitialState } from "@/lib/redux.lib";
import { useDispatch } from "react-redux";
import { setDelayLogic, setMotion } from "@/redux/slices/motion";

export default function TheChain() {
  const { control, onReverse, onStop, reset } = useAnimationControl();
  const dispatch = useDispatch();

  const { isAnimationStopped, reverse } = useAnimation(control);
  const [settings, setSettings] = useState<SchemaProps>(schema);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animation, setAnimation] = useState<ReduxLibMotionChainProps>({
    ...(ReduxLibMotionChainInitialState as ReduxLibMotionChainProps),
  });

  const handleRandomAnimation = () => {
    console.time("handleRandomAnimation");
    reset();
    setTimeout(() => {
      const randomAnimations = getRandomAnimation(settings.complexity);
      setAnimation((prev) => ({
        ...prev,
        animation: { ...prev.animation, mode: randomAnimations },
      }));
    }, 150);
    console.timeEnd("handleRandomAnimation");
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
    dispatch(setMotion({ [key]: value }));
  };

  const handleDelayLogicChange = (value: DelayLogic) => {
    dispatch(setDelayLogic(value));
    setAnimation((prev) => ({
      ...prev,
      delayLogic: value,
    }));
  };

  return (
    <PlaygroundLayout>
      <Head>
        <title>Motion Chain</title>
      </Head>
      <Circle
        {...(animation as MotionCircleStateProps)}
        style={{
          ...settings,
        }}
        delayLogic={animation.delayLogic!}
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
        {...(animation as MotionCircleStateProps)}
        controller={{
          isAnimationStopped,
          configView: {
            once: false,
            amount: 0.5,
          },
          reverse,
          trigger: true,
        }}
        className={`text-8xl`}
      >
        Motion Chain
      </Text>
      <PlaygroundConfig
        delayLogic={animation.delayLogic!}
        onDelayLogicChange={handleDelayLogicChange}
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
    </PlaygroundLayout>
  );
}
