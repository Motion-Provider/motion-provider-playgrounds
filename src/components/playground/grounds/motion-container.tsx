import { Illustration } from "@/components/container-illustration";
import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const Container: FC = () => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const { backgroundColor } = settings["MotionContainer"];

  useMemo(() => {
    toast.warning(
      `Delays are not applicable to MotionContainer! So you might ask, why the input deployed there? The best learning curves always starts teaching/learning from the very wrong way.`,
      { duration: 5000, position: "top-center", richColors: true }
    );
  }, [delayLogic]);

  return (
    <MotionContainer
      elementType="div"
      className={cn(
        "size-96 items-center flex justify-center rounded-lg relative z-50",
        backgroundColor
      )}
      animation={animation}
      controller={{
        configView: {
          amount: 0.1,
          once: false,
        },
        isAnimationStopped,
        reverse,
      }}
      key={Object.keys(animation.mode).join("-")}
    >
      <Illustration className="size-full z-50  bg-black/40" />
    </MotionContainer>
  );
};

export default Container;
