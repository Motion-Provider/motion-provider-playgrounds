import { ReduxMetadataProps } from "@/interfaces/@types-redux";
import { GetCodeViewProps } from "@/interfaces/@types-utils";

export default function getCodeView({
  id,
  metadata,
  motion,
  comment,
  commentIncluded,
}: GetCodeViewProps) {
  switch (motion as unknown as ReduxMetadataProps["currentMotion"]) {
    case "MotionChain":
      return "MC";
    case "MotionContainer":
      return "MCP";
    default:
      break;
  }
}
