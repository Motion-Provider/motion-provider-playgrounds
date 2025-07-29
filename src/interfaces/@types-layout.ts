import { MotionControllerProps, MotionImageProps } from "@/motion/types";
import { MotionPlaygroundProps, SchemaProps } from "./@types-components";

/** playground */

export interface PlaygroundControllerLayoutProps {
  onReverse: () => void;
  onAnimate: () => void;
  onRandomAnimate: () => void;
  onReset: () => void;
  onModalOpen: () => void;
  onSettings: (key: keyof SchemaProps, value: string) => void;
  control: Omit<MotionControllerProps, "configView" | "trigger">;
}

export interface PlaygroundLayoutProps {
  className?: string;
  children: React.ReactNode;
}

/** schema */

export interface SchemaLayoutProps {
  schema: SchemaProps;
  onSettings: (key: keyof SchemaProps, value: string) => void;
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
