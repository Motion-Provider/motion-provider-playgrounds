import Head from "next/head";
import React, { useState } from "react";
import {
  MotionCircleStateProps,
  PlayerControllerProps,
} from "@/interfaces/@types-components";
import { ReduxRootState } from "@/redux";
import { DelayLogic } from "@/motion/types";
import { useDispatch, useSelector } from "react-redux";
import PlaygroundLayout from "@/layouts/playground-layout";
import { useAnimation } from "@/motion/hooks/use-animation";
import getRandomAnimation from "@/utils/getRandomAnimation";
import { ReduxLibMotionProps } from "@/interfaces/@types-lib";
import { setDelayLogic, setMotion } from "@/redux/slices/motion";
import Chain from "@/components/playground/grounds/motion-chain";
import { GroundLabel } from "@/components/playground/ground-label";
import PlaygroundController from "@/components/playground/controller";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import PlaygroundConfiguration from "@/components/playground/configuration";
import { ReduxLibMotionChainInitialState } from "@/constants/redux/redux-motion-defaults.lib";

export default function MotionChainPage() {
  const dispatch = useDispatch();

  const { control, onReverse, onStop, reset } = useAnimationControl();
  const { isAnimationStopped, reverse } = useAnimation(control);

  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animation, setAnimation] = useState<ReduxLibMotionProps>({
    ...(ReduxLibMotionChainInitialState as ReduxLibMotionProps),
  });

  const handleRandomAnimation = () => {
    reset();
    setTimeout(() => {
      const randomAnimations = getRandomAnimation(
        settings["MotionChain"].complexity
      );
      dispatch(setMotion({ mode: randomAnimations }));
      setAnimation((prev) => ({
        ...prev,
        animation: { ...prev.animation, mode: randomAnimations },
      }));
    }, 150);
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
      <Chain
        {...(animation as MotionCircleStateProps)}
        settings={settings["MotionChain"]}
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
