import { FC, useMemo } from "react";
import { Search } from "lucide-react";
import MotionText from "@/motion/motion-text";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import MotionChain from "@/motion/motion-chain";
import {
  trends,
  whoNotToFollow,
} from "@/constants/grounds/motion-link-mock.lib";
import { MotionAnimationProps } from "@/motion/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MotionContainer from "@/motion/motion-container";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";

const LinkWidgets: FC = () => {
  return (
    <aside className="size-full p-2">
      <div className="sticky top-4 space-y-3 pr-2">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <div className="relative mb-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-stone-400" />
          </div>
          <Input
            id="search"
            placeholder="Search"
            className="pl-10 rounded-2xl w-full"
          />
        </div>
        <Trends />
        <WhoNotToFollow />
        <InformativeBox />
      </div>
    </aside>
  );
};

const Trends: FC = () => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];

  const animations = useMemo(
    () =>
      trends.map((_) => ({
        mode: ["rotateFlipY", "fadeDown"],
        transition: "smooth",
        duration: 0.66,
      })) as MotionAnimationProps[],
    []
  );

  return (
    <Card className="bg-stone-950 py-4">
      <CardHeader className="px-4 -mb-2">
        <CardTitle>
          <MotionText
            animation={{
              mode: ["filterBlurIn", "fadeRight"],
              transition: "smooth",
              duration: 1,
            }}
            config={{
              duration: 0.12,
              mode: "words",
              delayLogic: "linear",
            }}
            elementType="h3"
            controller={{
              trigger: !trigger,
            }}
          >
            Trends For you
          </MotionText>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 -mt-2">
        <MotionChain
          animations={animations as MotionAnimationProps[]}
          controller={{
            configView: {
              amount: 0.5,
              once: false,
            },
            trigger: !trigger,
          }}
          config={{
            duration: 0.15,
            delayLogic: "linear",
          }}
          elementType="ul"
        >
          {trends.map((t) => (
            <li key={t.id} className="flex justify-between items-start my-1">
              <div className="min-w-0">
                <div className="truncate font-medium">
                  <pre>{t.title}</pre>
                </div>
                <div className="text-xs text-stone-400">{t.meta}</div>
              </div>
            </li>
          ))}
        </MotionChain>
      </CardContent>
    </Card>
  );
};

const WhoNotToFollow = () => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];
  return (
    <Card className="bg-stone-950 py-4">
      <CardHeader className="px-4">
        <CardTitle>
          <MotionText
            animation={{
              mode: ["fadeIn", "textShimmer"],
              transition: "smooth",
              duration: 1,
            }}
            config={{
              duration: 0.12,
              mode: "chars",
              delayLogic: "linear",
            }}
            elementType="h3"
            controller={{
              trigger: !trigger,
            }}
          >
            Who not to follow.
          </MotionText>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 -mt-2">
        <ul className="space-y-3">
          <MotionChain
            elementType="ul"
            animations={whoNotToFollow.map((_) => ({
              mode: ["fadeIn", "filterBlurIn", "heartbeat"],
              transition: "cubicBounce",
              duration: 2,
            }))}
            controller={{
              trigger: !trigger,
            }}
            config={{
              duration: 0.25,
              delayLogic: "linear",
            }}
          >
            {whoNotToFollow.map((u) => (
              <li key={u.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{u.name.split(" ")[0][0]}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <div className="truncate font-medium text-sm">{u.name}</div>
                    <div className="text-xs text-stone-400 truncate">
                      {u.handle}
                    </div>
                  </div>
                </div>
                <Button size="sm" className="scale-75">
                  Follow
                </Button>
              </li>
            ))}
          </MotionChain>
        </ul>
      </CardContent>
    </Card>
  );
};

const InformativeBox = () => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];
  return (
    <Card className="py-4 bg-transparent relative overflow-hidden border-blue-700/30">
      <MotionContainer
        animation={{
          mode: ["fadeIn", "scaleZoomIn"],
          transition: "fadeSlide",
          delay: 0.5,
          duration: 1,
        }}
        controller={{
          trigger: !trigger,
        }}
        elementType="div"
        className="absolute top-8 left-8 z-0 size-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-40% to-blue-600 blur-3xl"
      />
      <CardHeader>
        <CardDescription className="text-xs animate-pulse">
          Click the nav links to see how{" "}
          <Badge variant={"outline"} className="text-xs">
            <pre>{"<MotionLink />"}</pre>
          </Badge>{" "}
          works!
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LinkWidgets;
