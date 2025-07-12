import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PlaygroundConfigProps } from "@/interfaces";
import { FC } from "react";
import Player from "../../player";

const PlaygroundConfig: FC<PlaygroundConfigProps> = ({
  animation,
  controller,
  isModalOpen,
  setIsMobileOpen,
  delayLogic,
  onDelayLogicChange,
  onAnimationChange,
}) => {
  if (!animation || !controller) {
    console.warn(
      "PLAYGROUND ERROR: No animation or controller provided, returning null"
    );
    return null;
  }

  return (
    <Dialog modal onOpenChange={setIsMobileOpen} open={isModalOpen}>
      <DialogContent className="sm:max-w-4xl dark">
        <Player
          animation={animation}
          onAnimationChange={onAnimationChange}
          onDelayLogicChange={onDelayLogicChange}
          delayLogic={delayLogic}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PlaygroundConfig;
