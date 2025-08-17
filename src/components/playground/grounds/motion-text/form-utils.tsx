import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC, useContext } from "react";
import { FieldWrapper } from "./field-wrapper";
import { Button } from "@/components/ui/button";
import { Ban, Trash } from "lucide-react";
import { TextFieldsDispatchContext } from "@/contexts/text-contexts";

export const FormUtils: FC = () => {
  const { setDesc, getHeader } = useContext(TextFieldsDispatchContext);
  const handleResetFields = () => {};
  const handleResetSettings = () => {};
  return (
    <Card className="dark w-full bg-transparent">
      <CardHeader>
        <CardTitle>Utilities</CardTitle>
        <CardDescription>
          Useful tools for better configuration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldWrapper>
          <Button
            variant="ghost"
            onClick={handleResetFields}
            className="w-full bg-rose-500/80 hover:text-rose-500"
          >
            <Trash className="size-4" />
            <pre>Reset Fields</pre>
          </Button>
          <Button
            variant="outline"
            onClick={handleResetSettings}
            className="w-full mt-1"
          >
            <Ban className="size-4" />
            <pre>Reset Settings</pre>
          </Button>
        </FieldWrapper>
      </CardContent>
    </Card>
  );
};
FormUtils.displayName = "FormUtils";
