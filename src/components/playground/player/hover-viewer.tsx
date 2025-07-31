import { FC } from "react";
import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { PlaygroundMiniViewerProps } from "@/interfaces/@types-components";

export const HoverViewer: FC<PlaygroundMiniViewerProps> = ({
  animationMode,
  className,
}) => {
  return (
    <MotionContainer
      animation={{
        mode: animationMode,
        transition: "smooth",
        duration: 1,
        delay: 0.25,
      }}
      elementType={"div"}
      className={cn(
        "size-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        className
      )}
    />
  );
};
