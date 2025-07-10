import { BorderColors, MotionPlaygroundProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import MotionText from "@/motion/motion-text";
import { FC, useMemo } from "react";

export const Text: FC<
  Omit<MotionPlaygroundProps, "delayLogic"> & { borderColor: BorderColors }
> = ({ animation, controller, children, borderColor }) => {
  const textColor = useMemo(
    () => borderColor.replace("border-", "via-"),
    [borderColor]
  );

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
      wrapperClassName="font-primary -z-10 text-9xl absolute top-[10vh]"
      className={cn(
        "text-[12rem] font-primary text-clip bg-clip-text text-transparent bg-gradient-to-t from-primary/30 to-secondary dark:from-primary/70  dark:to-white/20 font-light font-primary",
        textColor
      )}
      controller={controller}
    >
      {children}
    </MotionText>
  );
};
