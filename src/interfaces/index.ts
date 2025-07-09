import {
  MotionAnimationProps,
  MotionChainProps,
  MotionControllerProps,
  MotionImageProps,
  UseAnimationProps,
} from "@/motion/types";
import { CreateSliceOptions } from "@reduxjs/toolkit";

export interface MotionCircleAnimationProps {
  mode: MotionAnimationProps["mode"];
  transition: MotionAnimationProps["transition"];
  duration: MotionAnimationProps["duration"];
}
export interface MotionCircleLayoutProps
  extends Omit<
    MotionChainProps,
    "animations" | "children" | "className" | "elementType" | "config"
  > {
  animation: MotionCircleAnimationProps;
  delayLogic?: MotionChainProps["config"]["delayLogic"];
}
export interface MotionPlaygroundProps
  extends Pick<MotionCircleLayoutProps, "controller">,
    MotionCircleLayoutProps {
  children: React.ReactNode;
}

export interface ImageLayoutProps
  extends Omit<MotionPlaygroundProps, "children"> {
  img: MotionImageProps["config"]["img"];
}
export interface PlaygroundControllerLayoutProps {
  onReverse: () => void;
  onAnimate: () => void;
  onRandomAnimate: () => void;
  control: Omit<MotionControllerProps, "configView" | "trigger">;
}
export type ReduxReducerType = CreateSliceOptions["reducers"];
export type ReduxSelectorType = CreateSliceOptions["selectors"];
