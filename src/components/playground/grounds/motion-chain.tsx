import { FC } from "react";
import { cn } from "@/lib/utils";
import MotionChain from "@/motion/motion-chain";
import { MotionCircleProps } from "@/interfaces/@types-components";

const Chain: FC<MotionCircleProps> = ({
  animation,
  controller,
  delayLogic,
  settings,
}) => {
  const { borderBlur, borderColor, circleCount } = settings;

  const circles = Array.from({ length: circleCount }).map(
    (_, i) => 184 + i * 32
  );

  return (
    <MotionChain
      animations={circles.map((_) => animation)}
      config={{
        duration: 0.15,
        delayLogic,
      }}
      elementType="div"
      className="border absolute rounded-full border-b-primary-foreground/30 border-t-secondary-foreground/60 bg-transparent border-x-stone-700 "
      controller={controller}
      key={animation.mode[0]}
    >
      {circles.map((_, idx) => (
        <div
          className={cn(
            "border rounded-full bg-transparent",
            circles[idx] % 12 === 0 && `${borderBlur} ${borderColor}`
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

export default Chain;
