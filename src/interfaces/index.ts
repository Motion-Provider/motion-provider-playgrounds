import { buttonVariants } from "@/components/ui/button";
import {
  AnimationKeys,
  DelayLogic,
  MotionAnimationProps,
  MotionChainProps,
  MotionContainerProps,
  MotionControllerProps,
  MotionImageProps,
} from "@/motion/types";
import { ReduxRootState } from "@/redux";
import { CreateSliceOptions } from "@reduxjs/toolkit";
import { VariantProps } from "class-variance-authority";

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
}
export interface SchemaProps {
  borderColor: BorderColors;
  borderBlur: BorderBlur;
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
  delayLogic: DelayLogic;
  animation: MotionAnimationProps;
  className?: string;
}
export interface CopyCodeButtonProps {
  className?: string;
  onClick: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
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
export interface MotionCardItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}
export interface MotionCardItemProps extends MotionCardItem {
  isHovered: boolean;
  onClick: () => void;
}
export interface HomeCardsProps
  extends Pick<MotionCardItemProps, "isHovered" | "onClick">,
    HomepageTransitionSection {
  className?: string;
  onHover: (id: number | undefined) => void;
  hoveredItemID?: MotionCardItemProps["id"];
  items: MotionCardItem[];
}
export interface HomepageTransitionSection {
  controller: MotionControllerProps;
}
export interface PageLayoutProps {
  children: React.ReactNode;
}
export interface PlaygroundLayoutProps {
  className?: string;
  children: React.ReactNode;
}
export interface InfoBoxLayoutProps {
  className?: string;
  children: React.ReactNode;
}
export interface SyntaxViewerProps {
  className?: string;
  currentMotion: Pick<MotionChainProps, "config" | "animations">;
}
export interface ReduxLibMotionChainProps {
  animation: MotionContainerProps["animation"];
  delayLogic: MotionChainProps["config"]["delayLogic"];
}
export interface ReduxProviderProps {
  children: React.ReactNode;
}
export interface ReduxMetadataProps {
  currentMotion: Motions | undefined;
}
export interface HintItemProps {
  text: string;
  motion?: string;
  backgroundImage?: string;
}
export interface GetCodeViewProps extends ReduxRootState {
  id: string;
  comment?: string;
  commentIncluded?: boolean;
}
/** ---------------------------------------------------------------------- */
export type InfoboxHintLibProps = string[];
export type InfoBoxRoutesProps = Record<string, React.ComponentType>;
export type MotionCircleStateProps = Omit<
  MotionCircleLayoutProps,
  "controller" | "style"
>;

export type SyntaxViewerOptions = Record<string, string>;
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
export type Motions =
  | "MotionContainer"
  | "MotionChain"
  | "MotionText"
  | "MotionLink"
  | "MotionImage"
  | "MotionMovie";
