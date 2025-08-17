import { ResizablePanel } from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  TextConfigValueContext,
  TextFieldsValueContext,
} from "@/contexts/text-contexts";
import { cn } from "@/lib/utils";
import MotionText from "@/motion/motion-text";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import { getFontSizeClass } from "@/utils/fontSizeRange";
import { FC, memo, useContext, useMemo } from "react";
import { useSelector } from "react-redux";

export const MotionPreview: FC = memo(() => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const { mode, space, fontSize } = settings["MotionText"];
  const fontSizeClass = useMemo(() => getFontSizeClass(fontSize), [fontSize]);

  const { header, desc } = useContext(TextFieldsValueContext);
  const { duration } = useContext(TextConfigValueContext);
  const headerKey = useMemo(
    () => `header-${animation.mode[0]}-${header.split(" ").join("-")}`,
    [animation.mode, header]
  );
  const descKey = useMemo(
    () => `desc-${animation.mode[0]}-${desc.split(" ").join("-")}`,
    [animation.mode, desc]
  );

  return (
    <ResizablePanel defaultSize={65} className="p-12">
      <ScrollArea className="size-full">
        <MotionText
          elementType="h1"
          animation={animation}
          config={{
            duration,
            mode,
            space,
            delayLogic,
          }}
          className="text-4xl tracking-tighter"
          key={headerKey}
          controller={{
            configView: {
              amount: 0.1,
              once: false,
            },
            isAnimationStopped,
            reverse,
            trigger: true,
          }}
        >
          {header ? header : "Type a header to be animated."}
        </MotionText>
        <br />
        <MotionText
          elementType="p"
          animation={animation}
          config={{
            duration,
            mode,
            space,
            delayLogic,
          }}
          wrapperClassName={cn("tracking-tight", fontSizeClass)}
          key={descKey}
          controller={{
            configView: {
              amount: 0.1,
              once: false,
            },
            isAnimationStopped,
            reverse,
            trigger: true,
          }}
        >
          {desc ? desc : "Type a description to be animated."}
        </MotionText>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </ResizablePanel>
  );
});

MotionPreview.displayName = "MotionPreview";
