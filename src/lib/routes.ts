import SyntaxViewer from "../components/info-box/child/syntax-viewer";
import MotionLearn from "../components/info-box/child/motion-learn";
import MotionHints from "../components/info-box/child/motion-hints";
import { InfoBoxRoutesProps } from "@/interfaces/@types-lib";

export default {
  hints: MotionHints,
  view: SyntaxViewer,
  learn: MotionLearn,
} as const satisfies InfoBoxRoutesProps;
