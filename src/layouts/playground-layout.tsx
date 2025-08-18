import { FC } from "react";
import { cn } from "@/lib/utils";
import { interFont } from "@/lib/fonts";
import GridBg from "@/components/grid-bg";
import InfoBox from "@/components/infobox";
import { LayoutProps } from "@/interfaces/@types-layout";
import MotionContainer from "@/motion/motion-container";

const PlaygroundLayout: FC<LayoutProps> = ({ children, className }) => (
  <div
    className={cn(
      "w-full h-screen items-center justify-center flex overflow-hidden relative dark ",
      interFont.className,
      className
    )}
  >
    {children}
    <GridBg className="absolute top-0 left-0 w-full h-full" />
    <InfoBox />
    <MotionContainer
      animation={{
        mode: ["fadeIn", "typingEffect"],
        transition: "delayedCubic",
        delay: 0.5,
        duration: 1,
      }}
      elementType="div"
      className="absolute -bottom-8 left-0 -z-10 w-full h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-40% to-rose-600 blur-3xl"
    />
  </div>
);

export default PlaygroundLayout;
