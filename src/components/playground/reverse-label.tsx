import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectController } from "@/redux/slices/utils";

export const ReverseLabel: FC = () => {
  const { reverse } = useSelector(selectController);
  return <>{reverse ? "Forward" : "Reverse"}</>;
};
