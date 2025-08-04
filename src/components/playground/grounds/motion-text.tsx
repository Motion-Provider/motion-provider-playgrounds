import { MotionTextCloneProps } from "@/interfaces/@types-components";
import MotionText from "@/motion/motion-text";
import { FC } from "react";

const Text: FC<MotionTextCloneProps> = ({
  animation,
  delayLogic,
  settings,
  controller,
}) => {
  const { mode, space } = settings;

  return (
    <MotionText
      elementType="p"
      animation={animation}
      config={{
        duration: 0.08,
        mode,
        space,
        delayLogic,
      }}
      wrapperClassName="font-primary absolute left-[10vw] -translate-x-1/2 -rotate-90"
      className="font-primary text-clip bg-clip-text text-transparent bg-gradient-to-t from-primary/30 to-white/10 font-light"
      key={animation.mode[0]}
      controller={controller}
    >
      Motion Text
    </MotionText>
  );
};

export default Text;
