import {
  MotionAnimationProps,
  MotionChainProps,
  MotionControllerProps,
  MotionImageProps,
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
  style: Pick<SchemaProps, "circleCount" | "borderBlur" | "borderColor">;
}
export interface MotionPlaygroundProps
  extends Pick<MotionCircleLayoutProps, "controller">,
    Omit<MotionCircleLayoutProps, "style"> {
  children: React.ReactNode;
}

export interface ImageLayoutProps
  extends Omit<MotionPlaygroundProps, "children" | "style"> {
  img: MotionImageProps["config"]["img"];
}
export interface PlaygroundControllerLayoutProps {
  onReverse: () => void;
  onAnimate: () => void;
  onRandomAnimate: () => void;
  onReset: () => void;
  onSettings: (key: keyof SchemaProps, value: string) => void;
  control: Omit<MotionControllerProps, "configView" | "trigger">;
}
export interface DockItem {
  text: string;
  children: React.ReactNode;
}
export interface DockProps {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}
export interface SchemaProps {
  borderColor: BorderColors;
  borderBlur: BorderBlur;
  img: string;
  imgMode?: MotionImageProps["config"]["fn"];
  circleCount: number;
}
export type BorderColors =
  | "border-sky-500"
  | "border-rose-500"
  | "border-emerald-500"
  | "border-purple-500";
export type BorderBlur = "blur-sm" | "blur-md" | "blur-lg" | "blur-xl";
export type ReduxReducerType = CreateSliceOptions["reducers"];
export type ReduxSelectorType = CreateSliceOptions["selectors"];
