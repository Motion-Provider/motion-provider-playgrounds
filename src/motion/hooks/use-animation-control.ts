import { useState, useCallback } from "react";
import { UseAnimationControlProps, UseAnimationProps } from "../types";

const initial: UseAnimationControlProps = {
  reverseAnimation: false,
  stopAnimation: false,
};

export const useAnimationControl = () => {
  const [control, setControl] = useState<UseAnimationProps>(
    initial as UseAnimationProps
  );

  const onReverse = useCallback(() => {
    setControl((prev) => ({
      ...prev,
      reverseAnimation: !prev.reverseAnimation,
      stopAnimation: false,
    }));
  }, []);

  const onStop = useCallback(() => {
    setControl((prev) => ({
      ...prev,
      stopAnimation: true,
      reverseAnimation: false,
    }));
  }, []);

  const reset = () => setControl(initial as UseAnimationProps);

  return { control, onReverse, onStop, reset };
};
