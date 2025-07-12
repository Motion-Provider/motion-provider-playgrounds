import { PlaygroundMiniViewerProps } from "@/interfaces";
import { FC } from "react";
import MotionContainer from "@/motion/motion-container";
import { cn } from "@/lib/utils";

export const MiniViewer: FC<PlaygroundMiniViewerProps> = ({
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
        "size-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ",
        className
      )}
    />
  );
};
