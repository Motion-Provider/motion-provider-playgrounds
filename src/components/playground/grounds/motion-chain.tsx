import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { ReduxRootState } from "@/redux";
import { useSelector } from "react-redux";
import MotionChain from "@/motion/motion-chain";
import { selectController } from "@/redux/slices/utils";
import getMotionKey from "@/utils/getMotionKey";
import { AnimationKeys } from "@/motion/types";

export default function Chain() {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { borderBlur, borderColor, circleCount } = settings["MotionChain"];
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const circles = Array.from({ length: circleCount }).map(
    (_, i) => 184 + i * 32
  );

  const animations = useMemo(
    () => circles.map((_) => animation),
    [circles, animation]
  );

  const key = useMemo(
    () =>
      getMotionKey(
        (animation.mode as AnimationKeys[]).join(" "),
        "chain",
        `${delayLogic}-${animation.transition}-${animation.duration}`
      ),
    [animation, delayLogic]
  );
  return (
    <MotionChain
      animations={animations}
      config={{
        duration: 0.15,
        delayLogic,
      }}
      elementType="div"
      className="border absolute rounded-full border-b-primary-foreground/30 border-t-secondary-foreground/60 bg-transparent border-x-stone-700 "
      controller={{
        configView: {
          amount: 0.1,
          once: false,
        },
        isAnimationStopped,
        reverse,
        trigger: true,
      }}
      key={key}
    >
      {circles.map((_, idx) => (
        <div
          className={cn(
            "border rounded-full bg-transparent",
            circles[idx] % 12 === 0 && `${borderBlur} ${borderColor}`
          )}
          style={{
            height: `${circles[idx]}px`,
            width: `${circles[idx]}px`,
          }}
          key={idx}
        />
      ))}
    </MotionChain>
  );
}
