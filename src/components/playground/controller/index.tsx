import { Dock } from "@/components/dock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DockItem,
  PlaygroundControllerLayoutProps,
  SchemaProps,
} from "@/interfaces";
import {
  Dice6,
  Pause,
  Play,
  Settings,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { FC, useMemo } from "react";

const ControllerLayout: FC<
  PlaygroundControllerLayoutProps & { schema: SchemaProps }
> = ({
  control,
  schema,
  onAnimate,
  onRandomAnimate,
  onReverse,
  onReset,
  onSettings,
}) => {
  const { borderBlur, borderColor, circleCount, img, imgMode } = schema;
  const components = useMemo(
    () =>
      [
        {
          children: (
            <Button
              variant="ghost"
              onClick={onReverse}
              className="cursor-pointer"
            >
              {control.reverse ? (
                <SkipForward className="size-5" />
              ) : (
                <SkipBack className="size-5" />
              )}
            </Button>
          ),
          text: control.reverse ? "Forwrd" : "Reverse",
        },
        {
          children: (
            <Button
              variant="ghost"
              onClick={
                !control.isAnimationStopped
                  ? onAnimate
                  : () => {
                      onReset();
                      onReverse();
                    }
              }
              className=" cursor-pointer"
            >
              {control.isAnimationStopped ? (
                <Play className="size-5" />
              ) : (
                <Pause className="size-5" />
              )}
            </Button>
          ),
          text: control.isAnimationStopped ? "Play" : "Pause",
        },
        {
          children: (
            <Button
              variant="ghost"
              onClick={onRandomAnimate}
              className=" cursor-pointer"
            >
              <Dice6 className="size-5 " />
            </Button>
          ),
          text: "Roll a Dice",
        },
        {
          children: (
            <Popover modal>
              <PopoverTrigger className="cursor-pointer dark">
                <Settings className="size-5 " />
              </PopoverTrigger>
              <PopoverContent className="dark">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="leading-none font-bold">Settings</h4>
                    <p className="text-muted-foreground text-sm">
                      Adjust settings for the circle.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex flex-row justify-between gap-4">
                      <Label htmlFor="count">Circle count</Label>
                      <Input
                        id="count"
                        min={1}
                        max={50}
                        defaultValue={circleCount}
                        type="number"
                        onChange={(e) => {
                          e.preventDefault();
                          onSettings("circleCount", e.target.value);
                        }}
                        className="col-span-2 h-8 w-3/5"
                      />
                    </div>
                    <div className="flex flex-row justify-between gap-4 ">
                      <Label htmlFor="borderColor">Color</Label>
                      <Select
                        onValueChange={(e) => onSettings("borderColor", e)}
                      >
                        <SelectTrigger className="w-3/5" id="borderColor">
                          <SelectValue placeholder="Select a color" />
                        </SelectTrigger>
                        <SelectContent className="dark">
                          <SelectItem value="border-sky-500">
                            <div className="size-3 rounded-full bg-sky-500" />
                            Sky
                          </SelectItem>
                          <SelectItem value="border-rose-500">
                            <div className="size-3 rounded-full bg-rose-500" />
                            Red
                          </SelectItem>
                          <SelectItem value="border-emerald-500">
                            <div className="size-3 rounded-full bg-emerald-500" />
                            Green
                          </SelectItem>

                          <SelectItem value="border-purple-500">
                            <div className="size-3 rounded-full bg-purple-500" />
                            Purple
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        defaultValue="25px"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxHeight">Max. height</Label>
                      <Input
                        id="maxHeight"
                        defaultValue="none"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ),
          text: "Settings",
        },
      ] as DockItem[],
    [control]
  );
  return (
    <div className="fixed bottom-8 min-w-96 max-w-min h-14  justify-between flex items-center px-8 rounded-2xl z-50 *:hover:scale-110 *:cursor-pointer transition-all duration-300">
      <Dock items={components} />
    </div>
  );
};

export default ControllerLayout;
