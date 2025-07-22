import { cn } from "@/lib/utils";
import { FC, memo, ReactNode } from "react";

const CardWrapper: FC<{
  id: number;
  isHovered: boolean;
  onHover: (id?: number) => void;
  children: ReactNode;
}> = memo(({ id, onHover, children }) => (
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
