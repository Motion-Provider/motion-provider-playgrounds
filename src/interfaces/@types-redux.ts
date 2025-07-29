/** interfaces */

export interface ReduxMetadataProps {
  currentMotion: Motions | undefined;
}

export interface ReduxProviderProps {
  children: React.ReactNode;
}

/** types */

export type Motions =
  | "MotionContainer"
  | "MotionChain"
  | "MotionText"
  | "MotionLink"
  | "MotionImage"
  | "MotionMovie";
