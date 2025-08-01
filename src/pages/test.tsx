import { Skeleton } from "@/components/ui/skeleton";
import MotionImage from "@/motion/motion-image";
import MotionMovie from "@/motion/motion-movie";

export default function Test() {
  return (
    <div className="h-screen w-full relative items-center justify-center flex">
      <Movie />
    </div>
  );
}

function Image() {
  return (
    <MotionImage
      animation={{
        mode: ["opacity"],
        transition: "smooth",
        delay: 0,
        duration: 4,
      }}
      config={{
        pieces: 64,
        img: "/assets/motion-chain.webp",
        delayLogic: "sinusoidal",
        duration: 0.36,
      }}
      fallback={<Skeleton className="w-full h-screen" />}
      wrapperClassName="size-full z-50 absolute top-0 left-0"
    />
  );
}

function Movie() {
  return (
    <MotionMovie
      animations={{
        enter: ["fadeIn", "filterBlurIn"],
        exit: ["fadeOut"],
        transition: "smooth",
        duration: 1.12,
      }}
      config={{
        pieces: 64,
        animationDuration: 5,
        images: ["/assets/motion-chain.webp", "/assets/motion-container.webp"],
        delayLogic: "sinusoidal",
      }}
      fallback={<Skeleton className="w-full h-screen" />}
      wrapperClassName="z-50 w-[500px] h-[500px] rounded-md"
      className="relative size-full object-center bg-center "
    />
  );
}
