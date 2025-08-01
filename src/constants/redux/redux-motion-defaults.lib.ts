import { ReduxLibMotionProps } from "@/interfaces/@types-lib";
import {
  ReduxMetadataProps,
  SettingsByProvider,
} from "@/interfaces/@types-redux";

const ReduxLibMotionChainInitialState: ReduxLibMotionProps = {
  animation: {
    mode: ["scaleZoomIn", "fadeIn"],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
};

const ReduxLibMotionsInitialState: SettingsByProvider = {
  MotionChain: {
    borderBlur: "blur-none",
    borderColor: "border-rose-500",
    circleCount: 30,
    complexity: 1,
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
  },
  MotionText: {
    fontFamily: "serif",
    fontSize: 24,
    mode: "chars",
    space: 0,
  },
};
const ReduxLibMetadataInitialState: ReduxMetadataProps = {
  currentMotion: undefined,
  settings: ReduxLibMotionsInitialState,
};

export {
  ReduxLibMotionChainInitialState,
  ReduxLibMetadataInitialState,
  ReduxLibMotionsInitialState,
};
