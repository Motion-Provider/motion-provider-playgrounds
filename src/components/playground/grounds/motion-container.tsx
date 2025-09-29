import { cn } from "@/lib/utils";
import { AnimationKeys } from "@/motion/constants/animations";
import MotionContainer from "@/motion/motion-container";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import getMotionKey from "@/utils/getMotionKey";
import Image from "next/image";
import { FC, useMemo } from "react";
import { useSelector } from "react-redux";

const Container: FC = () => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation } = useSelector((state: ReduxRootState) => state.motion);
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const { backgroundColor } = settings["MotionContainer"];

  const key = useMemo(
    () =>
      getMotionKey(
        (animation.mode as AnimationKeys[]).join(" "),
        "container",
        `${animation.transition}-${animation.duration}`
      ),
    [animation]
  );
  return (
    <MotionContainer
      elementType="div"
      className={cn(
        "size-60 items-center flex justify-center rounded-full z-50 overflow-hidden relative",
        backgroundColor
      )}
      animation={animation}
      controller={{
        configView: {
          amount: 0.5,
          once: false,
        },
        isAnimationStopped,
        reverse,
        trigger: true,
      }}
      key={key}
    >
      <Image
        alt="Motion Provider Logo"
        src="/motion-provider-logo.png"
        className="rounded-full object-cover absolute"
        width={220}
        height={220}
      />
    </MotionContainer>
  );
};

export default Container;
