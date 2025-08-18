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
import { AnimationKeys, MotionAnimationProps } from "@/motion/types";

const HeaderBlock: FC<{
  header: string;
  animation: MotionAnimationProps;
  config: any;
  controller: any;
}> = memo(({ header, animation, config, controller }) => {
  const key = useMemo(
    () =>
      getMotionKey(
        header,
        "header",
        `${(animation.mode as AnimationKeys[]).join("-")}-${Object.values(
          config
        )
          .toString()
          .replace(",", "-")}`
      ),
    [animation, header, config]
  );
  return (
    <MotionText
      elementType="h1"
      animation={animation}
      config={config}
      className="text-4xl tracking-tighter"
      key={key}
      controller={controller}
    >
      {header ? header : "Type a header to be animated."}
    </MotionText>
  );
});

const DescBlock: FC<{
  desc: string;
  animation: MotionAnimationProps;
  config: any;
  controller: any;
  fontSizeClass?: string;
}> = memo(({ desc, animation, config, controller, fontSizeClass }) => {
  const key = useMemo(
    () =>
      getMotionKey(
        desc,
        "desc",
        `${(animation.mode as AnimationKeys[]).join("-")}-${Object.values(
          config
        )
          .toString()
          .replace(",", "-")}`
      ),
    [animation, desc, config]
  );

  return (
    <MotionText
      elementType="p"
      animation={animation}
      config={config}
      wrapperClassName={cn("tracking-tight", fontSizeClass)}
      key={key}
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
      isAnimationStopped,
      reverse,
      trigger: true,
    }),
    [isAnimationStopped, reverse]
  );

  return (
    <ResizablePanel defaultSize={65} className=" size-full">
      <ScrollArea className="size-full z-50 py-16 px-24">
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
