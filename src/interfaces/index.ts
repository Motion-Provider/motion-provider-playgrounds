import {
  DelayLogic,
  MotionAnimationProps,
  MotionControllerProps,
} from "@/motion/types";

export interface ReduxMotionProps {
  controller: MotionControllerProps;
  animation: MotionAnimationProps;
  logic: DelayLogic;
}
