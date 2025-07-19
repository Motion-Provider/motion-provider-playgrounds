import { MotionCardItem, MotionCardItemProps } from "@/interfaces";
import MotionContainer from "@/motion/motion-container";
import MotionImage from "@/motion/motion-image";
import { useHover } from "@uidotdev/usehooks";
import { FC, useEffect } from "react";
import { Button } from "../ui/button";
import { MotionControllerProps } from "@/motion/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CardItem: FC<MotionCardItemProps> = (props) => {
  const { id, title, desc, img, onHover } = props;

  const [ref, hovering] = useHover();

  const controller = {
    configView: {
      once: false,
      amount: 0.5,
    },
    trigger: hovering,
  } as MotionControllerProps;

  const btnTitle = title
    .toLowerCase()
    .replace(" ", "-")
    .replace("motion", "the");

  return (
    <div
      className="h-full text-center items-center flex justify-center relative overflow-hidden group "
      ref={ref}
    >
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
              hovering ? "text-ellipsis" : "truncate"
            )}
          >
            {desc}
          </p>
        </div>
        <Button
          variant={hovering ? "default" : "outline"}
          className="mb-4 w-full shrink-0 z-50 border-none scale-90 text-xs"
          asChild
        >
          <Link href={`/${btnTitle}`}>
            Create {btnTitle} animation <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
