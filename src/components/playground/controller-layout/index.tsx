import { Button } from "@/components/ui/button";
import { PlaygroundControllerLayoutProps } from "@/interfaces";
import {
  Dice6,
  Pause,
  Play,
  Settings,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { FC } from "react";

const ControllerLayout: FC<PlaygroundControllerLayoutProps> = ({
  control,
  onAnimate,
  onRandomAnimate,
  onReverse,
}) => {
  return (
    <div className="fixed bottom-8 min-w-96 max-w-min h-14 bg-transparent backdrop-blur-xs  justify-between flex items-center px-8 rounded-2xl z-50 *:hover:scale-110 *:cursor-pointer transition-all duration-300">
      <Button variant="outline" onClick={onReverse}>
        {control.reverse ? (
          <SkipForward className="size-5" />
        ) : (
          <SkipBack className="size-5" />
        )}
      </Button>
      <Button variant="outline" onClick={onAnimate}>
        {control.isAnimationStopped ? (
          <Play className="size-5" />
        ) : (
          <Pause className="size-5" />
        )}
      </Button>
      <Button variant="outline" onClick={onRandomAnimate}>
        <Dice6 className="size-5 " />
      </Button>
      <Button variant="outline">
        <Settings className="size-5 " />
      </Button>
    </div>
  );
};

export default ControllerLayout;
