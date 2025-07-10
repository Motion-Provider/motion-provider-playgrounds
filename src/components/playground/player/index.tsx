import { PlaygroundPlayerProps } from "@/interfaces";
import { Controller } from "./controller";
import { Viewer } from "./viewer";
import { FC } from "react";
import { interFont } from "@/lib/fonts";

const Player: FC<PlaygroundPlayerProps> = ({
  animation,
  onAnimationChange,
}) => {
  return (
    <div
      className={`w-full items-center justify-center gap-2 flex flex-row  *:[div]:min-h-[250px] ${interFont.className} max-h-[500px] p-6`}
    >
      <Controller
        animation={animation}
        onAnimationChange={onAnimationChange}
        className="w-2/5 h-full"
      />
      <Viewer animation={animation} className="w-3/5" />
    </div>
  );
};

export default Player;
