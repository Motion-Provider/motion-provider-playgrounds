import GridBg from "@/components/backgrounds/grid-bg";
import InfoBox from "@/components/info-box";
import { PlaygroundLayoutProps } from "@/interfaces";
import { interFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FC } from "react";

const PlaygroundLayout: FC<PlaygroundLayoutProps> = ({
  children,
  className,
}) => (
  <main
    className={cn(
      "w-full h-screen items-center justify-center flex overflow-hidden relative dark ",
      interFont.className,
      className
    )}
  >
    {children}
    <GridBg className={"absolute top-0 left-0 w-full h-full"} />
    <InfoBox />
  </main>
);

export default PlaygroundLayout;
