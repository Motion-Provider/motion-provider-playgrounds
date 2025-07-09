import { ImageLayoutProps, MotionPlaygroundProps } from "@/interfaces";
import MotionImage from "@/motion/motion-image";
import { FC } from "react";
import { circles } from "./circle-layout/data";

const ImageLayout: FC<ImageLayoutProps> = ({ controller, animation, img }) => {
  return (
    <div className="absolute size-[162px] flex items-center justify-center rounded-full p-6 font-mono overflow-hidden">
      <MotionImage
        animation={{ ...animation, duration: 2.5 }}
        config={{
          duration: 0.15 * circles.length,
          pieces: 64,
          delayLogic: "pendulum",
          img: img,
        }}
        wrapperClassName="size-[162px] absolute rounded-full z-50"
        controller={controller}
        key={animation.mode[0]}
      />
    </div>
  );
};

export { ImageLayout };
