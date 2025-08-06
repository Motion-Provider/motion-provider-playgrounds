import { Illustration } from "@/components/container-illustration";
import { MotionContainerCloneProps } from "@/interfaces/@types-components";
import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { FC, useMemo } from "react";
import { toast } from "sonner";

const Container: FC<MotionContainerCloneProps> = ({
  animation,
  controller,
  settings,
  delayLogic,
}) => {
  const { backgroundColor } = settings;

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
      controller={controller}
    >
      <Illustration className="size-full z-50  bg-black/40" />
    </MotionContainer>
  );
};

export default Container;
