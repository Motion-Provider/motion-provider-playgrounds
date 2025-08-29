import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SelectedMotion } from "./selected-motion";
import { Separator } from "@/components/ui/separator";
import MotionContainer from "@/motion/motion-container";
import { MultiSelect } from "./multi-select";

export const PlayerController = () => {
  return (
    <Card className="relative bg-transparent overflow-hidden w-2/5 h-full">
      <CardHeader>
        <CardTitle>Motion Animation</CardTitle>
        <CardDescription>
          Add animation to your motion container, hover animation to see it in
          action.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-auto">
        <MultiSelect />
        <Separator className="my-2" />
        <SelectedMotion />
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
