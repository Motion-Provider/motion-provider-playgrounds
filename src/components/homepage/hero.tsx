import MotionText from "@/motion/motion-text";
import { Logo } from "../logo";
import { Badge } from "../ui/badge";
import { Waitlist } from "./waitlist";
import Link from "next/link";
3;
export const Hero = () => (
  <div className="relative size-full flex md:p-24 p-12 items-center-safe">
    <div className="flex gap-4 flex-col ">
      <div>
        <Badge variant="outline">
          Now <b>BETA</b> with <i>playgrounds</i>
        </Badge>
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
            duration: 0.024,
            mode: "words",
            delayLogic: "linear",
          }}
        >
          Feel free to jump between twenty random repos to find your copy-paste
          "desired" animation that god knows how written or just snag this one
          framework and watch how your imagination come alive with truly "go—to"
          powerhouse.
        </MotionText>
        <Waitlist />
      </div>
    </div>
    <Logo />
    <p className="absolute bottom-8 md:right-auto right-0 text-muted-foreground text-xs text-center w-full md:w-auto">
      ©{new Date().getFullYear()} Motion Provider —{" "}
      <Link
        href="https://burakdev.com"
        target="_blank"
        className="hover:underline underline-offset-2"
      >
        created by Burak Bilen.
      </Link>
    </p>
  </div>
);
