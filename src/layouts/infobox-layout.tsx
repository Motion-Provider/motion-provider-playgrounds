import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { interFont } from "@/lib/fonts";
import { useDispatch } from "react-redux";
import { setCurrentMotion } from "@/redux/slices/metadata";
import { InfoBoxLayoutProps } from "@/interfaces/@types-layout";

export default function InfoBoxLayout({
  children,
  className,
}: InfoBoxLayoutProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathName = router.pathname.slice(1);
  const motionName = pathName
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join("");

  useEffect(() => {
    dispatch(setCurrentMotion(motionName));
  }, [dispatch, motionName]);

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
