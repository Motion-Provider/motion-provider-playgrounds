import { MultiSelectProps } from "@/interfaces";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { AnimationKeys } from "@/motion/types";

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
  placeholder = "Select options",
}) => {
  const toggleValue = (value: AnimationKeys) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const selectedLabels = options.filter((opt) => selected.includes(opt));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left">
          {selected.length === 0 ? (
            <span className="text-muted-foreground">{placeholder}</span>
          ) : (
            selectedLabels.join(", ")
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 max-h-60 overflow-y-auto p-2 dark">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted cursor-pointer"
          >
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={() => toggleValue(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </PopoverContent>
    </Popover>
  );
};
