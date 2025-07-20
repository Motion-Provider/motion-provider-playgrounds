import MainPageGridBackground from "@/components/backgrounds/main-page-grid-background";
// import { MotionLogo } from "@/components/logo/motion-logo";
// import { MotionProviderLogo } from "@/components/logo/motion-provider-logo";
import { CardItem } from "@/components/showcase/card-item";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MotionCardItem } from "@/interfaces";
import { interFont, primaryFont } from "@/lib/fonts";
import motionsLib from "@/lib/motions.lib";
import MotionContainer from "@/motion/motion-container";
import MotionText from "@/motion/motion-text";
import { useState } from "react";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MotionCardItem | undefined>(
    undefined
  );

  const handleHover = (id: number) => {
    setSelectedItem(motionsLib.find((item) => item.id === id));
  };

  return (
    <main
      className={`w-full h-screen relative dark ${interFont.className} flex flex-row `}
    >
      <div className="w-1/2 h-full relative border-r">
        <MainPageGridBackground />
        <div className="relative size-full flex p-24 items-center-safe">
          <div className="absolute top-24 left-24 flex items-center justify-center-safe gap-2">
            {/* <MotionLogo /> */}
            {/* <MotionProviderLogo /> */}
            <MotionContainer
              animation={{
                mode: ["fadeIn"],
                transition: "smooth",
                delay: 0.25,
                duration: 1,
              }}
              elementType="div"
              className="blur-3xl size-24 bg-cyan-400 absolute -z-20"
            />
            <div
              className={`size-auto shrink-0 rounded-lg bg-gradient-to-br from-white/80 to-transparent text-black backdrop-blur-2xl   items-center text-center flex justify-center-safe   ${primaryFont.className} text-4xl  px-1 scale-105`}
            >
              m.
            </div>
            <div
              style={{
                imageRendering: "pixelated",
                flexShrink: 0,
                backgroundSize: "100% 100%",
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 9'><path d='M 9.062 0 L 4.32 8.992 L 0 8.992 L 3.703 1.971 C 4.277 0.882 5.709 0 6.902 0 Z M 19.656 2.248 C 19.656 1.006 20.623 0 21.816 0 C 23.009 0 23.976 1.006 23.976 2.248 C 23.976 3.49 23.009 4.496 21.816 4.496 C 20.623 4.496 19.656 3.49 19.656 2.248 Z M 9.872 0 L 14.192 0 L 9.45 8.992 L 5.13 8.992 Z M 14.974 0 L 19.294 0 L 15.592 7.021 C 15.018 8.11 13.585 8.992 12.392 8.992 L 10.232 8.992 Z' fill='rgb(0, 0, 0)'/></svg>")`,
                opacity: 1,
              }}
              className={"size-8 rounded-lg p-5 bg-[#FFF42B]"}
            />
          </div>
          <div className="flex gap-4 flex-col ">
            <div>
              <Badge variant="outline">Early Access to Playgrounds</Badge>
            </div>
            <div className="flex gap-4 flex-col ">
              <MotionText
                elementType="h1"
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
                wrapperClassName="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular"
              >
                Motion Provider
              </MotionText>

              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                No more new
              </p>
              <Label htmlFor="email">Subscribe To Email</Label>
              <Input
                about="email"
                type="email"
                placeholder="Get updated rapidly"
                id="email"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-1/2 h-full ">
        {motionsLib.map((item) => (
          <CardItem {...item} key={item.id} onHover={handleHover} />
        ))}
      </div>
    </main>
  );
}
