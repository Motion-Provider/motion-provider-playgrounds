import { MotionImageProps } from "@/motion/types";
import { MotionPlaygroundProps } from "./@types-components";

/** Global Layout Interfaces */

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface PageLayoutProps {
  children: React.ReactNode;
}

/** infobox */

export interface ImageLayoutProps
  extends Omit<MotionPlaygroundProps, "children" | "style"> {
  img: MotionImageProps["config"]["img"];
}
