import GridBg from "../grid-bg";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";
import MotionContainer from "@/motion/motion-container";
import { HomepageBgProps } from "@/interfaces/@types-components";

const cache = new Map<number, string>();

export const Background: FC<HomepageBgProps> = ({
  selectedItemID,
  className,
}) => {
  const video = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const v = video.current;

    if (!v) return;

    async function setVideoFromCache(id: number) {
      if (cache.has(id) && v) {
        const url = cache.get(id)!;

        if (v?.currentSrc && v?.currentSrc.includes(url)) return;

        v.pause();
        v.src = url;

        v.play()?.catch((e) => {
          console.error(e);
        });
        return;
      }

      try {
        const res = await fetch(`/assets/videos/${id}.mp4`);
        const blob = await res.blob();

        if (cancelled || !v) return;

        const objectUrl = URL.createObjectURL(blob);
        cache.set(id, objectUrl);

        v.pause();
        v.src = objectUrl;

        v.play()?.catch(() => {});
      } catch (err) {
        console.error("Video fetch error:", err);
      }
    }

    if (typeof selectedItemID !== "undefined") {
      setVideoFromCache(selectedItemID);
    } else {
      v.pause();
    }

    return () => {
      cancelled = true;
      if (video.current) video.current.pause();
    };
  }, [selectedItemID]);

  useEffect(() => {
    return () => {
      for (const url of cache.values()) {
        URL.revokeObjectURL(url);
      }
      cache.clear();
    };
  }, []);

  if (typeof selectedItemID === "undefined")
    return <GridBg className={className} />;

  return (
    <MotionContainer
      className={cn("absolute top-0 left-0 w-full h-full", className)}
      animation={{
        mode: ["fadeIn", "filterBlurIn", "hover"],
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
        playsInline
        preload="auto"
        className="absolute inset-0 size-full -z-10 opacity-30 object-cover"
      />
    </MotionContainer>
  );
};
