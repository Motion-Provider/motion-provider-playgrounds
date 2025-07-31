import { GetCodeViewProps } from "@/interfaces/@types-utils";

export default function getCodeView({
  id,
  metadata,
  motion,
  comment,
  commentIncluded,
}: GetCodeViewProps): string {
  const { currentMotion } = metadata;
  const { animation, delayLogic } = motion;

  switch (currentMotion) {
    case "MotionChain":
      return `${commentIncluded && `/*${comment}*/`}

import MotionChain from "@/motion/motion-chain";
import { MotionAnimationProps } from "@/motion/types";

const items = Array.from({ length: 5 }, (_, i) => <div className="size-12 my-1 rounded-2xl bg-stone-700 text-white grid place-items-center">{i + 1}</div>);
const animations = items.map(() => ({
  mode: ${JSON.stringify(animation.mode)},
  transition: ${JSON.stringify(animation.transition)},
  duration: ${JSON.stringify(animation.duration)},
})) as MotionAnimationProps[]

export function ${currentMotion}_${id}() {
    return (
      <MotionChain 
        animations={animations}
        config={{
          duration: 0.15,
          delayLogic: ${JSON.stringify(delayLogic)},
        }}
        elementType="div"
      >
        {items}
      </MotionChain>
    )
}
`;
    case "MotionContainer":
      return "MCP";
    default:
      return "";
  }
}
