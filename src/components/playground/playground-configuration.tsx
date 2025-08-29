import Player from "./player";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ReduxRootState } from "@/redux";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleX, Lightbulb } from "lucide-react";
import { setModalState } from "@/redux/slices/utils";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PlaygroundConfiguration() {
  const { isModalOpen } = useSelector((state: ReduxRootState) => state.utils);
  const dispatch = useDispatch();

  return (
    <Dialog
      modal
      onOpenChange={(_) => dispatch(setModalState(false))}
      open={isModalOpen}
    >
      <DialogContent
        className="sm:max-w-5xl border-none bg-transparent backdrop-blur-lg"
        aria-describedby="modal-content"
      >
        <DialogTitle className="sr-only">Configure your animation</DialogTitle>
        <Player />
        <ConfigurationFooter />
      </DialogContent>
    </Dialog>
  );
}

const ConfigurationFooter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;
  return (
    <DialogFooter className="text-xs w-full -mt-8 px-6">
      <Alert className="w-full bg-transparent">
        <Button
          variant="ghost"
          className="absolute top-1 right-1 z-50"
          onClick={handleClose}
        >
          <CircleX className="size-5" />
        </Button>
        <AlertTitle className="inline-flex items-center gap-1">
          <Lightbulb className="size-5" /> <h2 className="text-lg">TIPS</h2>
        </AlertTitle>
        <AlertDescription className="inline justify-center text-xs">
          <ul className="list-disc ml-5">
            <li>
              Configure your dream animation in seconds by using your keyboard's
              accessibility{" "}
              <Badge variant={"outline"}>
                <pre>TAB</pre>
              </Badge>{" "}
            </li>
            <li>
              Switch to fullscreen mode{" "}
              <Badge variant={"outline"}>
                <pre>F11</pre>
              </Badge>{" "}
              for lightning-fast editing and better experience.
            </li>
            <li>
              {" "}
              <Badge variant={"outline"}>
                <pre>delay</pre>
              </Badge>{" "}
              and
              <Badge variant={"outline"}>
                <pre>transition</pre>
              </Badge>{" "}
              might not be updated instantly — please play/stop to see the
              changes.
            </li>
          </ul>
        </AlertDescription>
      </Alert>
    </DialogFooter>
  );
};
