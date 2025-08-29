import {
  TextConfigDispatchContext,
  TextConfigValueContext,
} from "@/contexts/text-contexts";
import { FC, memo, useContext } from "react";
import { FieldWrapper } from "./field-wrapper";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

export const DurationControl: FC = memo(() => {
  const { setDuration } = useContext(TextConfigDispatchContext);
  const { duration } = useContext(TextConfigValueContext);

  return (
    <FieldWrapper>
      <Label htmlFor="duration">Config Duration</Label>
      <div className="flex flex-row-reverse">
        <Badge variant="secondary" className="border-l-0 rounded-l-none">
          {duration.toFixed(3)}
          {"(s)"}
        </Badge>
        <Slider
          id="duration"
          defaultValue={[duration]}
          max={0.5}
          min={0.005}
          step={0.005}
          value={[duration]}
          onValueChange={(value) => setDuration(value[0])}
          className=" border  rounded-l-md border-r-0 p-2 "
        />
      </div>
      <p className="text-muted-foreground text-xs">
        *Will apply after next play click.
      </p>
    </FieldWrapper>
  );
});

DurationControl.displayName = "DurationControl";
