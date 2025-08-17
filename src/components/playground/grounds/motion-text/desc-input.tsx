import { TextFieldsDispatchContext } from "@/contexts/text-contexts";
import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";
import { FieldWrapper } from "./field-wrapper";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const DescInput: FC = memo(() => {
  const { setDesc, getDesc } = useContext(TextFieldsDispatchContext);
  const [local, setLocal] = useState<string>(() => getDesc());

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const v = e.target.value;
      setLocal(v);
      setDesc(v);
    },
    [setDesc]
  );

  return (
    <FieldWrapper>
      <Label htmlFor="desc">Description</Label>
      <Textarea
        id="desc"
        name="desc"
        className="w-full"
        value={local}
        onChange={onChange}
      />
      <p className="text-muted-foreground text-xs">
        *Type a description to be animated.
      </p>
    </FieldWrapper>
  );
});

DescInput.displayName = "DescInput";
