import { cn } from "@/lib/utils";
import { FC } from "react";

const MainPageGridBackground: FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn("absolute inset-0 size-full -z-10 opacity-5 ", className)}
    style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "10px 10px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
);

export default MainPageGridBackground;
