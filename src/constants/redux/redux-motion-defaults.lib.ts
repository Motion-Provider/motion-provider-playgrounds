import { ReduxLibMotionProps } from "@/interfaces/@types-lib";
import { ReduxMetadataProps } from "@/interfaces/@types-redux";

const ReduxLibMotionChainInitialState: ReduxLibMotionProps = {
  animation: {
    mode: ["scaleZoomIn", "fadeIn"],
    transition: "cubicBounce",
    duration: 2.5,
  },
  delayLogic: "linear",
};

const ReduxLibMetadataInitialState: ReduxMetadataProps = {
  currentMotion: undefined,
};

export { ReduxLibMotionChainInitialState, ReduxLibMetadataInitialState };
