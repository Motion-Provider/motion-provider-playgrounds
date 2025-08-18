import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import { AnimationKeys } from "@/motion/types";
import getMotionKey from "@/utils/getMotionKey";
import MotionMovie from "@/motion/motion-movie";

const Movie: FC = () => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const reduxController = useSelector(selectController);

  const { animationDuration, images, pieces } = settings["MotionMovie"];

  const key = getMotionKey(
    (animation.mode as AnimationKeys[]).join("-"),
    "movie",
    `${delayLogic}-${animation.transition}-${animation.duration}`
  );
  return (
    <MotionMovie
      animations={{
        enter: animation.mode,
        exit: animation.mode,
        transition: animation.transition,
        duration: animation.duration,
      }}
      config={{
        pieces: pieces,
        images,
        animationDuration,
        delayLogic,
      }}
      key={key}
      wrapperClassName="size-[500px] rounded-lg overflow-hidden z-50"
      fallback={<Skeleton className="size-[500px] dark" />}
      controller={{
        trigger: true,
        isAnimationStopped: reduxController.isAnimationStopped,
        reverse: reduxController.reverse,
      }}
    />
  );
};

export default Movie;
