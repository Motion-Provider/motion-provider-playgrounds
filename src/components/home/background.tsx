import GridBg from "../grid-bg";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import MotionContainer from "@/motion/motion-container";
import { HomepageBgProps } from "@/interfaces/@types-components";

export const Background: FC<HomepageBgProps> = ({
  selectedItemID,
  className,
}) => {
  const video = useRef<HTMLVideoElement | null>(null);
  const prefetchedID = useRef<number | null>(null);

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const v = video.current;
    if (!v) return;

    function handlePrefetch(e: Event) {
      if (!v) return;

      const id = (e as CustomEvent<number>).detail;
      const href = `/assets/videos/${id}.mp4`;

      if (v.currentSrc && v.currentSrc.includes(href)) return;

      if (typeof selectedItemID !== "undefined" && selectedItemID !== id) {
        prefetchedID.current = id;
        return;
      }

      try {
        console.log("prefetching", href);

        v.pause();

        v.src = href;
        v.preload = "auto";

        v.load();
        v.play().catch((e) =>
          console.error(`prefetching ${href} error — during play action:`, e)
        );
      } catch (error) {
        console.error(`prefetching ${href} error:`, error);
      } finally {
        console.log("prefetching processed");
      }
    }

    v.addEventListener(
      "loadeddata",
      () => {
        setLoaded(true);
      },
      {
        signal: controller.signal,
      }
    );

    window.addEventListener("video:prefetch", handlePrefetch, {
      signal: controller.signal,
    });
    window.addEventListener("video:prefetch-cancel", handlePrefetch, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
      setLoaded(false);
    };
  }, [selectedItemID]);

  useEffect(() => {
    const v = video.current;
    if (!v) return;

    if (typeof selectedItemID === "undefined") {
      v.pause();
      return;
    }

    const href = `/assets/videos/${selectedItemID}.mp4`;
    if (v.currentSrc && v.currentSrc.includes(href)) {
      v.play().catch(() => {});
      return;
    }

    try {
      v.pause();
      v.src = href;
      v.preload = "auto";
      v.load();
      v.play().catch(() => {});
    } catch (err) {
      console.error("Selection playback error:", err);
    }
  }, [selectedItemID]);

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
      controller={{
        trigger: loaded,
      }}
      elementType="div"
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
