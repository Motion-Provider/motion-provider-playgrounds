import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { PlaygroundConfigProps } from "@/interfaces";
import { FC } from "react";
import Player from "../../player";
import MotionText from "@/motion/motion-text";

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
      <DialogContent className="sm:max-w-5xl  border-none bg-gradient-to-br from-slate-900/50 via-cyan-400/10  to-slate-800/50 backdrop-blur-sm   ">
        <Player
          animation={animation}
          onAnimationChange={onAnimationChange}
          onDelayLogicChange={onDelayLogicChange}
          delayLogic={delayLogic}
        />
        <DialogFooter className="text-xs w-full grid place-items-center text-center grid-cols-1">
          <MotionText
            elementType={"pre"}
            animation={{
              mode: ["filterBlurIn", "fadeDown"],
              transition: "smooth",
              delay: 0.5,
              duration: 1,
            }}
            config={{
              duration: 0.008,
              mode: "chars",
              delayLogic: "linear",
            }}
            wrapperClassName="text-muted-foreground"
          >
            Configure your dream animation in seconds, use your keyboard's
            accessibility TAB for lightning-fast editing.
          </MotionText>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PlaygroundConfig;
