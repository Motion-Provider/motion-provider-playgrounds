import MotionChain from "@/motion/motion-chain";
import { FC } from "react";
import { circles } from "./data";
import { cn } from "@/lib/utils";

export const CircleLayout: FC = () => {
  return (
    <MotionChain
      animations={circles.map((_) => ({
        mode: ["fadeIn", "scaleZoomIn"],
        transition: "cubicElastic",
        duration: 2,
      }))}
      config={{
        duration: 0.15,
        isDynamicallyQueued: true,
        delayLogic: "linear",
      }}
      elementType="div"
      className="border absolute rounded-full border-b-primary-foreground/30 border-t-secondary-foreground/60 bg-transparent border-x-stone-700 "
      controller={{
        trigger: true,
      }}
    >
      {circles.map((_, idx) => (
        <div
          className={cn(
            circles[idx] % 12 === 0 &&
              "border border-sky-500 rounded-full blur-xs bg-transparent"
          )}
          style={{
            height: `${circles[idx]}px`,
            width: `${circles[idx]}px`,
          }}
          key={idx}
        />
      ))}
    </MotionChain>
  );
};
