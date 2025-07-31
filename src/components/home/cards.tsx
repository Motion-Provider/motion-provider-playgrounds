import { FC, memo } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  HomeCardsProps,
  MotionCardItemProps,
} from "@/interfaces/@types-components";
import CardWrapper from "./card-wrapper";
import { ArrowRight } from "lucide-react";
import MotionLink from "@/motion/motion-link";
import MotionImage from "@/motion/motion-image";
import MotionChain from "@/motion/motion-chain";
import { MotionControllerProps } from "@/motion/types";
import MotionContainer from "@/motion/motion-container";

const Cards: FC<HomeCardsProps> = ({
  items,
  className,
  onClick,
  hoveredItemID,
  onHover,
  controller,
}) => {
  return (
    <div
      className={cn(
        "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-1/2 h-full md:grid hidden",
        className
      )}
    >
      <MotionChain
        className="relative"
        animations={items.map(() => ({
          mode: ["fadeRight"],
          transition: "slowSmooth",
          duration: 1,
        }))}
        config={{
          duration: 0.33,
          delayLogic: "linear",
        }}
        controller={controller}
        elementType={"div"}
      >
        {items.map((item) => (
          <CardWrapper
            id={item.id}
            key={item.id}
            isHovered={item.id === hoveredItemID}
            onHover={onHover}
          >
            <CardItem
              onClick={onClick}
              {...item}
              isHovered={item.id === hoveredItemID}
              key={item.id}
            />
          </CardWrapper>
        ))}
      </MotionChain>
    </div>
  );
};

const CardItem: FC<MotionCardItemProps> = memo((props) => {
  const { title, desc, img, isHovered, onClick } = props;

  const controller = {
    configView: {
      once: false,
      amount: 0.5,
    },
    trigger: isHovered,
  } as MotionControllerProps;

  const btnTitle = title.toLowerCase().split("motion");
  const btnLink = title.toLowerCase().replace(" ", "-");

  return (
    <div className="h-full text-center items-center flex justify-center relative overflow-hidden group ">
      {title === "Motion Chain" && (
        <Badge
          variant={"outline"}
          className="z-50 top-4 right-4 absolute font-bold"
        >
          HOT 🔥
        </Badge>
      )}
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
          className="mb-4 w-full shrink-0 z-50 border-none text-xs relative"
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

export default Cards;
