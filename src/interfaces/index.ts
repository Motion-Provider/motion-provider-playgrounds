import { MotionAnimationProps, MotionChainProps } from "@/motion/types";
import { CreateSliceOptions } from "@reduxjs/toolkit";

export interface MotionCircleAnimationProps {
  mode: MotionAnimationProps["mode"];
  transition: MotionAnimationProps["transition"];
}
export interface MotionCircleLayoutProps
  extends Omit<
    MotionChainProps,
    "animations" | "children" | "className" | "elementType" | "config"
  > {
  animation: MotionCircleAnimationProps;
  delayLogic?: MotionChainProps["config"]["delayLogic"];
}
export type ReduxReducerType = CreateSliceOptions["reducers"];
export type ReduxSelectorType = CreateSliceOptions["selectors"];
