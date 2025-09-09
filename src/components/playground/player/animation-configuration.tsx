import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DelayLogic } from "@/motion/types";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { ReduxRootState, ReduxStoreDispatchType } from "@/redux";
import { setDelayLogic, setMotion } from "@/redux/slices/motion";
import transitions from "@/motion/constants/transitions";
import { TransitionKeys } from "@/motion/constants/transitions";

const delayItems = [
  "linear",
  "exponential",
  "sinusoidal",
  "custom",
  "square",
  "triangle",
  "sawtooth",
  "cosine",
  "fibonacci",
  "chaos",
  "pendulum",
  "perlin",
  "chaotic",
  "cumulative",
  "bounce",
  "spiral",
  "quantum",
] as DelayLogic[];

export const AnimationConfiguration = () => {
  const dispatch = useDispatch<ReduxStoreDispatchType>();
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );

  const handleTransitionChange = (value: TransitionKeys) =>
    dispatch(
      setMotion({
        transition: value,
      })
    );
  const handleDurationChange = (val: number) =>
    dispatch(setMotion({ duration: val }));

  const handleDelayChange = (log: DelayLogic) => dispatch(setDelayLogic(log));
  return (
    <Card className={" relative bg-transparent size-full h-1/3 w-full"}>
      <CardContent className="flex flex-col gap-2 absolute size-full top-0 rounded-2xl p-4">
        <div className="w-full flex flex-row  px-2">
          <Badge
            className="w-1/4 tracking-tight border-r-0 rounded-r-none"
            variant="outline"
          >
            Delay
          </Badge>
          <Select value={delayLogic} onValueChange={handleDelayChange}>
            <SelectTrigger className="w-full text-xs border-l-0 rounded-l-none">
              Change sequence{`(${delayLogic})`}
            </SelectTrigger>
            <SelectContent className="w-full relative h-60 p-2 ">
              {delayItems.map((item) => (
                <SelectItem
                  value={item}
                  title="Add an animation"
                  key={item}
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted cursor-pointer w-full relative"
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-row  px-2 justify-between">
          <Badge
            className="w-1/4 tracking-tight border-r-0 rounded-r-none "
            variant={"outline"}
          >
            Animation Transition
          </Badge>
          <Select
            value={animation.transition!}
            onValueChange={handleTransitionChange}
          >
            <SelectTrigger className="w-full text-xs border-l-0 rounded-l-none">
              Change transition{`(${animation.transition})`}
            </SelectTrigger>
            <SelectContent className="w-full relative h-60 p-2 ">
              {(Object.keys(transitions) as TransitionKeys[]).map((item) => (
                <SelectItem
                  value={item}
                  title="Add an animation"
                  key={item}
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted cursor-pointer w-full relative"
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-row gap-2 px-2 justify-between">
          <div className="w-full  flex flex-row ">
            <Slider
              defaultValue={[animation.duration!]}
              max={15}
              step={0.25}
              value={[animation.duration!]}
              onValueChange={(value) => handleDurationChange(value[0])}
              className=" border  rounded-l-md border-r-0 p-2 "
            />
            <Badge variant={"secondary"} className=" border-l-0 rounded-l-none">
              Duration {animation.duration}
              {"(s)"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
