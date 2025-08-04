import { FC } from "react";
import { cn } from "@/lib/utils";
import { interFont } from "@/lib/fonts";
import GridBg from "@/components/grid-bg";
import InfoBox from "@/components/infobox";
import { LayoutProps } from "@/interfaces/@types-layout";

const PlaygroundLayout: FC<LayoutProps> = ({ children, className }) => (
  <main
    className={cn(
      "w-full h-screen items-center justify-center flex overflow-hidden relative dark ",
      interFont.className,
      className
    )}
  >
    {children}
    <GridBg className="absolute top-0 left-0 w-full h-full" />
    <InfoBox />
  </main>
);

export default PlaygroundLayout;
