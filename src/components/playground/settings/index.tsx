import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";

export const PlaygroundSettings = () => {
  return (
    <Popover modal>
      <PopoverTrigger className="cursor-pointer dark">
        <Settings className="size-5 " />
      </PopoverTrigger>
      <PopoverContent className="dark">
        playground settings
        <div className="grid gap-4"></div>
      </PopoverContent>
    </Popover>
  );
};
