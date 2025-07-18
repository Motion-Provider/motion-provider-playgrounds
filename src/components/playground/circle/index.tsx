import MotionChain from "@/motion/motion-chain";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { MotionCircleLayoutProps } from "@/interfaces";
import { useCopyToClipboard, useDebounce } from "@uidotdev/usehooks";
import { CopyCode } from "../copy-code";

export const Circle: FC<MotionCircleLayoutProps> = ({
  animation,
  controller,
  style,
  delayLogic,
}) => {
  const { circleCount } = style;
  const count = useDebounce(circleCount, 500);
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  const circles = Array.from({ length: count }).map((_, i) => 184 + i * 32);

  const copyCode = {
    ...animation,
    delayLogic,
  };

  const handleCopyToClipboard = () =>
    copyToClipboard(JSON.stringify(copyCode, null, 2));

  return (
    <>
      <MotionChain
        animations={circles.map((_) => animation)}
        config={{
          duration: 0.15,
          delayLogic,
        }}
        elementType="div"
        className="border absolute rounded-full border-b-primary-foreground/30 border-t-secondary-foreground/60 bg-transparent border-x-stone-700 "
        controller={controller}
        key={animation.mode[0]}
      >
        {circles.map((_, idx) => (
          <div
            className={cn(
              "border rounded-full bg-transparent",
              circles[idx] % 12 === 0 &&
                `${style.borderColor} ${style.borderBlur}`
            )}
            style={{
              height: `${circles[idx]}px`,
              width: `${circles[idx]}px`,
            }}
            key={idx}
          />
        ))}
      </MotionChain>
      <CopyCode onClick={handleCopyToClipboard} />
    </>
  );
};
