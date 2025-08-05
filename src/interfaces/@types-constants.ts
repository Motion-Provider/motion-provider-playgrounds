import {
  DelayLogic,
  ImageMotionPieces,
  MotionAnimationProps,
} from "@/motion/types";

export interface MotionAnimation {
  animation: Omit<MotionAnimationProps, "delay">;
  delayLogic: DelayLogic;
}

export type SettingsFieldsProps =
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
