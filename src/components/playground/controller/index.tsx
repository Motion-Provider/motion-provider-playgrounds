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
  Boxes,
  Dice6,
  MousePointerClick,
  Pause,
  Play,
  RefreshCw,
  Settings,
  Settings2,
  SkipBack,
  SkipForward,
  SquareDashedMousePointer,
} from "lucide-react";
import { FC, useMemo } from "react";
import { SchemaLayout } from "./schema-layout";

const ControllerLayout: FC<
  PlaygroundControllerLayoutProps & { schema: SchemaProps }
> = ({
  control,
  schema,
  onAnimate,
  onRandomAnimate,
  onReverse,
  onReset,
  onModalOpen,
  onSettings,
}) => {
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
          text: control.reverse ? "Forward" : "Reverse",
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
          children: <SchemaLayout onSettings={onSettings} schema={schema} />,
          text: "Settings",
        },
        {
          children: (
            <Button
              variant="ghost"
              className="cursor-pointer "
              onClick={onModalOpen}
            >
              <Settings2 className="size-5" />
            </Button>
          ),
          text: "Configuration",
        },
        {
          children: (
            <Button variant="ghost" className="cursor-pointer ">
              <Boxes className="size-5" />
            </Button>
          ),
          text: "Change Playground",
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
