import { FC, useCallback, useState } from "react";
import { MotionLinkProps } from "./types";
import { useRouter } from "next/router";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionLink: FC<MotionLinkProps> = ({
  children,
  href,
  onReverse,
  timer,
  className,
}) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (isClicked) return;

      setIsClicked(true);
      onReverse?.();

      setTimeout(() => {
        router.push(href);
      }, timer);
    },
    [isClicked, href, onReverse, router, timer]
  );

  const commonProps = {
    className: cn("cursor-pointer", className),
    style: { display: "contents" },
    children,
  };

  return isClicked ? (
    <div {...commonProps} />
  ) : (
    <Link href={href} onClick={handleClick} passHref {...commonProps} />
  );
};

export default MotionLink;
