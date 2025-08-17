import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TextProvider from "@/providers/text-provider";
import { HeaderAlert } from "./header-alert";
import { HeaderInput } from "./header-input";
import { DescInput } from "./desc-input";
import { DurationControl } from "./duration-control";
import { FormUtils } from "./form-utils";
import { MotionPreview } from "./motion-preview";
import MotionContainer from "@/motion/motion-container";

export default function Text() {
  return (
    <div className="h-4/5 w-3/5 border rounded-lg">
      <TextProvider>
        <ResizablePanelGroup direction="horizontal" className="size-full">
          <ResizablePanel
            defaultSize={35}
            className=" px-1 z-50 size-full relative"
          >
            <MotionContainer
              animation={{
                mode: ["fadeIn"],
                transition: "smooth",
                delay: 0.5,
                duration: 1,
              }}
              elementType="div"
              className="absolute -top-8 -left-8 -z-10 size-36 rounded-full bg-blue-600 blur-3xl"
            />

            <ScrollArea className="size-full p-4">
              <HeaderAlert />
              <br />
              <HeaderInput />
              <br />
              <DescInput />
              <br />
              <DurationControl />
              <br />
              <FormUtils />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <MotionPreview />
        </ResizablePanelGroup>
      </TextProvider>
    </div>
  );
}
