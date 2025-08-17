import { Box } from "lucide-react";
import { interFont } from "@/lib/fonts";
import { AnimationKeys } from "@/motion/types";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { HoverViewer } from "./hover-viewer";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { ReduxRootState, ReduxStoreDispatchType } from "@/redux";
import { toast } from "sonner";
import { setMotion } from "@/redux/slices/motion";
import animations from "@/motion/lib/animate.lib";

const items = Object.keys(animations).sort((a, b) =>
  a.localeCompare(b)
) as AnimationKeys[];

export const MultiSelect = () => {
  const dispatch = useDispatch<ReduxStoreDispatchType>();
  const { animation } = useSelector((state: ReduxRootState) => state.motion);
  const { mode: currentModes } = animation;

  const onAnimationAdded = (value: AnimationKeys) => {
    if (currentModes.includes(value)) {
      toast.warning(`${value} is already selected Capitan.`, {
        duration: 3000,
        position: "top-center",
        richColors: true,
      });
      return;
    }
    dispatch(
      setMotion({
        mode: [...currentModes, value],
      })
    );
  };

  return (
    <Select onValueChange={onAnimationAdded}>
      <SelectTrigger className="w-full">Select an animation</SelectTrigger>
      <SelectContent
        className={`w-full relative h-auto p-2 dark ${interFont.className} w-full`}
      >
        {items.map((item) => (
          <SelectItem
            value={item}
            title="Add an animation"
            key={item}
            className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted cursor-pointer w-full relative"
          >
            <HoverCard openDelay={250} closeDelay={100}>
              <HoverCardTrigger className="flex flex-row items-center gap-2 w-full ">
                <Box className="size-4" />
                <span className="tracking-tight">{item}</span>
              </HoverCardTrigger>
              <HoverCardContent className="w-full dark p-16 relative overflow-hidden">
                <HoverViewer animationMode={item} className="size-16 z-10" />
                <Badge variant={"outline"} className="absolute top-2 right-2">
                  <pre>{item}</pre>
                </Badge>
              </HoverCardContent>
            </HoverCard>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
