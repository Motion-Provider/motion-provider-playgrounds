import { HomeCardsProps } from "@/interfaces";
import { FC } from "react";
import { CardItem } from "../showcase/card-item";
import { cn } from "@/lib/utils";
import CardWrapper from "./card-wrapper";

const Cards: FC<HomeCardsProps> = ({
  items,
  className,
  hoveredItemID,
  onHover,
}) => {
  return (
    <div
      className={cn(
        "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-1/2 h-full md:grid hidden ",
        className
      )}
    >
      {items.map((item) => (
        <CardWrapper
          id={item.id}
          key={item.id}
          isHovered={item.id === hoveredItemID}
          onHover={onHover}
        >
          <CardItem
            {...item}
            isHovered={item.id === hoveredItemID}
            key={item.id}
          />
        </CardWrapper>
      ))}
    </div>
  );
};

export default Cards;
