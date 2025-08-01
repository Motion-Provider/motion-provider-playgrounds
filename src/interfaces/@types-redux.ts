/** interfaces */

import { MotionImageConfigProps, SplittedTextModes } from "@/motion/types";

export interface ReduxChainSettingsProps {
  complexity: Complexity;
  borderColor: BorderColors;
  borderBlur: BorderBlur;
  circleCount: number;
}

export interface ReduxTextSettingsProps {
  fontSize: number;
  fontFamily: string;
  mode: SplittedTextModes;
  space: number;
}
export interface ReduxLinkSettingsProps {
  href: string;
  timer: number;
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
  extends Omit<ReduxImageSettingsProps, "img"> {
  images: string[];
  animationDuration: number;
}

export interface ReduxMetadataProps {
  currentMotion: Motions | undefined;
  settings: SettingsByProvider;
}

export interface ReduxProviderProps {
  children: React.ReactNode;
}

// export interface ReduxControllerProps {}

export type SettingsByProvider = {
  MotionContainer: ReduxContainerSettingsProps;
  MotionChain: ReduxChainSettingsProps;
  MotionText: ReduxTextSettingsProps;
  MotionLink: ReduxLinkSettingsProps;
  MotionImage: ReduxImageSettingsProps;
  MotionMovie: ReduxMovieSettingsProps;
};
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
