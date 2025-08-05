import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { interFont } from "@/lib/fonts";
import schema from "@/constants/schema";
import { Settings } from "lucide-react";
import { ReduxRootState } from "@/redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIsClient } from "@uidotdev/usehooks";
import { Separator } from "@/components/ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { setComplexity, updateSettings } from "@/redux/slices/metadata";
import { Badge } from "@/components/ui/badge";

const PlaygroundSettings = () => {
  const isClient = useIsClient();
  const dispatch = useDispatch();

  const motion = useSelector((s: ReduxRootState) => s.metadata.currentMotion!);
  const settings = useSelector(
    (s: ReduxRootState) => s.metadata.settings[motion]
  );
  const complexity = useSelector((s: ReduxRootState) => s.metadata.complexity);

  if (typeof motion === "undefined" || !isClient)
    return <Settings className="size-5 blur-sm" />;

  const SETTINGS_SCHEMA = schema[motion];

  return (
    <Popover modal>
      <PopoverTrigger className="cursor-pointer dark">
        <Settings className="size-5 " />
      </PopoverTrigger>
      <PopoverContent className={`dark ${interFont.className} w-[24rem]`}>
        <Card className="py-4 dark">
          <CardHeader>
            <CardTitle className="inline-flex gap-2 items-center">
              <Badge variant={"destructive"}>
                <pre className="font-normal">{`<${motion} />`}</pre>
              </Badge>{" "}
            </CardTitle>
            <CardDescription className="tracking-tighter ">
              Adjust the playground's settings in seconds.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="grid gap-1">
          <Separator
            orientation="horizontal"
            className="my-4 w-16 h-4 self-center"
          />
          {SETTINGS_SCHEMA.map((field) => {
            const val = (settings as any)[field.key];
            switch (field.type) {
              case "number":
                return (
                  <div
                    key={field.key}
                    className="flex justify-between flex-row "
                  >
                    <Label htmlFor={field.key} className="text-sm ">
                      {field.label}
                    </Label>
                    <Input
                      id={field.key}
                      type="number"
                      min={field.min}
                      max={field.max}
                      value={val}
                      onChange={(e) =>
                        dispatch(
                          updateSettings({
                            key: field.key,
                            value: Number(e.target.value),
                          })
                        )
                      }
                      className="w-2/3"
                    />
                  </div>
                );
              case "text":
                return (
                  <div
                    key={field.key}
                    className="flex justify-between flex-row"
                  >
                    <Label htmlFor={field.key} className="text-sm">
                      {field.label}
                    </Label>
                    <Input
                      type="text"
                      value={val}
                      onChange={(e) =>
                        dispatch(
                          updateSettings({
                            key: field.key,
                            value: e.target.value,
                          })
                        )
                      }
                      className="w-2/3"
                    />
                  </div>
                );
              case "select":
                return (
                  <div
                    key={field.key}
                    className="flex justify-between flex-row"
                  >
                    <Label htmlFor={field.key} className="text-sm">
                      {field.label}
                    </Label>
                    <Select
                      value={val}
                      onValueChange={(v) =>
                        dispatch(updateSettings({ key: field.key, value: v }))
                      }
                    >
                      <SelectTrigger className="w-2/3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent id={field.key} className="dark">
                        {field.options.map((o) => (
                          <SelectItem key={o.value} value={o.value!}>
                            {field.key.toLowerCase().includes("color") && (
                              <span
                                className={cn("size-3 rounded-full ml-2", {
                                  "bg-rose-500": o.value?.includes("rose"),
                                  "bg-emerald-500":
                                    o.value?.includes("emerald"),
                                  "bg-purple-500": o.value?.includes("purple"),
                                  "bg-sky-500": o.value?.includes("sky"),
                                })}
                              />
                            )}
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                );
              case "selectNumber":
                return (
                  <div key={field.key} className="flex justify-between">
                    <label>{field.label}</label>
                    <Select
                      value={val}
                      onValueChange={(v) =>
                        dispatch(updateSettings({ key: field.key, value: v }))
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="dark">
                        {field.options.map((o) => (
                          <SelectItem key={o.value} value={o.value.toString()}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                );
            }
          })}
          <div className="flex justify-between flex-row ">
            <Label htmlFor="complexity" className="text-sm ">
              Complexity
            </Label>
            <Input
              id="complexity"
              type="number"
              min={1}
              max={20}
              value={complexity}
              onChange={(e) => dispatch(setComplexity(Number(e.target.value)))}
              className="w-2/3"
            />
          </div>
        </div>
        <p className="text-muted-foreground text-xs tracking-tight pt-3 w-full">
          *Complexity increases the next random animation's array size by one.
        </p>
      </PopoverContent>
    </Popover>
  );
};

export default PlaygroundSettings;
