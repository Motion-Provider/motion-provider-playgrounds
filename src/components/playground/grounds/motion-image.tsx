import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import MotionImage from "@/motion/motion-image";
import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import { MotionControllerProps } from "@/motion/types";
import getMotionKey from "@/utils/getMotionKey";
import { AnimationKeys } from "@/motion/constants/animations";

const MotionPlaygroundImage: FC = () => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const reduxController = useSelector(selectController);

  const { fn, img, pieces, duration } = settings["MotionImage"];

  useMemo(() => {
    if (typeof fn !== "undefined") {
      toast.info(
        `Image set to ${fn.toString()} function, ${fn.toString()} image to trigger animation and notice that the controller is disabled until the animation is set to "none"!`,
        { duration: 5000, position: "top-center", richColors: true }
      );
    }
  }, [fn]);

  const controller = useMemo(
    () =>
      ({
        configView: {
          once: false,
          amount: 0.5,
        },
        trigger: true,
        isAnimationStopped: reduxController.isAnimationStopped,
        reverse: reduxController.reverse,
      } as MotionControllerProps),
    [reduxController]
  );

  const key = getMotionKey(
    (animation.mode as AnimationKeys[]).join("-"),
    "image",
    `${delayLogic}-${animation.transition}-${
      animation.duration
    }-${JSON.stringify(fn)}`
  );
  return (
    <MotionImage
      animation={animation}
      config={{
        pieces,
        img,
        duration,
        delayLogic,
        fn: fn || undefined,
      }}
      key={key}
      wrapperClassName="size-[500px] rounded-lg overflow-hidden z-50"
      fallback={<Skeleton className="size-[500px] " />}
      controller={typeof fn === "undefined" ? controller : undefined}
    />
  );
};

export default MotionPlaygroundImage;
