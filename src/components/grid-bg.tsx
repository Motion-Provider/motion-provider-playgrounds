import { cn } from "@/lib/utils";
import { FC, useId } from "react";
import MotionContainer from "@/motion/motion-container";
import { GridBackgroundProps } from "@/interfaces/@types-components";

const GridBg: FC<GridBackgroundProps> = ({ className }) => (
  <MotionContainer
    className="absolute top-0 left-0 w-full h-full"
    animation={{
      mode: ["fadeIn"],
      transition: "smooth",
      duration: 1,
    }}
    elementType={"div"}
    key={useId()}
  >
    <div
      className={cn("absolute inset-0 size-full -z-10 opacity-5 ", className)}
      style={{
        backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
        backgroundSize: "10px 10px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      }}
    />
  </MotionContainer>
);

export default GridBg;
