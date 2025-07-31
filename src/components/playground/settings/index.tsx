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
import { SchemaLayoutProps } from "@/interfaces/@types-layout";

export const PlaygroundSettings: FC<SchemaLayoutProps> = ({
  onSettings,
  schema,
}) => {
  const { borderBlur, borderColor, circleCount } = schema;

  return (
    <Popover modal>
      <PopoverTrigger className="cursor-pointer dark">
        <Settings className="size-5 " />
      </PopoverTrigger>
      <PopoverContent className="dark">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none">Settings</h4>
            <p className="text-muted-foreground text-sm">
              Adjust settings for the circle.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex flex-row justify-between gap-4">
              <Label htmlFor="count">Circle count</Label>
              <Input
                id="count"
                min={1}
                max={50}
                defaultValue={circleCount}
                type="number"
                onChange={(e) => {
                  e.preventDefault();
                  onSettings("circleCount", e.target.value);
                }}
                className="col-span-2 h-8 w-3/5"
              />
            </div>
            <div className="flex flex-row justify-between gap-4 ">
              <Label htmlFor="borderColor">Color</Label>
              <Select
                defaultValue={borderColor}
                onValueChange={(e) => onSettings("borderColor", e)}
              >
                <SelectTrigger className="w-3/5" id="borderColor">
                  <SelectValue
                    placeholder={`${borderColor.split("-")[1]} selected`}
                  />
                </SelectTrigger>
                <SelectContent className="dark">
                  <SelectItem value="border-sky-500">
                    <div className="size-3 rounded-full bg-sky-500" />
                    Sky
                  </SelectItem>
                  <SelectItem value="border-rose-500">
                    <div className="size-3 rounded-full bg-rose-500" />
                    Red
                  </SelectItem>
                  <SelectItem value="border-emerald-500">
                    <div className="size-3 rounded-full bg-emerald-500" />
                    Green
                  </SelectItem>

                  <SelectItem value="border-purple-500">
                    <div className="size-3 rounded-full bg-purple-500" />
                    Purple
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
              <Label htmlFor="complexity">Complexity</Label>
              <Input
                id="complexity"
                defaultValue={schema.complexity}
                min={1}
                max={10}
                type="number"
                onChange={(e) => onSettings("complexity", e.target.value)}
                placeholder={String(schema.complexity)}
                className="h-8 w-3/5"
              />
            </div>
            {/** Image controllers will move to a separate component */}
            {/* <div className="flex flex-row justify-between gap-4 ">
              <Label htmlFor="imageLink">Image Link</Label>
              <Input
                id="imageLink"
                defaultValue={img}
                type="text"
                onChange={(e) => onSettings("img", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="h-8 w-3/5"
              />
            </div>
            <div className="flex flex-row justify-between gap-4 ">
              <Label htmlFor="borderColor">Image Trigger</Label>
              <Select
                onValueChange={(e) => onSettings("imgMode", e)}
                defaultValue={imgMode}
              >
                <SelectTrigger className="w-3/5" id="borderColor">
                  <SelectValue placeholder="Immediately" />
                </SelectTrigger>
                <SelectContent className="dark">
                  <SelectItem value="undefined">
                    <RefreshCw className="size-4" />
                    Immediately
                  </SelectItem>
                  <SelectItem value="hover">
                    <SquareDashedMousePointer className="size-4" />
                    On Hover
                  </SelectItem>
                  <SelectItem value="click">
                    <MousePointerClick className="size-4" />
                    On Click
                  </SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <div className="flex flex-row justify-between gap-4 ">
              <Label htmlFor="borderBlur">Border Blur</Label>
              <Select
                onValueChange={(e) => onSettings("borderBlur", e)}
                defaultValue={borderBlur}
              >
                <SelectTrigger className="w-3/5" id="borderBlur">
                  <SelectValue placeholder="Select blur rate" />
                </SelectTrigger>
                <SelectContent className="dark">
                  <SelectItem value="blur-sm">Small</SelectItem>
                  <SelectItem value="blur-md">Medium</SelectItem>
                  <SelectItem value="blur-lg">Large</SelectItem>
                  <SelectItem value="blur-xl">X-Large</SelectItem>
                  <SelectItem value="blur-none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-muted-foreground text-xs pt-2">
              *Complexity is standing for the next random{"(dice)"} animation's
              array size.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
