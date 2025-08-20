/** interfaces */

import {
  MotionControllerProps,
  MotionImageConfigProps,
  SplittedTextModes,
} from "@/motion/types";
import { MotionAnimation } from "./@types-constants";

/** Provider's settings interfaces */

export interface ReduxChainSettingsProps {
  borderColor: BorderColors;
  borderBlur: BorderBlur;
  circleCount: number;
}
export interface ReduxTextSettingsProps {
  fontSize: number;
  mode: SplittedTextModes;
  space: number;
}
export interface ReduxLinkSettingsProps {
  route: string;
  trigger: boolean;
}
export interface ReduxImageSettingsProps {
  img: string;
  fn: MotionImageConfigProps["fn"];
  pieces: MotionImageConfigProps["pieces"];
}
export interface ReduxContainerSettingsProps {
  backgroundColor: BackgroundColors;
}
export interface ReduxMovieSettingsProps
  extends Omit<ReduxImageSettingsProps, "img" | "fn"> {
  images: string[];
  animationDuration: number;
}

/** Utils interfaces */

export interface ReduxUtilsProps {
  isModalOpen: boolean;
  controller: Omit<MotionControllerProps, "trigger" | "configView">;
}

/** Provider's metadata interfaces */

export interface MetadataProps {
  currentMotion: Motions | undefined;
  settings: SettingsByProvider;
  complexity: Complexity;
}

export type SettingsByProvider = {
  MotionContainer: ReduxContainerSettingsProps;
  MotionChain: ReduxChainSettingsProps;
  MotionText: ReduxTextSettingsProps;
  MotionLink: ReduxLinkSettingsProps;
  MotionImage: ReduxImageSettingsProps;
  MotionMovie: ReduxMovieSettingsProps;
};

/** Controller Props */

export type MotionInitialsByProvider = Record<Motions, MotionAnimation>;
/** types */

export type Complexity = number;
export type Motions =
  | "MotionContainer"
  | "MotionChain"
  | "MotionText"
  | "MotionLink"
  | "MotionImage"
  | "MotionMovie";
export type BorderColors =
  | "border-sky-500"
  | "border-rose-500"
  | "border-emerald-500"
  | "border-purple-500";
export type BackgroundColors =
  | "bg-sky-500"
  | "bg-rose-500"
  | "bg-emerald-500"
  | "bg-purple-500";
export type BorderBlur =
  | "blur-sm"
  | "blur-md"
  | "blur-lg"
  | "blur-xl"
  | "blur-none";
