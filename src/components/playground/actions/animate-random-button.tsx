import { Dice6 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setMotion } from "@/redux/slices/motion";
import { useDispatch, useSelector } from "react-redux";
import { resetAnimationThunk } from "@/redux/slices/utils";
import { ReduxRootState, ReduxStoreDispatchType } from "@/redux";
import getRandomAnimation from "@/utils/getRandomAnimation";

const AnimateRandomButton = () => {
  const dispatch = useDispatch<ReduxStoreDispatchType>();
  const { complexity } = useSelector((state: ReduxRootState) => state.metadata);

  const handleRandom = () => {
    dispatch(resetAnimationThunk());
    dispatch(
      setMotion({
        mode: getRandomAnimation({
          count: complexity + 1,
        }),
      })
    );
  };

  return (
    <Button variant="ghost" onClick={handleRandom} className="cursor-pointer ">
      <Dice6 className="size-5" />
    </Button>
  );
};

export default AnimateRandomButton;
