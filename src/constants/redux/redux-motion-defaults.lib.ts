import { MotionAnimation } from "@/interfaces/@types-constants";
import {
  MotionInitialsByProvider,
  MetadataProps,
  SettingsByProvider,
} from "@/interfaces/@types-redux";

const MotionChainInitialState: MotionAnimation = {
  animation: {
    mode: ["scaleZoomIn", "fadeIn"],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
};

const MotionDefaultInitialState: MotionAnimation = {
  animation: {
    mode: ["fadeIn"],
    transition: "smooth",
    duration: 1,
  },
  delayLogic: "linear",
};

const MotionTextInitialState: MotionAnimation = {
  animation: {
    mode: ["filterBlurIn", "fadeDown"],
    transition: "smooth",
    duration: 1,
  },
  delayLogic: "linear",
};

const MotionsAnimationInitialState: MotionInitialsByProvider = {
  MotionChain: MotionChainInitialState,
  MotionContainer: MotionDefaultInitialState,
  MotionText: MotionTextInitialState,
  MotionImage: MotionDefaultInitialState,
  MotionLink: MotionDefaultInitialState,
  MotionMovie: MotionDefaultInitialState,
};
const MotionsInitialState: SettingsByProvider = {
  MotionChain: {
    borderBlur: "blur-none",
    borderColor: "border-rose-500",
    circleCount: 30,
  },
  MotionContainer: {
    backgroundColor: "bg-purple-500",
  },
  MotionImage: {
    fn: undefined,
    img: "/assets/motion-image.webp",
    pieces: 81,
  },
  MotionLink: {
    href: "/",
    timer: 5000,
  },
  MotionMovie: {
    fn: undefined,
    images: ["/assets/motion-movie.webp", "/assets/motion-container.webp"],
    pieces: 81,
    animationDuration: 5,
  },
  MotionText: {
    fontFamily: "serif",
    fontSize: 24,
    mode: "chars",
    space: 0,
  },
};
const MetadataInitialState: MetadataProps = {
  currentMotion: undefined,
  settings: MotionsInitialState,
  complexity: 1,
};

export {
  MotionChainInitialState,
  MetadataInitialState,
  MotionsInitialState,
  MotionTextInitialState,
  MotionsAnimationInitialState,
  MotionDefaultInitialState,
};
