import { useMemo } from "react";
import { Ban, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionChain from "@/motion/motion-chain";
import { MotionChainProps } from "@/motion/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { ReduxRootState, ReduxStoreDispatchType } from "@/redux";
import { setMotion } from "@/redux/slices/motion";
import { AnimationKeys } from "@/motion/constants/animations";

export const SelectedMotion = () => {
  const dispatch = useDispatch<ReduxStoreDispatchType>();
  const { animation } = useSelector((state: ReduxRootState) => state.motion);
  const { mode: currentModes } = animation;

  const handleRemoveItem = (val: AnimationKeys) =>
    dispatch(
      setMotion({
        mode: (currentModes as AnimationKeys[]).filter((item) => item !== val),
      })
    );

  const chainAnimations = useMemo(
    () =>
      Array.from({ length: currentModes.length }).map(() => ({
        mode: ["filterBlurIn", "fadeUp"],
        transition: "elasticSoft",
        duration: 1,
      })) as MotionChainProps["animations"],
    [currentModes.length]
  );

  if (currentModes.length === 0)
    return (
      <div className="h-[250px]  w-full">
        <div className="w-full my-1 text-rose-500 rounded-md bg-card py-2 px-4  flex items-center justify-between text-sm tracking-tight ">
          No animation found.
          <Ban className="size-4" />
        </div>
      </div>
    );
  return (
    <ScrollArea className="h-[250px] w-full">
      <MotionChain
        animations={chainAnimations}
        elementType="div"
        config={{
          duration: 1 / currentModes.length,
          delayLogic: "linear",
        }}
        controller={{
          configView: {
            once: false,
            amount: 0.5,
          },
        }}
        key={currentModes.length}
        className="size-full items-center justify-center flex flex-col gap-2"
      >
        {(currentModes as AnimationKeys[]).map((item, idx) => (
          <Button
            variant={"outline"}
            onClick={() => handleRemoveItem(item)}
            className="w-full my-1 hover:text-rose-500"
            key={idx}
          >
            <pre>{item}</pre>
            <Trash className="size-4" />
          </Button>
        ))}
      </MotionChain>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
