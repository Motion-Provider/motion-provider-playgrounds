import { ReduxRootState } from "@/redux";

export interface GetCodeViewProps extends ReduxRootState {
  id: string;
  comment?: string;
  commentIncluded?: boolean;
}

export interface FontsSizeRangesSchema {
  value: number;
  className: string;
}
