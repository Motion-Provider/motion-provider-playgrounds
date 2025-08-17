import { Button } from "@/components/ui/button";
import { ReduxStoreDispatchType } from "@/redux";
import { onReverseThunk, selectController } from "@/redux/slices/utils";
import { SkipBack, SkipForward } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const ReverseButton = () => {
  const dispatch = useDispatch<ReduxStoreDispatchType>();
  const { reverse } = useSelector(selectController);

  const handleReverse = () => dispatch(onReverseThunk());

  return (
    <Button variant="ghost" onClick={handleReverse} className="cursor-pointer">
      {reverse ? (
        <SkipForward className="size-5" />
      ) : (
        <SkipBack className="size-5" />
      )}
    </Button>
  );
};

export default ReverseButton;
