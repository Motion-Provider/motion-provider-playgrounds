import { FC } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimationKeys } from "@/motion/types";
import animations from "@/motion/lib/animate.lib";
import { SelectedMotion } from "./selected-motion";
import { Separator } from "@/components/ui/separator";
import MotionContainer from "@/motion/motion-container";
import {
  MultiSelectProps,
  PlayerControllerProps,
} from "@/interfaces/@types-components";
import { MultiSelect } from "./multi-select";

export const PlayerController: FC<PlayerControllerProps> = ({
  animation,
  onAnimationChange,
  className,
}) => {
  const handleOnSelect = (val: AnimationKeys) =>
    onAnimationChange("mode", val as unknown as AnimationKeys);
  return (
    <Card
      className={cn("dark relative bg-transparent overflow-hidden", className)}
    >
      <CardHeader>
        <CardTitle>Motion Animation</CardTitle>
        <CardDescription>
          Add animation to your motion container, hover animation to see it in
          action.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-auto">
        <MultiSelect
          onChange={handleOnSelect as unknown as MultiSelectProps["onChange"]}
          placeholder="Select Animation"
          items={Object.keys(animations) as AnimationKeys[]}
          selected={animation.mode as AnimationKeys[]}
        />
        <Separator className="my-2" />
        <SelectedMotion
          selected={animation.mode as AnimationKeys[]}
          onSelected={handleOnSelect as unknown as MultiSelectProps["onChange"]}
        />
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
