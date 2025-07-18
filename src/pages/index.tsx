import { CardItem } from "@/components/showcase/card-item";
import { interFont } from "@/lib/fonts";
import motionsLib from "@/lib/motions.lib";
import MotionContainer from "@/motion/motion-container";
import MotionImage from "@/motion/motion-image";
import MotionText from "@/motion/motion-text";

export default function Home() {
  return (
    <main
      className={`w-full h-screen relative dark ${interFont.className} flex flex-row `}
    >
      <div className="w-1/2 h-full relative ">
        <div className="relative size-full flex p-16">
          <MotionText
            elementType={"h1"}
            animation={{
              mode: ["filterBlurIn", "fadeDown"],
              transition: "smooth",
              delay: 0.5,
              duration: 1,
            }}
            config={{
              duration: 0.12,
              mode: "chars",
              delayLogic: "linear",
            }}
            wrapperClassName=" text-2xl absolute top-[10vh] font-primary text-clip bg-clip-text text-transparent bg-gradient-to-t from-primary/50 to-white/20 font-light"
          >
            Motion Provider
          </MotionText>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-1/2 h-full gap-2">
        {motionsLib.map((item) => (
          <CardItem {...item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
