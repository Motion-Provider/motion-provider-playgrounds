import MotionContainer from "@/motion/motion-container";
import Image from "next/image";

export const MotionProviderLogo = () => (
  <div className="absolute md:top-[6rem] md:left-30 left-20 top-12 flex items-center justify-center-safe gap-2">
    <MotionContainer
      animation={{
        mode: ["fadeIn"],
        transition: "smooth",
        delay: 2,
        duration: 1,
      }}
      elementType="div"
      className="blur-3xl size-24 bg-gradient-to-br from-blue-500 via-blue-600 to-40% to-blue-400 absolute -z-20"
    />
    <div className="flex items-center rounded-md ">
      <Image
        priority
        fetchPriority="high"
        width={192}
        height={192}
        src="/motion-provider-logo.png"
        alt="Motion Provider Logo"
        className="size-10 rounded-md"
      />
    </div>
  </div>
);
