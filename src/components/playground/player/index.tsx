import {
  PlaygroundConfigurationProps,
  PlaygroundPlayerProps,
} from "@/interfaces";
import { Controller } from "./controller";
import { Viewer } from "./viewer";
import { FC } from "react";
import { interFont } from "@/lib/fonts";
import { Configuration } from "./configuration";
import MotionContainer from "@/motion/motion-container";

const Player: FC<
  PlaygroundPlayerProps & Omit<PlaygroundConfigurationProps, "className">
> = ({ animation, onAnimationChange, delayLogic, onDelayLogicChange }) => {
  return (
    <div
      className={`w-full ${interFont.className} max-h-[500px] rounded-2xl p-6 bg-transparent`}
    >
      <MotionContainer
        animation={{
          mode: ["typingEffect"],
          transition: "smooth",
          delay: 0.25,
          duration: 2,
        }}
        elementType={"div"}
        className="absolute bottom-0  -z-10 size-12 rounded-full bg-blue-500/20 blur-3xl"
      />
      <div className="size-full flex flex-row gap-2">
        <Controller
          animation={animation}
          onAnimationChange={onAnimationChange}
          className="w-2/5 h-full"
        />
        <div className="w-3/5 h-full flex flex-col gap-2">
          <Viewer
            animation={animation}
            className="h-2/3 w-full"
            delayLogic={delayLogic}
          />
          <Configuration
            animation={animation}
            delayLogic={delayLogic}
            onAnimationChange={onAnimationChange}
            onDelayLogicChange={onDelayLogicChange}
            className="h-1/3 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
