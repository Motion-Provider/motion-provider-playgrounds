import { MotionChainProps, MotionContainerProps } from "@/motion/types";

/** interfaces */

export interface ReduxLibMotionProps {
  animation: MotionContainerProps["animation"];
  delayLogic: MotionChainProps["config"]["delayLogic"];
}

/** types */

export type InfoboxHintLibProps = string[];
export type InfoBoxRoutesProps = Record<string, React.ComponentType>;
export type SyntaxViewerOptions = Record<string, string>;
