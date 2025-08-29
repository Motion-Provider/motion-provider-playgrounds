import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
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
import { Plus, Settings, Trash } from "lucide-react";
import { ReduxRootState } from "@/redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIsClient } from "@uidotdev/usehooks";
import { Separator } from "@/components/ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { setComplexity, updateSettings } from "@/redux/slices/metadata";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

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
      <PopoverTrigger className="cursor-pointer">
        <Settings className="size-5 " />
      </PopoverTrigger>
      <PopoverContent className={` ${interFont.className} w-[24rem]`}>
        <Card className="py-4">
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
          {SETTINGS_SCHEMA.map((field: any) => {
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
                      id={field.key}
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
                        dispatch(
                          updateSettings({
                            key: field.key,
                            value: v === "none" ? undefined : v,
                          })
                        )
                      }
                    >
                      <SelectTrigger className="w-2/3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent id={field.key}>
                        {field.options.map((o: (typeof field.options)[0]) => (
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
                      <SelectContent id={field.key}>
                        {field.options.map((o: (typeof field.options)[0]) => (
                          <SelectItem key={o.value} value={o.value.toString()}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                );
              case "selectStringArray":
                return (
                  <Card key={field.key} className=" mb-2 -mt-2">
                    <CardHeader>
                      <CardTitle>{field.label}</CardTitle>
                      <CardDescription className="text-xs">
                        Add or remove image URLs in order to animate them.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 -mt-3">
                      {val.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newArr = [...val];
                              newArr[idx] = e.target.value;
                              dispatch(
                                updateSettings({
                                  key: field.key,
                                  value: newArr,
                                })
                              );
                            }}
                            className="w-full"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() => {
                              const newArr = val.filter(
                                (_: string, i: number) => i !== idx
                              );
                              dispatch(
                                updateSettings({
                                  key: field.key,
                                  value: newArr,
                                })
                              );
                            }}
                            className="text-red-500 text-sm"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}

                      <Button
                        onClick={() =>
                          dispatch(
                            updateSettings({
                              key: field.key,
                              value: [...val, ""],
                            })
                          )
                        }
                        size="sm"
                        variant="default"
                        className="mt-2"
                      >
                        <Plus className=" h-4 w-4 " />
                        <span>Add item</span>
                      </Button>
                    </CardContent>
                  </Card>
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
