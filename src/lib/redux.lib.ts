import { ReduxLibMotionChainProps } from "@/interfaces";

const ReduxLibMotionChainInitialState = {
  animation: {
    mode: ["scaleZoomIn", "fadeIn"],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
} as ReduxLibMotionChainProps;

export { ReduxLibMotionChainInitialState };
