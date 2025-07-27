import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReduxRootState } from "@/redux";
import {
  FC,
  useRef,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useSelector } from "react-redux";
import Autoplay from "embla-carousel-autoplay";
import MotionContainer from "@/motion/motion-container";
import { HintItemProps } from "@/interfaces";
import motionChainLib from "@/lib/infobox/motion-chain.lib";
import motionsLib from "@/lib/motions.lib";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MotionContext = createContext<Omit<HintItemProps, "text">>({
  motion: undefined,
  backgroundImage: undefined,
});

const MotionHints = () => {
  const { currentMotion } = useSelector(
    (state: ReduxRootState) => state.metadata
  );
  const pureMotion = currentMotion?.replace(/(Motion)/g, "$1 ");
  const findBgImage = motionsLib.find((item) => item.title === pureMotion);

  return (
    <MotionContext.Provider
      value={{
        motion: pureMotion,
        backgroundImage: findBgImage?.img,
      }}
    >
      <CarouselOrientation />
    </MotionContext.Provider>
  );
};

export default MotionHints;

const CarouselOrientation: FC = () => {
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
        className="w-full relative"
      >
        <CarouselContent className=" h-60">
          {motionChainLib.map((val, index) => (
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
      <Badge
        variant={"outline"}
        className="text-muted-foreground py-2 text-center text-sm absolute top-0 right-4"
      >
        {current === count
          ? "Looks like you gettin'it "
          : `Slide ${current} of ${count}`}
      </Badge>
    </>
  );
};

const HintItem: FC<Pick<HintItemProps, "text">> = ({ text }) => {
  const { backgroundImage } = useContext(MotionContext);

  return (
    <Card
      style={{
        backgroundImage: `url(${backgroundImage || "/m.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <CardHeader className="grid place-items-center text-center px-6 relative">
        <CardDescription className="tracking-tight relative">
          <Quote className="size-4 rotate-180 " />
          {text}
          <Quote className="size-4 -rotate-0 self-end justify-self-end" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
