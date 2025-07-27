import { InfoBoxRoutesProps } from "@/interfaces";
import { SyntaxViewer } from "./child/syntax-viewer";
import MotionLearn from "./child/motion-learn";
import MotionHints from "./child/motion-hints";

export default {
  hints: MotionHints,
  view: SyntaxViewer,
  learn: MotionLearn,
} satisfies InfoBoxRoutesProps;
