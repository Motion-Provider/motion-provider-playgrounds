/** interfaces */

import { MotionImageConfigProps, SplittedTextModes } from "@/motion/types";

interface ReduxChainSettingsProps {
  complexity: Complexity;
  borderColor: BorderColors;
  borderBlur: BorderBlur;
  circleCount: number;
}

interface ReduxTextSettingsProps {
  fontSize: number;
  fontFamily: string;
  mode: SplittedTextModes;
  space: number;
}

interface ReduxImageSettingsProps {
  img: string;
  fn: MotionImageConfigProps["fn"];
  pieces: MotionImageConfigProps["pieces"];
}

interface ReduxContainerSettingsProps {
  backgroundColor: BackgroundColors;
}
interface ReduxMovieSettingsProps extends Omit<ReduxImageSettingsProps, "img"> {
  images: string[];
}

export interface ReduxMetadataProps {
  currentMotion: Motions | undefined;
}

export interface ReduxProviderProps {
  children: React.ReactNode;
}

export interface ReduxControllerProps {}

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
