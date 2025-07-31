import {
  Boxes,
  Dice6,
  Pause,
  Play,
  Settings2,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { FC } from "react";
import { Dock } from "@/components/dock";
import { Button } from "@/components/ui/button";
import { DockItem, SchemaProps } from "@/interfaces/@types-components";
import { PlaygroundControllerLayoutProps } from "@/interfaces/@types-layout";
import { PlaygroundSettings } from "../settings";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";

const PlaygroundController: FC<
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
  const currentAnimation = useSelector(
    (state: ReduxRootState) => state.metadata.currentMotion
  );

  const handlePlayStop = () => {
    if (!control.isAnimationStopped) {
      onAnimate();
    } else {
      onReset();
      onReverse();
    }
  };

  const components = [
    {
      children: (
        <Button variant="ghost" onClick={onReverse} className="cursor-pointer">
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
          onClick={handlePlayStop}
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
          <Dice6 className="size-5" />
        </Button>
      ),
      text: "Roll a Dice",
    },
    {
      children: <PlaygroundSettings onSettings={onSettings} schema={schema} />,
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
  ] as DockItem[];

  return (
    <div className="fixed bottom-8 min-w-96 max-w-min h-14 justify-between flex items-center px-8 rounded-2xl z-50  transition-all duration-300 ">
      <Dock items={components} />
    </div>
  );
};

export default PlaygroundController;
