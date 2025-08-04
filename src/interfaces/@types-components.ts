import { buttonVariants } from "@/components/ui/button";
import {
  AnimationKeys,
  DelayLogic,
  MotionAnimationProps,
  MotionChainProps,
  MotionControllerProps,
  MotionTextProps,
} from "@/motion/types";
import { VariantProps } from "class-variance-authority";
import { SettingsByProvider } from "./@types-redux";

/***** interfaces *****/

/** Globals */

export interface ClassNameProps {
  className?: string;
}

/** background */

export interface HomepageBgProps extends ClassNameProps {
  selectedItemID: number | undefined;
}

/********** playground **************/

/** motion engine clone interfaces */

export interface MotionPlaygroundAnimationProps {
  mode: MotionAnimationProps["mode"];
  transition: MotionAnimationProps["transition"];
  duration: MotionAnimationProps["duration"];
}

export interface MotionChainCloneProps
  extends Pick<MotionChainProps, "controller"> {
  animation: MotionPlaygroundAnimationProps;
  settings: SettingsByProvider["MotionChain"];
  delayLogic: MotionChainProps["config"]["delayLogic"];
}

export interface MotionTextCloneProps
  extends Pick<MotionTextProps, "controller"> {
  animation: MotionPlaygroundAnimationProps;
  settings: SettingsByProvider["MotionText"];
  delayLogic: MotionTextProps["config"]["delayLogic"];
}

/** motion engine clone interfaces ends */

export interface PlayerControllerProps {
  animation: MotionAnimationProps;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
  className?: string;
}

export interface PlaygroundMiniViewerProps extends ClassNameProps {
  animationMode: MotionAnimationProps["mode"];
}

export interface PlayerViewerProps extends ClassNameProps {
  delayLogic: DelayLogic;
  animation: MotionAnimationProps;
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

export interface PlaygroundConfigurationProps extends ClassNameProps {
  animation: MotionAnimationProps;
  delayLogic: DelayLogic;
  onDelayLogicChange: (delayLogic: DelayLogic) => void;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
}

export interface MotionPlaygroundProps
  extends Pick<MotionChainCloneProps, "controller">,
    Omit<MotionChainCloneProps, "style"> {
  children: React.ReactNode;
}

export interface PlaygroundConfigurationProps extends ClassNameProps {
  animation: MotionAnimationProps;
  delayLogic: DelayLogic;
  onDelayLogicChange: (delayLogic: DelayLogic) => void;
  onAnimationChange: (key: keyof MotionAnimationProps, value: string) => void;
}

export interface PlaygroundSelectedMotionProps extends ClassNameProps {
  selected: AnimationKeys[];
  onSelected: (selected: AnimationKeys[]) => void;
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

export interface DockProps extends ClassNameProps {
  items: DockItem[];
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
    HomepageTransitionSectionProps,
    ClassNameProps {
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

export interface SyntaxViewerProps extends ClassNameProps {
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

export interface CopyCodeButtonProps extends ClassNameProps {
  onClick: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
}
export interface Option {
  label: string;
  value: string;
}
export interface SquareBackgroundPatternProps extends ClassNameProps {
  width?: number;
  height?: number;
  squareSize?: number;
  gap?: number;
  color?: string;
  backgroundColor?: string;
  patternId?: string;
}

/***** types *****/

export type MotionCircleStateProps = Omit<
  MotionChainCloneProps,
  "controller" | "style"
>;
export type PlaygroundPlayerProps = Omit<
  PlayerControllerProps & PlayerViewerProps,
  "className"
>;
