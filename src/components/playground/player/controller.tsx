import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PlayerControllerProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { FC, useState } from "react";
import { MultiSelect } from "../multi-select";
import { AnimationKeys } from "@/motion/types";
import animations from "@/motion/lib/animate.lib";

export const Controller: FC<PlayerControllerProps> = ({
  animation,
  onAnimationChange,
  className,
}) => {
  const [selected, setSelected] = useState<AnimationKeys[]>(
    animation.mode as AnimationKeys[]
  );

  return (
    <Card
      className={cn("dark relative bg-transparent overflow-hidden", className)}
    >
      <CardHeader>
        <CardTitle>Motion Configuration</CardTitle>
        <CardDescription>
          Configure your animation in seconds and use it anywhere.
        </CardDescription>
      </CardHeader>
      <CardContent className="size-full">
        <ScrollArea className="h-[250px] w-full">
          <MultiSelect
            onChange={setSelected}
            placeholder="Select Animation"
            options={Object.keys(animations) as AnimationKeys[]}
            selected={selected}
          />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </CardContent>
      <MotionContainer
        animation={{
          mode: ["fadeIn"],
          transition: "smooth",
          duration: 1,
        }}
        controller={{
          configView: {
            amount: 0.5,
            once: false,
          },
        }}
        elementType="div"
        className="absolute -bottom-4 right-4 -z-10 size-24 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-40% to-rose-600 blur-2xl"
      />
    </Card>
  );
};
