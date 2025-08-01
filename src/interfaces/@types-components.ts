import { buttonVariants } from "@/components/ui/button";
import {
  AnimationKeys,
  DelayLogic,
  MotionAnimationProps,
  MotionChainProps,
  MotionControllerProps,
} from "@/motion/types";
import { VariantProps } from "class-variance-authority";

/***** interfaces *****/

/** background */

export interface GridBackgroundProps {
  className?: string;
}

export interface HomepageBgProps {
  selectedItemID: number | undefined;
  className?: string;
}
/** playground */

export interface MotionCircleAnimationProps {
  mode: MotionAnimationProps["mode"];
  transition: MotionAnimationProps["transition"];
  duration: MotionAnimationProps["duration"];
}

export interface MotionCircleProps
  extends Pick<MotionChainProps, "controller"> {
  animation: MotionCircleAnimationProps;
  delayLogic?: MotionChainProps["config"]["delayLogic"];
}

export interface PlayerControllerProps {
  animation: MotionAnimationProps;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
  className?: string;
}

export interface PlaygroundMiniViewerProps {
  animationMode: MotionAnimationProps["mode"];
  className?: string;
}

export interface PlayerViewerProps {
  delayLogic: DelayLogic;
  animation: MotionAnimationProps;
  className?: string;
}

export interface PlaygroundConfigProps
  extends PlaygroundPlayerProps,
    Omit<PlaygroundConfigurationProps, "className"> {
  animation: MotionAnimationProps;
  isModalOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PlaygroundControllerProps {
  onReverse: () => void;
  onAnimate: () => void;
  onRandomAnimate: () => void;
  onReset: () => void;
  onModalOpen: () => void;
  control: Omit<MotionControllerProps, "configView" | "trigger">;
}

export interface PlaygroundConfigurationProps {
  animation: MotionAnimationProps;
  delayLogic: DelayLogic;
  onDelayLogicChange: (delayLogic: DelayLogic) => void;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
  className?: string;
}

export interface MotionPlaygroundProps
  extends Pick<MotionCircleProps, "controller">,
    Omit<MotionCircleProps, "style"> {
  children: React.ReactNode;
}

export interface PlaygroundConfigurationProps {
  animation: MotionAnimationProps;
  delayLogic: DelayLogic;
  onDelayLogicChange: (delayLogic: DelayLogic) => void;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
  className?: string;
}

export interface PlaygroundSelectedMotionProps {
  selected: AnimationKeys[];
  onSelected: (selected: AnimationKeys[]) => void;
  className?: string;
}

export interface MultiSelectProps {
  items: AnimationKeys[];
  selected: AnimationKeys[];
  onChange: (selected: AnimationKeys[]) => void;
  placeholder?: string;
}

export interface DockItem {
  text: string;
  children: React.ReactNode;
}

export interface DockProps {
  items: DockItem[];
  className?: string;
}

/** Landing page props */

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
    HomepageTransitionSectionProps {
  className?: string;
  onHover: (id: number | undefined) => void;
  hoveredItemID?: MotionCardItemProps["id"];
  items: MotionCardItem[];
}

export interface HomepageTransitionSectionProps {
  controller: MotionControllerProps;
}

export interface CardWrapperProps {
  id: number;
  isHovered: boolean;
  onHover: (id?: number) => void;
  children: React.ReactNode;
}

/** Infobox Props */

export interface SyntaxViewerProps {
  className?: string;
  currentMotion: Pick<MotionChainProps, "config" | "animations">;
}
export interface HintItemProps {
  text: string;
  motion?: string;
}
export interface InfoboxRouteItem {
  name: string;
  Component: React.ComponentType;
}
/** Pure component props */

export interface CopyCodeButtonProps {
  className?: string;
  onClick: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
}
export interface Option {
  label: string;
  value: string;
}
export interface SquareBackgroundPatternProps {
  width?: number;
  height?: number;
  squareSize?: number;
  gap?: number;
  color?: string;
  backgroundColor?: string;
  patternId?: string;
  className?: string;
}

/***** types *****/

export type MotionCircleStateProps = Omit<
  MotionCircleProps,
  "controller" | "style"
>;
export type PlaygroundPlayerProps = Omit<
  PlayerControllerProps & PlayerViewerProps,
  "className"
>;
