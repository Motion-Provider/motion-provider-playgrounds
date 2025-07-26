import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PlaygroundConfigurationProps } from "@/interfaces";
import { delayItems, transitionItems } from "@/lib/motion-types.lib";
import { cn } from "@/lib/utils";
import { TransitionKeys } from "@/motion/types";
import { FC } from "react";

export const Configuration: FC<PlaygroundConfigurationProps> = ({
  delayLogic,
  animation,
  onAnimationChange,
  onDelayLogicChange,
  className,
}) => {
  const handleTransitionChange = (value: TransitionKeys) =>
    onAnimationChange("transition", value);
  return (
    <Card className={cn("dark relative bg-transparent size-full", className)}>
      <CardContent className="flex flex-col gap-2 absolute size-full top-0 rounded-2xl p-4">
        <div className="w-full flex flex-row  px-2">
          <Badge
            className="w-1/4 tracking-tight border-r-0 rounded-r-none"
            variant="outline"
          >
            Delay
          </Badge>
          <Select value={delayLogic} onValueChange={onDelayLogicChange}>
            <SelectTrigger className="w-full text-xs border-l-0 rounded-l-none">
              Change sequence{`(${delayLogic})`}
            </SelectTrigger>
            <SelectContent className="w-full relative h-60 p-2 dark">
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
            <SelectContent className="w-full relative h-60 p-2 dark">
              {transitionItems.map((item) => (
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
              onValueChange={(value) =>
                onAnimationChange("duration", value[0] as never)
              }
              className="dark border  rounded-l-md border-r-0 p-2 "
            />
            <Badge
              variant={"secondary"}
              className="dark border-l-0 rounded-l-none"
            >
              Duration {animation.duration}
              {"(s)"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
