import data from "@/components/info-box/data";
import { InfoBoxLayoutProps } from "@/interfaces";
import { interFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { setCurrentMotion } from "@/redux/slices/metadata";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function InfoBoxLayout({
  children,
  className,
}: InfoBoxLayoutProps) {
  const router = useRouter();
  const pathName = router.pathname.slice(1);
  const motionName = data[pathName as keyof typeof data];
  const dispatch = useDispatch();

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
