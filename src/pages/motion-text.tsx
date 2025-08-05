import Head from "next/head";
import { useState } from "react";
import { ReduxRootState } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import PlaygroundLayout from "@/layouts/playground-layout";
import { useAnimation } from "@/motion/hooks/use-animation";
import Text from "@/components/playground/grounds/motion-text";
import { MotionAnimation } from "@/interfaces/@types-constants";
import { GroundLabel } from "@/components/playground/ground-label";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import { MotionTextInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import getRandomAnimation from "@/motion/utils/getRandomAnimation";
import { setDelayLogic, setMotion } from "@/redux/slices/motion";
import PlaygroundController from "@/components/playground/controller";
import { PlayerControllerProps } from "@/interfaces/@types-components";
import { DelayLogic } from "@/motion/types";
import PlaygroundConfiguration from "@/components/playground/configuration";

export default function MotionTextPage() {
  const dispatch = useDispatch();

  const { control, onReverse, onStop, reset } = useAnimationControl();
  const { isAnimationStopped, reverse } = useAnimation(control);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animation, setAnimation] = useState<MotionAnimation>(
    MotionTextInitialState
  );

  const { complexity, settings } = useSelector(
    (state: ReduxRootState) => state.metadata
  );

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
        <title>Playgrounds | Motion Text</title>
      </Head>
      <Text
        animation={animation.animation}
        delayLogic={animation.delayLogic}
        settings={settings["MotionText"]}
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
      <GroundLabel className="text-8xl">Motion Text</GroundLabel>
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
