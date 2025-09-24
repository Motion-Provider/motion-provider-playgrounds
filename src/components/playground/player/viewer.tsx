import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MotionContainer from "@/motion/motion-container";
import { RefreshCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { CopyCode } from "../../copy-code";
import { useCopyToClipboard, useDebounce } from "@uidotdev/usehooks";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";

export const PlayerViewer = () => {
  const [key, setKey] = useState<number>(0);
  const [_, copyToClipboard] = useCopyToClipboard();

  const motion = useSelector((state: ReduxRootState) => state.motion);
  const debouncedAnimations = useDebounce(motion.animation.mode, 2000);

  const animationKey = useMemo(
    () => Object.keys(debouncedAnimations).join("-").concat(key.toString()),
    [key, debouncedAnimations]
  );

  const handleRestart = () => setKey((prev) => prev + 1);

  return (
    <Card className="relative bg-transparent overflow-hidden h-2/3 w-full">
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
            ...motion.animation,
            delay: 0,
          }}
          elementType="div"
          key={animationKey}
          className="size-28 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        />
      </CardContent>
      <CardFooter className="justify-end  flex w-full ">
        <div className="flex ">
          <Button variant="ghost" onClick={handleRestart}>
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
              key={key}
            >
              <RefreshCcw className="text-white size-5" />
            </MotionContainer>
          </Button>
          <CopyCode
            variant={"ghost"}
            onClick={() => copyToClipboard(JSON.stringify(motion, null, 2))}
            className="text-white"
          />
        </div>
      </CardFooter>
    </Card>
  );
};
