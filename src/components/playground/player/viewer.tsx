import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import MotionContainer from "@/motion/motion-container";
import { RefreshCcw } from "lucide-react";
import { FC, useState } from "react";
import { CopyCode } from "../copy-code";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { PlayerViewerProps } from "@/interfaces/@types-components";

export const Viewer: FC<PlayerViewerProps> = ({
  animation,
  className,
  delayLogic,
}) => {
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [_, copyToClipboard] = useCopyToClipboard();
  const handleRestartAnimation = () => setAnimationKey((prev) => prev + 1);

  const copyData = {
    ...animation,
    delayLogic,
  };
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

      <CardHeader>
        <CardTitle>View Current Animation</CardTitle>
        <CardDescription>
          Configure and view the animation that you set. Copy in seconds and
          trigger to view.
        </CardDescription>
      </CardHeader>
      <CardContent className="z-50 h-auto w-full items-center-safe justify-center flex ">
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
      <CardFooter className="justify-between  flex w-full gap-2 ">
        <Badge variant="outline">
          <pre>{"<MotionContainer />"}</pre>
        </Badge>
        <div className="flex ">
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
          <CopyCode
            variant={"ghost"}
            onClick={() => copyToClipboard(JSON.stringify(copyData, null, 2))}
            className="text-white"
          />
        </div>
      </CardFooter>
    </Card>
  );
};
