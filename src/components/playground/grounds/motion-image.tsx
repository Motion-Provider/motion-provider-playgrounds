import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { MotionImageCloneProps } from "@/interfaces/@types-components";
import MotionImage from "@/motion/motion-image";
import { FC, useMemo } from "react";

const Image: FC<MotionImageCloneProps> = ({
  settings,
  animation,
  controller,
  delayLogic,
}) => {
  useMemo(() => {
    if (typeof settings.fn !== "undefined") {
      toast.info(
        `Image set to ${settings.fn.toString()} function, ${settings.fn.toString()} image to trigger animation and notice that the controller is disabled until the animation is set to "none"!`,
        { duration: 5000, position: "top-center", richColors: true }
      );
    }
  }, [settings.fn]);

  return (
    <MotionImage
      animation={animation}
      config={{
        ...settings,
        duration: 0.88,
        delayLogic,
        fn: settings.fn || undefined,
      }}
      wrapperClassName="size-[500px] rounded-lg overflow-hidden z-50"
      fallback={<Skeleton className="size-[500px]  dark" />}
      controller={typeof settings.fn === "undefined" ? controller : undefined}
    />
  );
};

export default Image;
