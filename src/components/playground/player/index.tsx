import { PlayerController } from "./controller";
import { PlayerViewer } from "./viewer";
import { interFont } from "@/lib/fonts";
import { AnimationConfiguration } from "./animation-configuration";

export default function Player() {
  return (
    <div
      className={`w-full ${interFont.className} max-h-[500px] rounded-2xl p-6 bg-transparent`}
    >
      <div className="size-full flex flex-row gap-2">
        <PlayerController />
        <div className="w-3/5 h-full flex flex-col gap-2">
          <PlayerViewer />
          <AnimationConfiguration />
        </div>
      </div>
    </div>
  );
}
