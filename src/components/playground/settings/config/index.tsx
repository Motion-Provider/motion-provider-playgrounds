import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlaygroundConfigProps } from "@/interfaces";
import MotionContainer from "@/motion/motion-container";
import { FC } from "react";
import Player from "../../player";

const PlaygroundConfig: FC<PlaygroundConfigProps> = ({
  animation,
  controller,
  isModalOpen,
  setIsMobileOpen,
  onAnimationChange,
}) => {
  const { configView, isAnimationStopped, reverse, trigger } = controller;

  if (!animation || !controller) {
    console.warn(
      "PLAYGROUND ERROR: No animation or controller provided, returning null"
    );
    return null;
  }

  const { mode, transition, delay, duration } = animation;

  return (
    <Dialog modal onOpenChange={setIsMobileOpen} open={isModalOpen}>
      <DialogContent className="sm:max-w-4xl dark">
        <Player animation={animation} onAnimationChange={onAnimationChange} />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PlaygroundConfig;
