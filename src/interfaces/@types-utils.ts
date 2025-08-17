import { ReduxRootState } from "@/redux";

export interface GetCodeViewProps extends Omit<ReduxRootState, "utils"> {
  id: string;
  comment?: string;
  commentIncluded?: boolean;
}

export interface FontsSizeRangesSchema {
  value: number;
  className: string;
}
