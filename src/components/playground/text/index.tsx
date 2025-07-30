import { MotionPlaygroundProps } from "@/interfaces/@types-components";
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
        space: 2,
      }}
      elementType="h1"
      wrapperClassName="font-primary absolute left-[10vw] -translate-x-1/2 -rotate-90"
      className={cn(
        "font-primary text-clip bg-clip-text text-transparent bg-gradient-to-t from-primary/30 to-white/10 font-light",
        className
      )}
      key={children?.toString()}
      controller={controller}
    >
      {children}
    </MotionText>
  );
};
