﻿import { buttonVariants } from "@/components/ui/button";
import { MotionAnimationProps, MotionControllerProps } from "@/motion/types";
import { VariantProps } from "class-variance-authority";
import { SettingsByProvider } from "./@types-redux";
import { MotionAnimation } from "./@types-constants";

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

/** clone interfaces */

export interface StableCloneProps extends MotionAnimation {
  controller: MotionControllerProps;
}
export interface MotionChainCloneProps extends StableCloneProps {
  settings: SettingsByProvider["MotionChain"];
}

export interface MotionTextCloneProps extends StableCloneProps {
  settings: SettingsByProvider["MotionText"];
}

export interface MotionImageCloneProps extends StableCloneProps {
  settings: SettingsByProvider["MotionImage"];
}

/** clone interfaces ends */

export interface PlaygroundMiniViewerProps extends ClassNameProps {
  animationMode: MotionAnimationProps["mode"];
}
export type DockTooltip = string | React.ReactNode;
export interface DockItem {
  id: string;
  children: React.ReactNode;
  tooltip?: DockTooltip;
  ariaLabel?: string;
}
export interface DockProps extends ClassNameProps {
  items: DockItem[];
}
export interface DockContextValue {
  items: DockItem[];
  setItems: (items: DockItem[]) => void;
  updateItem: (id: string, patch: Partial<DockItem>) => void;
  registerItem: (item: DockItem) => () => void;
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
  children: React.ReactNode;
  onHoverEnter: (id: number) => void;
  onHoverLeave: () => void;
}

/** Infobox Props */

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
export interface SafariMockProps extends ClassNameProps {
  width?: number;
  height?: number;
}

export interface LinkNavItemProps extends ClassNameProps {
  id: number;
  title: string;
}
export type Tweet = {
  id: string;
  author: string;
  handle: string;
  avatar?: string;
  text: string;
  minutesAgo: number;
};

export interface SelectIconProps {
  name: string;
}

export interface LinkNavItem {
  id: number;
  title: string;
}

export interface LinkNavItemComponentProps {
  item: LinkNavItemProps;
  onClick?: () => void;
}

export type AnalyticsProps = {
  gaId?: string | undefined;
};
/******** Grounds Props *********/

/** Motion Text */

export type TextFieldsValue = { header: string; desc: string };
export type TextConfigValue = { duration: number };
export type TextFieldsDispatch = {
  setHeader: (v: string) => void;
  setDesc: (v: string) => void;
  getHeader: () => string;
  getDesc: () => string;
};
export type TextConfigDispatch = {
  setDuration: (v: number) => void;
  getDuration: () => number;
};
export interface FieldWrapperProps {
  children: React.ReactNode;
}
/** Motion Text Ends */
