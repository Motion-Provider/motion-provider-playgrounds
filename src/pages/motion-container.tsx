import PlaygroundConfiguration from "@/components/playground/configuration";
import PlaygroundController from "@/components/playground/controller";
import { GroundLabel } from "@/components/playground/ground-label";
import Container from "@/components/playground/grounds/motion-container";
import { MotionDefaultInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { PlayerControllerProps } from "@/interfaces/@types-components";
import { MotionAnimation } from "@/interfaces/@types-constants";
import PlaygroundLayout from "@/layouts/playground-layout";
import { useAnimation } from "@/motion/hooks/use-animation";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import { DelayLogic } from "@/motion/types";
import getRandomAnimation from "@/motion/utils/getRandomAnimation";
import { ReduxRootState } from "@/redux";
import { setDelayLogic, setMotion } from "@/redux/slices/motion";
import Head from "next/head";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MotionContainerPage() {
  const dispatch = useDispatch();

  const { control, onReverse, onStop, reset } = useAnimationControl();
  const { isAnimationStopped, reverse } = useAnimation(control);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animation, setAnimation] = useState<MotionAnimation>(
    MotionDefaultInitialState
  );

  const { complexity, settings } = useSelector(
    (state: ReduxRootState) => state.metadata
  );

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

  const handleRandomAnimation = () => {
    reset();
    setTimeout(() => {
      const randomAnimations = getRandomAnimation({
        count: complexity + 1,
      });

      dispatch(setMotion({ mode: randomAnimations! }));
      setAnimation((prev) => ({
        ...prev,
        animation: { ...prev.animation, mode: randomAnimations! },
      }));
    }, 150);
  };

  const handleOpenModal = () => setIsModalOpen((prev) => !prev);

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
        <title>Playgrounds | Motion Container</title>
      </Head>
      <Container
        animation={animation.animation}
        controller={{
          configView: {
            amount: 0.5,
            once: false,
          },
          reverse,
          trigger: true,
          isAnimationStopped,
        }}
        delayLogic={animation.delayLogic}
        settings={settings["MotionContainer"]}
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
      <GroundLabel className="text-7xl">Motion Container</GroundLabel>
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
