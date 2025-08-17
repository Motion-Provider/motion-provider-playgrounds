import { Dock } from "@/components/dock";
import { DockItem } from "@/interfaces/@types-components";
import PlaygroundSettings from "./playground-settings";
import ModalButton from "./actions/modal-button";
import ReverseButton from "./actions/reverse-button";
import PlayStopButton from "./actions/play-stop-button";
import AnimateRandomButton from "./actions/animate-random-button";
import { useSelector } from "react-redux";
import { selectController } from "@/redux/slices/utils";
import PlaygroundsSheet from "./playgrounds-sheet";

export default function PlaygroundController() {
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const components = [
    {
      children: <ReverseButton />,
      text: reverse ? "Forward" : "Reverse",
    },
    {
      children: <PlayStopButton />,
      text: isAnimationStopped ? "Play" : "Pause",
    },
    {
      children: <AnimateRandomButton />,
      text: "Roll a Dice",
    },
    {
      children: <PlaygroundSettings />,
      text: "Settings",
    },
    {
      children: <ModalButton />,
      text: "Configuration",
    },
    {
      children: <PlaygroundsSheet />,
      text: "Change Playground",
    },
  ] as DockItem[];

  return (
    <div className="fixed bottom-8 min-w-96 max-w-min h-14 justify-between flex items-center px-8 rounded-2xl z-50  transition-all duration-300 ">
      <Dock items={components} />
    </div>
  );
}
