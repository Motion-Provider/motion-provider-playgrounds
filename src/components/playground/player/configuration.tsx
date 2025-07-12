import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PlaygroundConfigurationProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import { FC } from "react";

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
];

export const Configuration: FC<PlaygroundConfigurationProps> = ({
  delayLogic,
  animation,
  onAnimationChange,
  onDelayLogicChange,
  className,
}) => {
  return (
    <Card className={cn("dark relative bg-transparent size-full", className)}>
      <CardContent className="flex flex-col gap-2">
        <div className="w-full flex flex-row gap-2 px-2">
          <Label className="w-1/2 tracking-tight">Delay logic:</Label>
          <Select value={delayLogic} onValueChange={onDelayLogicChange}>
            <SelectTrigger className="w-full text-xs">
              Change animation sequence
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
        <div className="w-full flex flex-row gap-2 px-2 justify-between">
          <Label className="w-1/2 tracking-tight">Animation Transition</Label>
          <Select value={delayLogic} onValueChange={onDelayLogicChange}>
            <SelectTrigger className="w-full text-xs">
              Change animation transition
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
        <div className="w-full flex flex-row gap-2 px-2 justify-between">
          <Label className="w-auto tracking-tight">Animation Duration</Label>
          <div className="w-2/3  flex flex-row gap-2">
            <Slider
              defaultValue={[animation.duration!]}
              max={15}
              step={0.25}
              value={[animation.duration!]}
              onValueChange={(value) =>
                onAnimationChange("duration", value[0].toString())
              }
              className="dark"
            />
            <Badge variant={"outline"}>
              {animation.duration}
              {"(s)"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
