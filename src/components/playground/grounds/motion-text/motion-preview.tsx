import { cn } from "@/lib/utils";
import {
  TextConfigValueContext,
  TextFieldsValueContext,
} from "@/contexts/text-contexts";
import { ReduxRootState } from "@/redux";
import { useSelector } from "react-redux";
import MotionText from "@/motion/motion-text";
import getMotionKey from "@/utils/getMotionKey";
import { FC, memo, useContext, useMemo } from "react";
import { selectController } from "@/redux/slices/utils";
import { getFontSizeClass } from "@/utils/fontSizeRange";
import { ResizablePanel } from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const HeaderBlock: FC<{
  header: string;
  animation: any;
  config: any;
  controller: any;
}> = memo(({ header, animation, config, controller }) => {
  const headerKey = useMemo(
    () => `header-${animation.mode[0]}-${header.split(" ").join("-")}`,
    [animation.mode, header]
  );

  return (
    <MotionText
      elementType="h1"
      animation={animation}
      config={config}
      className="text-4xl tracking-tighter"
      key={headerKey}
      controller={controller}
    >
      {header ? header : "Type a header to be animated."}
    </MotionText>
  );
});

const DescBlock: FC<{
  desc: string;
  animation: any;
  config: any;
  controller: any;
  fontSizeClass?: string;
}> = memo(({ desc, animation, config, controller, fontSizeClass }) => {
  const descKey = useMemo(
    () => getMotionKey(desc, "desc", animation.mode[0]),
    [animation.mode, desc]
  );

  return (
    <MotionText
      elementType="p"
      animation={animation}
      config={config}
      wrapperClassName={cn("tracking-tight", fontSizeClass)}
      key={descKey}
      controller={controller}
    >
      {desc ? desc : "Type a description to be animated."}
    </MotionText>
  );
});

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

  const config = useMemo(
    () => ({
      duration,
      mode,
      space,
      delayLogic,
    }),
    [duration, mode, space, delayLogic]
  );

  const controller = useMemo(
    () => ({
      configView: {
        amount: 0.1,
        once: false,
      },
      isAnimationStopped,
      reverse,
      trigger: true,
    }),
    [isAnimationStopped, reverse]
  );

  return (
    <ResizablePanel defaultSize={65} className="p-12">
      <ScrollArea className="size-full">
        <HeaderBlock
          header={header}
          animation={animation}
          config={config}
          controller={controller}
        />
        <br />
        <DescBlock
          desc={desc}
          animation={animation}
          config={config}
          controller={controller}
          fontSizeClass={fontSizeClass}
        />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </ResizablePanel>
  );
});

MotionPreview.displayName = "MotionPreview";
DescBlock.displayName = "DescBlock";
HeaderBlock.displayName = "HeaderBlock";
