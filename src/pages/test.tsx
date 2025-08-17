import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionChain from "@/motion/motion-chain";
import { ReduxRootState, ReduxStoreDispatchType } from "@/redux";
import {
  onReverseThunk,
  onStopThunk,
  selectController,
} from "@/redux/slices/utils";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const dispatch = useDispatch<ReduxStoreDispatchType>();

  return (
    <div className="h-screen w-full items-center justify-center flex flex-col relative">
      <ChainProto />
      <div className="absolute bottom-16  flex flex-row gap-3">
        <Button onClick={() => dispatch(onReverseThunk())}>Reverse</Button>
        <Button onClick={() => dispatch(onStopThunk())}>Reset</Button>
      </div>
    </div>
  );
}

const ChainProto = () => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { borderBlur, borderColor, circleCount } = settings["MotionChain"];

  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const circles = Array.from({ length: circleCount }).map(
    (_, i) => 184 + i * 32
  );

  return (
    <MotionChain
      animations={circles.map((_) => animation)}
      config={{
        duration: 0.15,
        delayLogic,
      }}
      elementType="div"
      className="border absolute rounded-full border-b-primary-foreground/30 border-t-secondary-foreground/60 bg-transparent border-x-stone-700 "
      controller={{
        configView: {
          amount: 0.5,
          once: false,
        },
        isAnimationStopped,
        reverse,
        trigger: true,
      }}
      key={animation.mode[0]}
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
};
