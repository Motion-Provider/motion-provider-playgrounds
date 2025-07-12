import {
  AnimationKeys,
  DelayLogic,
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
  onModalOpen: () => void;
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
  complexity: number;
}
export interface SchemaLayoutProps {
  schema: SchemaProps;
  onSettings: (key: keyof SchemaProps, value: string) => void;
}
export interface PlaygroundConfigProps
  extends PlaygroundPlayerProps,
    Omit<PlaygroundConfigurationProps, "className"> {
  controller: MotionControllerProps;
  animation: MotionAnimationProps;
  isModalOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface PlaygroundMiniViewerProps {
  animationMode: MotionAnimationProps["mode"];
  className?: string;
}
export interface PlayerControllerProps {
  animation: MotionAnimationProps;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
  className?: string;
}
export interface PlayerViewerProps {
  animation: MotionAnimationProps;
  className?: string;
}
export interface CopyCodeButtonProps {
  className?: string;
  onClick: () => void;
}
export interface Option {
  label: string;
  value: string;
}

export interface MultiSelectProps {
  items: AnimationKeys[];
  selected: AnimationKeys[];
  onChange: (selected: AnimationKeys[]) => void;
  placeholder?: string;
}
export interface PlaygroundSelectedMotionProps {
  selected: AnimationKeys[];
  onSelected: (selected: AnimationKeys[]) => void;
  className?: string;
}
export interface PlaygroundConfigurationProps {
  animation: MotionAnimationProps;
  delayLogic: DelayLogic;
  onDelayLogicChange: (delayLogic: DelayLogic) => void;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
  className?: string;
}
export type PlaygroundPlayerProps = Omit<
  PlayerControllerProps & PlayerViewerProps,
  "className"
>;
export type BorderColors =
  | "border-sky-500"
  | "border-rose-500"
  | "border-emerald-500"
  | "border-purple-500";
export type BorderBlur =
  | "blur-sm"
  | "blur-md"
  | "blur-lg"
  | "blur-xl"
  | "blur-none";
export type ReduxReducerType = CreateSliceOptions["reducers"];
export type ReduxSelectorType = CreateSliceOptions["selectors"];
