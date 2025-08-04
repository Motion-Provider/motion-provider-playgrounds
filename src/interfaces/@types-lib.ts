import {
  ImageMotionPieces,
  MotionChainProps,
  MotionContainerProps,
} from "@/motion/types";

/** interfaces */

export interface ReduxLibMotionProps {
  animation: MotionContainerProps["animation"];
  delayLogic: MotionChainProps["config"]["delayLogic"];
}

/** types */

export type MotionSettingsFieldsProps =
  | {
      type: "number";
      key: string;
      label: string;
      min?: number;
      max?: number;
      defaultValue: number;
    }
  | {
      type: "select";
      key: string;
      label: string;
      defaultValue: string | number;
      options: { value: any; label: string }[];
    }
  | {
      type: "text";
      key: string;
      label: string;
      defaultValue: string;
    }
  | {
      type: "selectNumber";
      key: string;
      label: string;
      defaultValue: ImageMotionPieces;
      options: { value: ImageMotionPieces; label: string }[];
    }
  | {
      type: "selectStringArray";
      key: string;
      label: string;
      defaultValue: string[];
    };

export type InfoboxHintLibProps = string[];
