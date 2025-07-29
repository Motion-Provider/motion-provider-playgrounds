import { ReduxRootState } from "@/redux";

export interface GetCodeViewProps extends ReduxRootState {
  id: string;
  comment?: string;
  commentIncluded?: boolean;
}
