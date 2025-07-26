import { MotionCardItemProps } from "@/interfaces";
import MotionContainer from "@/motion/motion-container";
import MotionImage from "@/motion/motion-image";
import { FC, memo } from "react";
import { Button } from "../ui/button";
import { MotionControllerProps } from "@/motion/types";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MotionLink from "@/motion/motion-link";

export const CardItem: FC<MotionCardItemProps> = memo((props) => {
  const { title, desc, img, isHovered, onClick } = props;

  const controller = {
    configView: {
      once: false,
      amount: 0.5,
    },
    trigger: isHovered,
  } as MotionControllerProps;

  const btnTitle = title.toLowerCase().replace("motion", "the");
  const btnLink = title
    .toLowerCase()
    .replace(" ", "-")
    .replace("motion", "the");

  return (
    <div className="h-full text-center items-center flex justify-center relative overflow-hidden group ">
      <MotionImage
        animation={{
          mode: ["filterBlurIn"],
          transition: "smooth",
          duration: 1,
        }}
        config={{
          duration: 0.5,
          pieces: 25,
          delayLogic: "pendulum",
          img: img,
        }}
        controller={controller}
        wrapperClassName="absolute size-full object-cover -z-10"
      />
      <MotionContainer
        animation={{
          mode: ["fadeIn"],
          transition: "smooth",
          delay: 0.22,
          duration: 0.25,
        }}
        elementType={"div"}
        controller={controller}
        className="absolute size-full inset-0 bg-gradient-to-b from-transparent via-transparent via-20% to-gray-300 "
      />
      <div className="absolute size-full z-10 bottom-0 h-1/3 px-6 justify-end flex-col flex gap-3 group-hover:text-black transition-colors duration-500">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold tracking-tighter text-start">
            {title}
          </h1>
          <p
            className={cn(
              "text-sm tracking-tighter text-start",
              isHovered ? "text-ellipsis" : "truncate"
            )}
          >
            {desc}
          </p>
        </div>
        <Button
          variant={isHovered ? "default" : "outline"}
          className="mb-4 w-full shrink-0 z-50 border-none scale-90 text-xs"
        >
          <MotionLink
            onReverse={() => onClick()}
            href={`/${btnLink}`}
            timer={3000}
            className="flex flex-row gap-2 size-full items-center justify-center"
          >
            Create {btnTitle} animation <ArrowRight className="size-4" />
          </MotionLink>
        </Button>
      </div>
    </div>
  );
});
