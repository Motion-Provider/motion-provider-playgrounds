import { ReduxLibMotionChainProps, ReduxMetadataProps } from "@/interfaces";

const ReduxLibMotionChainInitialState = {
  animation: {
    mode: ["scaleZoomIn", "fadeIn"],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
} as ReduxLibMotionChainProps;

const ReduxLibMetadataInitialState = {
  currentMotion: undefined,
} as ReduxMetadataProps;

export { ReduxLibMotionChainInitialState, ReduxLibMetadataInitialState };
