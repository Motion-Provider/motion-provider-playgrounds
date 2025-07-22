import { HomeCardsProps } from "@/interfaces";
import { FC } from "react";
import { CardItem } from "../showcase/card-item";
import { cn } from "@/lib/utils";
import CardWrapper from "./card-wrapper";
import MotionChain from "@/motion/motion-chain";

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

export default Cards;
