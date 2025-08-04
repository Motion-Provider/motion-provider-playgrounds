import { FC } from "react";
import { cn } from "@/lib/utils";

export const GroundLabel: FC<{ className?: string; children: string }> = ({
  className,
  children,
}) => {
  return (
    <h1
      className={cn(
        "font-primary text-clip bg-clip-text text-transparent bg-gradient-to-t from-primary/30 to-white/10 font-light font-primary absolute left-[10vw] -translate-x-1/2 -rotate-90",
        className
      )}
    >
      {children}
    </h1>
  );
};
