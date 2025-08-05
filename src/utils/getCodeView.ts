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
    case "MotionText":
      return `${commentIncluded && `/*${comment}*/`}
import MotionText from "@/motion/motion-text";

export function ${currentMotion}_${id}() {
  return (
    <MotionText
      elementType="p"
      animation={{
        mode: ${JSON.stringify(animation.mode)},
        transition: ${JSON.stringify(animation.transition)},
        duration: ${JSON.stringify(animation.duration)},
      }}
      config={{
        duration: 0.12,
        mode: "chars",
        delayLogic: ${JSON.stringify(delayLogic)},
      }}
    >
      Hello World!
    </MotionText>
  );
}
`;
    case "MotionImage":
      return `${commentIncluded && `/*${comment}*/`}
import MotionImage from "@/motion/motion-image";

export function ${currentMotion}_${id}() {
  return (
    <MotionImage
      animation={{
        mode: ${JSON.stringify(animation.mode)},
        transition: ${JSON.stringify(animation.transition)},
        duration: ${JSON.stringify(animation.duration)},
      }}
      config={{
        duration: 0.88,
        // example image from unsplash
        img: "https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        delayLogic: ${JSON.stringify(delayLogic)},
        pieces: 64,
      }}
      wrapperClassName="size-[500px] rounded-lg overflow-hidden"
      fallback={<div className="size-96 animate-pulse bg-stone-800 rounded-lg" />}
    />
  );
}
`;
    default:
      return "";
  }
}
