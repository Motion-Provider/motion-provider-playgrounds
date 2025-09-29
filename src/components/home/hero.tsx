import { FC, memo } from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import MotionText from "@/motion/motion-text";
import { HomepageTransitionSectionProps } from "@/interfaces/@types-components";
import { MotionProviderLogo } from "../motion-provider-logo";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

const Waitlist = dynamic(() => import("@/components/home/waitlist"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-9 w-full" />
      <Skeleton className="h-4 w-1/2 rounded-sm" />
    </div>
  ),
});

const MotionLogo = dynamic(() => import("@/components/motion-logo"), {
  ssr: false,
  loading: () => <Skeleton className="size-8" />,
});

const DesktopAlert = dynamic(() => import("@/components/home/desktop-alert"), {
  ssr: false,
  loading: () => <Skeleton className="size-8" />,
});

const Hero: FC<HomepageTransitionSectionProps> = ({ controller }) => (
  <div className="relative size-full flex md:p-24 py-12 px-8 items-center-safe">
    <div className="flex gap-4 flex-col ">
      <Badge variant="outline">
        Now <b>BETA</b> with <i>playgrounds</i>
      </Badge>
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
          controller={controller}
          wrapperClassName="text-[2.6rem] md:text-7xl max-w-lg tracking-tighter text-left font-regular inline-flex"
        >
          Motion Provider
        </MotionText>
        <MotionText
          animation={{
            mode: ["filterBlurIn", "textShimmer", "fadeLeft", "rotateFlipX"],
            transition: "smooth",
            duration: 0.75,
          }}
          wrapperClassName="md:text-base leading-relaxed tracking-tight text-muted-foreground max-w-md text-left"
          elementType={"p"}
          controller={controller}
          config={{
            duration: 0.024,
            mode: "words",
            delayLogic: "linear",
          }}
        >
          Dig through countless repos hunting for that perfect copy‑paste
          “desired” animation—god knows who wrote it or why. Or just grab this
          one, and watch how quick your imagination actually show up on screen.
        </MotionText>
        <DesktopAlert />

        <Waitlist />
      </div>
    </div>
    <MotionLogo />
    <MotionProviderLogo />
    <p className="absolute bottom-12 md:right-auto right-0 text-muted-foreground text-xs text-center w-full md:w-auto">
      ©{new Date().getFullYear()} Motion Provider —{" "}
      <Link
        href="https://burakdev.com"
        target="_blank"
        className="hover:underline underline-offset-2"
      >
        crafted by Burak Bilen
      </Link>
    </p>
  </div>
);

export default memo(Hero);
