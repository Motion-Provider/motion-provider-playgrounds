import MotionChain from "@/motion/motion-chain";
import { MotionAnimationProps } from "@/motion/types";

const items = Array.from({ length: 5 }, (_, i) => (
  <div className="size-8 rounded-2xl bg-stone-700 text-white grid place-items-center">
    {i + 1}
  </div>
));
const animations = items.map(() => ({
  mode: ["scaleZoomIn", "fadeIn"],
  transition: "cubicBounce",
  duration: 2.5,
})) as MotionAnimationProps[];

export function MotionChain_21bf5b() {
  return (
    <MotionChain
      animations={animations}
      config={{
        duration: 0.15,
        delayLogic: "linear",
      }}
      elementType={"div"}
    >
      {items}
    </MotionChain>
  );
}
