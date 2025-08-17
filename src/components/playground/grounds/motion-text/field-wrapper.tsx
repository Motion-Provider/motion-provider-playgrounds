import { FieldWrapperProps } from "@/interfaces/@types-components";
import { FC } from "react";

export const FieldWrapper: FC<FieldWrapperProps> = ({ children }) => (
  <div className="flex flex-col gap-1 w-full">{children}</div>
);
