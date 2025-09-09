import Dock from "@/components/dock";
import { DockItem } from "@/interfaces/@types-components";
import PlaygroundSettings from "./playground-settings";
import ModalButton from "./actions/modal-button";
import ReverseButton from "./actions/reverse-button";
import PlayStopButton from "./actions/play-stop-button";
import AnimateRandomButton from "./actions/animate-random-button";
import PlaygroundsSheet from "./playgrounds-sheet";
import { ReverseLabel } from "./reverse-label";
import { PlayPauseLabel } from "./play-pause-label";
import DockProvider from "@/providers/dock-provider";

const items = [
  {
    id: "reverse",
    children: <ReverseButton />,
    tooltip: <ReverseLabel />,
    ariaLabel: "Toggle direction",
  },
  {
    id: "play",
    children: <PlayStopButton />,
    tooltip: <PlayPauseLabel />,
    ariaLabel: "Play / Pause",
  },
  {
    id: "random",
    children: <AnimateRandomButton />,
    tooltip: "Roll a Dice",
    ariaLabel: "Animate random",
  },
  {
    id: "settings",
    children: <PlaygroundSettings />,
    tooltip: "Settings",
    ariaLabel: "Playground settings",
  },
  {
    id: "config",
    children: <ModalButton />,
    tooltip: "Configuration",
    ariaLabel: "Open configuration",
  },
  {
    id: "sheet",
    children: <PlaygroundsSheet />,
    tooltip: "Change Playground",
    ariaLabel: "Change playground",
  },
] as const satisfies DockItem[];

export default function PlaygroundController() {
  return (
    <div className="fixed bottom-8 min-w-96 max-w-min h-14 justify-between flex items-center px-8 rounded-2xl z-50 transition-all duration-300">
      <DockProvider initialItems={items}>
        <Dock />
      </DockProvider>
    </div>
  );
}
