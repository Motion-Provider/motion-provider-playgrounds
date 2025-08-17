import { cn } from "@/lib/utils";
import { FC } from "react";
import { CardWrapperProps } from "@/interfaces/@types-components";

const CardWrapper: FC<CardWrapperProps> = ({
  id,
  onHoverEnter,
  onHoverLeave,
  children,
}) => (
  <div
    data-id={id}
    onMouseEnter={() => onHoverEnter(id)}
    onMouseLeave={() => onHoverLeave()}
    className={cn("relative w-full h-full")}
  >
    {children}
  </div>
);

export default CardWrapper;
