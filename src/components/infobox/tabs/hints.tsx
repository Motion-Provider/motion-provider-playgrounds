import { FC, useRef, useState, useEffect, useMemo } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReduxRootState } from "@/redux";
import { useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge";
import MotionText from "@/motion/motion-text";
import Autoplay from "embla-carousel-autoplay";
import { CheckCheck, Quote } from "lucide-react";
import shuffleArrays from "@/utils/shuffleArrays";
import MotionContainer from "@/motion/motion-container";
import chainLib from "@/constants/infobox/hints/chain.lib";
import sharedLib from "@/constants/infobox/hints/shared.lib";
import { HintItemProps } from "@/interfaces/@types-components";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Motions } from "@/interfaces/@types-redux";
import { InfoboxHintLibProps } from "@/interfaces/@types-constants";
import textLib from "@/constants/infobox/hints/text.lib";
import imageLib from "@/constants/infobox/hints/image.lib";
import containerLib from "@/constants/infobox/hints/container.lib";
import linkLib from "@/constants/infobox/hints/link.lib";
import movieLib from "@/constants/infobox/hints/movie.lib";

const hintsByMotion = {
  MotionChain: chainLib,
  MotionText: textLib,
  MotionContainer: containerLib,
  MotionLink: linkLib,
  MotionImage: imageLib,
  MotionMovie: movieLib,
} satisfies Record<Motions, InfoboxHintLibProps>;

const Hints: FC = () => {
  const { currentMotion } = useSelector(
    (state: ReduxRootState) => state.metadata
  );

  const hintsData = useMemo(
    () =>
      shuffleArrays(
        hintsByMotion[currentMotion || "MotionChain"],
        sharedLib,
        true
      ) as string[],
    [currentMotion]
  );

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        orientation="vertical"
        className="w-full relative "
      >
        <CarouselContent className="h-60">
          {hintsData.map((val, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <MotionContainer
                animation={{
                  mode: [
                    "filterBlurIn",
                    index % 2 === 0 ? "fadeRight" : "fadeLeft",
                  ],
                  transition: "cubicBounce",
                  duration: 1,
                }}
                controller={{
                  configView: {
                    amount: 0.25,
                    once: false,
                  },
                }}
                elementType={"div"}
                className="p-1"
              >
                <HintItem text={val} />
              </MotionContainer>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex items-center justify-between absolute bottom-0 -rotate-90 bg-white ">
          <CarouselNext className="mr-2" />
          <CarouselPrevious />
        </div>
      </Carousel>
      {count === current ? (
        <MotionContainer
          animation={{
            mode: ["filterBlurIn", "fadeIn"],
            transition: "cubicBounce",
            duration: 1.5,
          }}
          className="absolute top-0 right-2 rounded-md size-auto flex flex-row gap-1 bg-white text-muted items-center px-2 py-1"
          elementType={"div"}
        >
          <CheckCheck className="w-4 h-4" />
          <MotionText
            animation={{
              mode: ["fadeUp", "filterBlurIn"],
              transition: "smooth",
              duration: 1,
            }}
            elementType={"p"}
            config={{
              duration: 0.08,
              mode: "chars",
              delayLogic: "linear",
            }}
            wrapperClassName="text-xs tracking-tight"
          >
            All seen!
          </MotionText>
        </MotionContainer>
      ) : (
        <Badge
          variant={"outline"}
          className="text-muted-foreground py-2 text-center text-xs absolute top-0 right-2"
        >
          Slide {current} of {count}
        </Badge>
      )}
    </>
  );
};

const HintItem: FC<Pick<HintItemProps, "text">> = ({ text }) => (
  <Card>
    <CardHeader className="grid place-items-center text-center px-6 relative">
      <CardDescription className="tracking-tight relative">
        <Quote className="size-4 rotate-180 mb-2" />
        {text}
        <Quote className="size-4 -rotate-0 self-end justify-self-end mt-2" />
      </CardDescription>
    </CardHeader>
  </Card>
);

export default Hints;
