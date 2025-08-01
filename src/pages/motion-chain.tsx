import Head from "next/head";
import React, { useState } from "react";
import PlaygroundLayout from "@/layouts/playground-layout";
import { useAnimation } from "@/motion/hooks/use-animation";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import { DelayLogic } from "@/motion/types";
import getRandomAnimation from "@/utils/getRandomAnimation";
import { useDispatch } from "react-redux";
import { setDelayLogic, setMotion } from "@/redux/slices/motion";
import {
  MotionCircleStateProps,
  PlayerControllerProps,
} from "@/interfaces/@types-components";
import { ReduxLibMotionProps } from "@/interfaces/@types-lib";
import { ReduxLibMotionChainInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import PlaygroundController from "@/components/playground/controller";
import { GroundLabel } from "@/components/playground/ground-label";
import PlaygroundConfiguration from "@/components/playground/configuration";
import Chain from "@/components/playground/grounds/motion-chain";

export default function MotionChainPage() {
  const dispatch = useDispatch();

  const { control, onReverse, onStop, reset } = useAnimationControl();
  const { isAnimationStopped, reverse } = useAnimation(control);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animation, setAnimation] = useState<ReduxLibMotionProps>({
    ...(ReduxLibMotionChainInitialState as ReduxLibMotionProps),
  });

  const handleRandomAnimation = () => {
    reset();
    setTimeout(() => {
      const randomAnimations = getRandomAnimation(1);
      dispatch(setMotion({ mode: randomAnimations }));
      setAnimation((prev) => ({
        ...prev,
        animation: { ...prev.animation, mode: randomAnimations },
      }));
    }, 150);
  };

  // const handleSettings = (key: string, value: string) => {
  //   setSettings((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // };

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
      <Chain
        {...(animation as MotionCircleStateProps)}
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
      <PlaygroundController
        onModalOpen={handleOpenModal}
        control={{
          isAnimationStopped,
          reverse,
        }}
        onAnimate={onStop}
        onReset={reset}
        onRandomAnimate={handleRandomAnimation}
        onReverse={onReverse}
      />
      <GroundLabel
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
        className="text-8xl"
      >
        Motion Chain
      </GroundLabel>
      <PlaygroundConfiguration
        delayLogic={animation.delayLogic!}
        onDelayLogicChange={handleDelayLogicChange}
        onAnimationChange={handleChangeAnimation}
        setIsMobileOpen={setIsModalOpen}
        animation={animation.animation}
        isModalOpen={isModalOpen}
      />
    </PlaygroundLayout>
  );
}
