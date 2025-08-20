import { MotionAnimation } from "@/interfaces/@types-constants";
import {
  MotionInitialsByProvider,
  MetadataProps,
  SettingsByProvider,
  ReduxUtilsProps,
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

const MotionImageInitialState: MotionAnimation = {
  animation: {
    mode: ["filterBlurIn", "fadeIn"],
    transition: "smooth",
    duration: 1,
  },
  delayLogic: "sinusoidal",
};

const MotionMovieInitialState: MotionAnimation = {
  animation: {
    mode: ["filterBlurIn", "fadeIn"],
    transition: "smooth",
    duration: 1,
  },
  delayLogic: "sinusoidal",
};
const MotionsAnimationInitialState: MotionInitialsByProvider = {
  MotionChain: MotionChainInitialState,
  MotionContainer: MotionDefaultInitialState,
  MotionText: MotionTextInitialState,
  MotionImage: MotionImageInitialState,
  MotionLink: MotionDefaultInitialState,
  MotionMovie: MotionMovieInitialState,
};

const MotionsInitialState: SettingsByProvider = {
  MotionChain: {
    borderBlur: "blur-none",
    borderColor: "border-rose-500",
    circleCount: 30,
  },
  MotionContainer: {
    backgroundColor: "bg-rose-500",
  },
  MotionImage: {
    fn: undefined,
    img: "/assets/motion-image.webp",
    pieces: 81,
  },
  MotionLink: {
    route: "motionsocials.dev/home",
    trigger: false,
  },
  MotionMovie: {
    images: ["/assets/motion-movie.webp", "/assets/motion-container.webp"],
    pieces: 81,
    animationDuration: 5,
  },
  MotionText: {
    fontSize: 16,
    mode: "chars",
    space: 0,
  },
};
const MetadataInitialState: MetadataProps = {
  currentMotion: undefined,
  settings: MotionsInitialState,
  complexity: 1,
};

const UtilsInitialState: ReduxUtilsProps = {
  isModalOpen: false,
  controller: {
    isAnimationStopped: false,
    reverse: false,
  },
};

export {
  MotionChainInitialState,
  MetadataInitialState,
  MotionsInitialState,
  MotionTextInitialState,
  MotionsAnimationInitialState,
  MotionDefaultInitialState,
  MotionImageInitialState,
  UtilsInitialState,
};
