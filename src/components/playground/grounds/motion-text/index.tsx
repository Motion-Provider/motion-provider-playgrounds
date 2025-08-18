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
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const MotionPreview = dynamic(
  () => import("./motion-preview").then((mod) => mod.MotionPreview),
  {
    ssr: false,
    loading: () => <Skeleton className="h-full w-[64.33%] dark" />,
  }
);

export default function Text() {
  return (
    <div className="h-4/5 w-3/5 border rounded-lg overflow-hidden">
      <TextProvider>
        <ResizablePanelGroup direction="horizontal" className="size-full">
          <ResizablePanel
            defaultSize={35}
            className=" px-1 z-50 size-full relative"
          >
            <ScrollArea className="size-full p-4">
              <HeaderAlert />
              <br />
              <HeaderInput />
              <br />
              <DescInput />
              <br />
              <DurationControl />
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
