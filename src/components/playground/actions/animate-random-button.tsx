import { Button } from "@/components/ui/button";
import getRandomAnimation from "@/motion/utils/getRandomAnimation";
import { ReduxRootState, ReduxStoreDispatchType } from "@/redux";
import { setMotion } from "@/redux/slices/motion";
import { resetAnimationThunk } from "@/redux/slices/utils";
import { Dice6 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

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
