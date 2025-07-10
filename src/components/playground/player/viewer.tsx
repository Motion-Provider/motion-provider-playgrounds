import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlayerControllerProps, PlayerViewerProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { Copy, RefreshCcw } from "lucide-react";
import { FC, useState } from "react";
import { CopyCode } from "../copy-code";

export const Viewer: FC<PlayerViewerProps> = ({ animation, className }) => {
  const [animationKey, setAnimationKey] = useState<number>(0);
  const handleCopyCode = () =>
    navigator.clipboard.writeText(JSON.stringify(animation));
  const handleRestartAnimation = () => setAnimationKey((prev) => prev + 1);
  return (
    <Card
      className={cn("dark relative bg-transparent overflow-hidden ", className)}
    >
      <MotionContainer
        animation={{
          mode: ["fadeIn"],
          transition: "smooth",
          delay: 0.5,
          duration: 1,
        }}
        elementType="div"
        className="absolute top-12 left-12 -z-10 size-24 rounded-full bg-blue-600 blur-3xl"
      />
      <Badge variant="outline" className="bottom-6 left-6 absolute text-xs">
        <pre>{"<MotionContainer />"}</pre>
      </Badge>
      <CardHeader>
        <CardTitle>View Current Animation</CardTitle>
        <CardDescription>
          Configure and view the animation that you set. Copy in seconds and
          trigger to view.
        </CardDescription>
      </CardHeader>
      <CardContent className="z-50 min-h-[200px] w-full items-center-safe justify-center flex ">
        <MotionContainer
          animation={{
            ...animation,
            delay: 0,
          }}
          elementType="div"
          key={animationKey}
          className="size-28 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        />
      </CardContent>
      <CardFooter className="justify-end flex w-full gap-2">
        <Button variant={"ghost"} onClick={handleRestartAnimation}>
          <MotionContainer
            animation={{
              mode: ["spin"],
              transition: "cubicElastic",
              delay: 0,
              duration: 1,
            }}
            elementType={"div"}
            controller={{
              configView: {
                once: false,
                amount: 0.5,
              },
            }}
            key={animationKey}
          >
            <RefreshCcw className="text-white size-5" />
          </MotionContainer>
        </Button>
        <CopyCode onClick={handleCopyCode} className="text-white" />
      </CardFooter>
    </Card>
  );
};
