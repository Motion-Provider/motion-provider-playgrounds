import GridBg from "../grid-bg";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";
import MotionContainer from "@/motion/motion-container";
import { HomepageBgProps } from "@/interfaces/@types-components";

export const Background: FC<HomepageBgProps> = ({
  selectedItemID,
  className,
}) => {
  const video = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (selectedItemID != null && video.current) {
      const v = video.current;
      if (v.src.includes(`${selectedItemID}.mp4`)) return;

      v.pause();
      v.src = `/assets/videos/${selectedItemID}.mp4`;
      v.load();

      v.play()?.catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Video play weirdly failed:", err);
        }
      });
    }

    return () => {
      if (video.current && video.current.src) {
        video.current.pause();
      }
    };
  }, [selectedItemID]);

  if (typeof selectedItemID === "undefined")
    return <GridBg className={className} />;

  return (
    <MotionContainer
      className={cn("absolute top-0 left-0 w-full h-full", className)}
      animation={{
        mode: ["fadeIn", "filterBlurIn", "hoverEffect"],
        transition: "smooth",
        delay: 0.25,
        duration: 0.75,
      }}
      elementType={"div"}
      key={selectedItemID}
    >
      <video
        ref={video}
        autoPlay
        muted
        loop
        className="absolute inset-0 size-full -z-10 opacity-30 object-cover"
      />
    </MotionContainer>
  );
};
