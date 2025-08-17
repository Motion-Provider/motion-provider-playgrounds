import { Button } from "@/components/ui/button";
import { ReduxStoreDispatchType } from "@/redux";
import { playStopThunk, selectController } from "@/redux/slices/utils";
import { Pause, Play } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const PlayStopButton = () => {
  const dispatch = useDispatch<ReduxStoreDispatchType>();
  const { isAnimationStopped } = useSelector(selectController);

  const handlePlayStop = () => dispatch(playStopThunk());

  return (
    <Button
      variant="ghost"
      onClick={handlePlayStop}
      className="cursor-pointer "
    >
      {isAnimationStopped ? (
        <Play className="size-5" />
      ) : (
        <Pause className="size-5" />
      )}
    </Button>
  );
};

export default PlayStopButton;
