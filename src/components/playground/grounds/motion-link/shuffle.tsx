import { FC, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import MotionChain from "@/motion/motion-chain";
import { Skeleton } from "@/components/ui/skeleton";
import { MotionAnimationProps, MotionControllerProps } from "@/motion/types";
import MotionContainer from "@/motion/motion-container";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { ScrollArea } from "@/components/ui/scroll-area";
import mockTweets from "@/constants/grounds/motion-link-mock.lib";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MotionText from "@/motion/motion-text";

const TweetCard = dynamic(() => import("./card").then((mod) => mod.default), {
  ssr: false,
  loading: () => <Skeleton className="h-20  w-full my-2" />,
});

const LinkShuffle = () => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { route } = settings["MotionLink"];

  if (!route.includes("dev/home")) {
    return <PageOutComponent route={route} />;
  }
  return (
    <div className="size-full flex flex-col">
      <ScrollArea className="h-full relative overflow-hidden">
        <BlurContainers />
        <TweetCardWrapper />
        <Scrollbar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

const TweetCardWrapper: FC<MotionControllerProps> = () => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];
  const animations = useMemo(
    () =>
      mockTweets.map((_, idx) => ({
        mode: [idx % 2 === 0 ? "fadeLeft" : "fadeRight", "filterBlurIn"],
        transition: "smooth",
        duration: 1,
      })),
    []
  );

  return (
    <MotionChain
      animations={animations as MotionAnimationProps[]}
      controller={{
        trigger: !trigger,
      }}
      config={{
        duration: 0.15,
        delayLogic: "linear",
      }}
      elementType={"div"}
    >
      {mockTweets.map((val) => (
        <TweetCard key={val.id} {...val} />
      ))}
    </MotionChain>
  );
};

const PageOutComponent: FC<{ route: string }> = ({ route }) => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];
  const cardTitle = useMemo(
    () => `Welcome to ${route.split("/")[1]}!`,
    [route]
  );

  return (
    <div className="size-full flex flex-col items-center justify-center">
      <Card className="bg-transparent w-2/3 h-auto overflow-hidden relative">
        <MotionContainer
          animation={{
            mode: ["fadeIn", "scaleZoomIn"],
            transition: "cubicBounce",
            delay: 0.5,
            duration: 1,
          }}
          controller={{
            trigger: !trigger,
          }}
          elementType="div"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0 size-48 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-40% to-rose-600 blur-3xl"
        />
        <CardHeader className="z-10 bg-transparent">
          <CardTitle className="text-2xl">
            <MotionText
              animation={{
                mode: ["fadeDown", "filterBlurIn"],
                transition: "cubicBounce",
                duration: 1,
              }}
              config={{
                duration: 0.08,
                mode: "chars",
                delayLogic: "sinusoidal",
              }}
              controller={{
                trigger: !trigger,
              }}
              elementType="h2"
              key={cardTitle.split(" ").join("")}
            >
              {cardTitle}
            </MotionText>
          </CardTitle>
          <CardDescription>
            Yes, as you can see the{" "}
            <Badge variant={"secondary"}>
              <pre>{"<MotionLink />"}</pre>
            </Badge>
            <MotionText
              animation={{
                mode: ["fadeRight", "scaleZoomIn", "filterBlurIn"],
                transition: "cubicBounce",
                duration: 1,
              }}
              controller={{
                trigger: !trigger,
              }}
              config={{
                mode: "words",
                delayLogic: "linear",
                duration: 0.08,
              }}
              elementType="p"
            >
              component enables you to create exit animations during route
              changes by reversing the other controller mounted motion provider
              components. In this playground example, the Motion Link is
              basically stands on as a simulator to illustrate how a page which
              contains motion provider elements acts on action. Go back to home
              page to re-trigger the animation!
            </MotionText>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

const BlurContainers: FC = () => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];

  return (
    <>
      <MotionContainer
        animation={{
          mode: ["fadeIn", "scaleZoomIn"],
          transition: "cubicBounce",
          delay: 0.5,
          duration: 1,
        }}
        controller={{
          trigger: !trigger,
        }}
        elementType="div"
        className="absolute top-8 left-8 z-0 size-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-40% to-rose-600 blur-3xl"
      />
      <MotionContainer
        animation={{
          mode: ["fadeIn", "scaleZoomIn"],
          transition: "cubicElastic",
          delay: 1.5,
          duration: 1,
        }}
        controller={{
          trigger: !trigger,
        }}
        elementType="div"
        className="absolute top-24 right-24 z-0 size-20 rounded-full bg-gradient-to-br from-lime-500 via-indigo-600 to-40% to-cyan-300 blur-3xl"
      />
      <MotionContainer
        animation={{
          mode: ["fadeIn", "scaleZoomIn"],
          transition: "cubicElastic",
          delay: 2.5,
          duration: 1,
        }}
        controller={{
          trigger: !trigger,
        }}
        elementType="div"
        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 size-36 rounded-full bg-gradient-to-b from-yellow-500 via-rose-600 to-40% to-indigo-600 blur-3xl"
      />
    </>
  );
};
export default LinkShuffle;
