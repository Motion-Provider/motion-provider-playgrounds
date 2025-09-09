import { ReduxRootState } from "@/redux";
import { AnimationKeys } from "@/motion/constants/animations";

export interface GetCodeViewProps extends Omit<ReduxRootState, "utils"> {
  id: string;
  comment?: string;
  commentIncluded?: boolean;
}

export interface FontsSizeRangesSchema {
  value: number;
  className: string;
}

export type GetMotionKey = (
  data: string,
  prefix: string,
  median: string
) => string;

export type GetRandomAnimation = AnimationKeys[] | AnimationKeys | undefined;
export interface GetRandomAnimationProps {
  count: number;
}
