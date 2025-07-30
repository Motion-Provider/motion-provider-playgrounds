import MotionImage from "@/motion/motion-image";
import { FC } from "react";
import { MotionImageProps } from "@/motion/types";
import { ImageLayoutProps } from "@/interfaces/@types-layout";

export const Image: FC<
  ImageLayoutProps & {
    fn: MotionImageProps["config"]["fn"];
    config?: MotionImageProps["config"];
  }
> = ({
  controller,
  animation,
  img,
  fn,
  config = {
    /** 30 circles assigned but normally it has to be dynamic and synced by props from the parent */
    duration: 0.15 * 30,
    pieces: 64,
    delayLogic: "pendulum",
    img: img,
    fn,
  },
}) => {
  return (
    <div className="absolute size-[162px] flex items-center justify-center rounded-full p-6 font-mono overflow-hidden">
      <MotionImage
        animation={{ ...animation, duration: 2.5 }}
        config={config}
        wrapperClassName="size-[162px] absolute rounded-full z-50"
        controller={controller}
        key={animation.mode[0]}
      />
    </div>
  );
};
