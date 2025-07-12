import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlayerControllerProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { FC, useMemo, useState } from "react";
import { MultiSelect } from "../multi-select";
import { AnimationKeys } from "@/motion/types";
import animations from "@/motion/lib/animate.lib";
import { SelectedMotion } from "./selected-motion";
import { useDebounce } from "@uidotdev/usehooks";
import { Separator } from "@/components/ui/separator";

export const Controller: FC<PlayerControllerProps> = ({
  animation,
  onAnimationChange,
  className,
}) => {
  const [selected, setSelected] = useState<AnimationKeys[]>(
    animation.mode as AnimationKeys[]
  );
  const debouncedSelected = useDebounce(selected, 500);

  useMemo(() => {
    onAnimationChange("mode", selected as any);
  }, [debouncedSelected]);

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
          onChange={(val) => setSelected(val)}
          placeholder="Select Animation"
          items={Object.keys(animations) as AnimationKeys[]}
          selected={selected}
        />
        <Separator className="my-2" />
        <SelectedMotion selected={selected} onSelected={setSelected} />
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
