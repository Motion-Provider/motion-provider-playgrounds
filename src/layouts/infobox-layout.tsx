import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { interFont } from "@/lib/fonts";
import { useDispatch } from "react-redux";
import { setCurrentMotion } from "@/redux/slices/metadata";
import { LayoutProps } from "@/interfaces/@types-layout";
import { Motions } from "@/interfaces/@types-redux";
import { setAll } from "@/redux/slices/motion";
import { MotionsAnimationInitialState } from "@/constants/redux/redux-motion-defaults.lib";

export default function InfoBoxLayout({ children, className }: LayoutProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const didInit = useRef<boolean>(false);

  const pathName = router.pathname.slice(1);
  const motionName = pathName
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join("") as Motions;

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    dispatch(setCurrentMotion(motionName));
    dispatch(setAll(MotionsAnimationInitialState[motionName]));
  }, [motionName]);

  return (
    <div
      className={cn(
        interFont.className,
        "items-center justify-center flex overflow-hidden relative dark",
        className
      )}
    >
      {children}
    </div>
  );
}
