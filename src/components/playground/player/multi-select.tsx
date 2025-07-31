import { FC } from "react";
import { Box } from "lucide-react";
import { interFont } from "@/lib/fonts";
import { AnimationKeys } from "@/motion/types";
import { MultiSelectProps } from "@/interfaces/@types-components";
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
import { SquareBgPattern } from "@/components/square-bg-pattern";
import { Badge } from "@/components/ui/badge";

export const MultiSelect: FC<MultiSelectProps> = ({
  items,
  selected,
  onChange,
}) => {
  const toggleValue = (value: AnimationKeys) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <Select onValueChange={toggleValue}>
      <SelectTrigger className="w-full">Select an animation </SelectTrigger>
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
                <SquareBgPattern
                  squareSize={2}
                  gap={8}
                  color="#fff00"
                  className="absolute inset-0 -z-10 size-full"
                />
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
