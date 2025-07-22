import MotionText from "@/motion/motion-text";
import { Badge } from "../ui/badge";
import { Waitlist } from "./waitlist";
import { Logo } from "../logo";

export const Hero = () => (
  <div className="relative size-full flex md:p-24 p-12 items-center-safe">
    <div className="flex gap-4 flex-col ">
      <div>
        <Badge variant="outline">Playgrounds</Badge>
      </div>
      <div className="flex gap-4 flex-col ">
        <MotionText
          elementType="h1"
          animation={{
            mode: ["filterBlurIn", "fadeDown"],
            transition: "smooth",
            delay: 0.5,
            duration: 1,
          }}
          config={{
            duration: 0.12,
            mode: "chars",
            delayLogic: "linear",
          }}
          wrapperClassName="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular"
        >
          Motion Provider
        </MotionText>

        <MotionText
          animation={{
            mode: ["filterBlurIn", "textShimmer", "fadeLeft", "rotateFlipX"],
            transition: "smooth",
            duration: 0.75,
          }}
          wrapperClassName="text-base leading-relaxed tracking-tight text-muted-foreground max-w-md text-left"
          elementType={"p"}
          config={{
            duration: 0.012,
            mode: "chars",
            delayLogic: "linear",
          }}
        >
          Motion Provider gives you everything you need for meaningful and
          reusable interactions — built for developers who'd rather write than
          hunt.
        </MotionText>
        <Waitlist />
      </div>
    </div>
    <Logo />
  </div>
);
