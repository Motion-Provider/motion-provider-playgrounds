import { Skeleton } from "@/components/ui/skeleton";
import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import getMotionKey from "@/utils/getMotionKey";
import MotionMovie from "@/motion/motion-movie";
import { AnimationKeys } from "@/motion/constants/animations";

const Movie: FC = () => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const reduxController = useSelector(selectController);

  const { animationDuration, images, pieces } = settings["MotionMovie"];

  const key = useMemo(
    () =>
      getMotionKey(
        (animation.mode as AnimationKeys[]).join("-"),
        "movie",
        `${delayLogic}-${animation.transition}-${animation.duration}-${animationDuration}`
      ),
    [animation, delayLogic, animationDuration]
  );

  return (
    <MotionMovie
      animations={{
        enter: animation.mode,
        exit: ["fadeOut"],
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
      wrapperClassName="size-[500px] z-50 rounded-lg absolute"
      fallback={<Skeleton className="size-[500px] " />}
      controller={{
        configView: {
          amount: 0.5,
          once: false,
        },
        isAnimationStopped: reduxController.isAnimationStopped,
        reverse: reduxController.reverse,
        trigger: true,
      }}
    />
  );
};

export default Movie;
