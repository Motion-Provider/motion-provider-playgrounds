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
import { Input } from "@/components/ui/input";

export const HeaderInput: FC = memo(() => {
  const { setHeader, getHeader } = useContext(TextFieldsDispatchContext);
  const [local, setLocal] = useState<string>(() => getHeader());

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setLocal(v);
      setHeader(v);
    },
    [setHeader]
  );

  return (
    <FieldWrapper>
      <Label htmlFor="header">Header</Label>
      <Input
        type="text"
        id="header"
        name="header"
        className="w-full"
        value={local}
        onChange={onChange}
      />
      <p className="text-muted-foreground text-xs">
        *Type a header to be animated.
      </p>
    </FieldWrapper>
  );
});

HeaderInput.displayName = "HeaderInput";
