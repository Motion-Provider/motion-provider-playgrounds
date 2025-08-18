import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import Image from "next/image";
import { FC } from "react";
import { useSelector } from "react-redux";

const Container: FC = () => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation } = useSelector((state: ReduxRootState) => state.motion);
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const { backgroundColor } = settings["MotionContainer"];

  return (
    <MotionContainer
      elementType="div"
      className={cn(
        "size-60 items-center flex justify-center rounded-full relative z-50 overflow-hidden",
        backgroundColor
      )}
      animation={animation}
      controller={{
        isAnimationStopped,
        reverse,
      }}
      key={Object.keys(animation.mode).join("-")}
    >
      <Image
        alt="Motion Provider Logo"
        src="/motion-provider-logo.png"
        width={120}
        height={120}
        className="invert-100"
      />
    </MotionContainer>
  );
};

export default Container;
