import { MotionControllerProps, MotionImageProps } from "@/motion/types";
import { MotionPlaygroundProps } from "./@types-components";

/** playground */

export interface PlaygroundLayoutProps {
  className?: string;
  children: React.ReactNode;
}

/** infobox */

export interface InfoBoxLayoutProps {
  className?: string;
  children: React.ReactNode;
}
export interface ImageLayoutProps
  extends Omit<MotionPlaygroundProps, "children" | "style"> {
  img: MotionImageProps["config"]["img"];
}

export interface PageLayoutProps {
  children: React.ReactNode;
}
