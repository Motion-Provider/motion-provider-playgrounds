import { SafariMock } from "./mock";
import LinkSidebar from "./sidebar";
import LinkWidgets from "./widgets";
import LinkShuffle from "./shuffle";

const MotionLink = () => (
  <div className="relative h-[36rem]">
    <SafariMock className="h-[36rem] pointer-events-none" />
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[36rem] w-[57.5rem] rounded-lg z-[49]">
      <div className="size-full bg-black mt-10 flex flex-row">
        <div className="w-1/6 border-r border-stone-900">
          <LinkSidebar />
        </div>
        <div className="w-4/6 bg-stone-950">
          <LinkShuffle />
        </div>
        <div className="w-2/6 flex flex-col gap-2 border-l border-stone-900">
          <LinkWidgets />
        </div>
      </div>
    </div>
  </div>
);

export default MotionLink;
