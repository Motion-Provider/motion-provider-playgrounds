import React from "react";
import { useSelector } from "react-redux";
import { selectController } from "@/redux/slices/utils";

export const PlayPauseLabel: React.FC = () => {
  const { isAnimationStopped } = useSelector(selectController);
  return <>{isAnimationStopped ? "Play" : "Pause"}</>;
};
