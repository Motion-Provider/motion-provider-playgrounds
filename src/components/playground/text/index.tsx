import { MotionPlaygroundProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import MotionText from "@/motion/motion-text";
import { FC } from "react";

export const Text: FC<
  Omit<MotionPlaygroundProps, "delayLogic"> & {
    className?: string;
  }
> = ({ animation, controller, children, className }) => {
  const currentDuration = (0.15 * String(children).length) / 0.5;

  return (
    <MotionText
      animation={animation}
      config={{
        duration: currentDuration,
        mode: "chars",
        delayLogic: "sinusoidal",
        space: 16,
      }}
      elementType="h1"
      wrapperClassName="font-primary text-9xl absolute top-[10vh]"
      className={cn(
        "font-primary text-clip bg-clip-text text-transparent bg-gradient-to-t  from-primary/50  to-white/20 font-light font-primary",
        className
      )}
      key={children?.toString()}
      controller={controller}
    >
      {children}
    </MotionText>
  );
};
