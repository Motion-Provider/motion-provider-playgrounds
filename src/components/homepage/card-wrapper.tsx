import { cn } from "@/lib/utils";
import { FC, memo } from "react";
import { CardWrapperProps } from "@/interfaces/@types-components";

const CardWrapper: FC<CardWrapperProps> = memo(({ id, onHover, children }) => (
  <div
    data-id={id}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(undefined)}
    className={cn("relative w-full h-full")}
  >
    {children}
  </div>
));

export default CardWrapper;
