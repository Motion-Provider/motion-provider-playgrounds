import { SettingsFieldsProps } from "@/interfaces/@types-constants";
import { Motions, SettingsByProvider } from "@/interfaces/@types-redux";
import { MotionImageConfigProps, MotionImageProps } from "@/motion/types";

const Pieces = [
  16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400,
] as const as MotionImageProps["config"]["pieces"][];

export default {
  MotionChain: [
    {
      type: "number",
      key: "circleCount",
      label: "Circle Amount",
      min: 1,
      max: 50,
      defaultValue: 30,
    },
    {
      type: "select",
      defaultValue: "blur-none",
      key: "borderBlur",
      label: "Blur",
      options: [
        {
          label: "Blur None",
          value: "blur-none",
        },
        {
          label: "Large",
          value: "blur-lg",
        },
        {
          label: "Medium",
          value: "blur-md",
        },
        {
          label: "Small",
          value: "blur-sm",
        },
        {
          label: "X-Large",
          value: "blur",
        },
      ] as {
        value: SettingsByProvider["MotionChain"]["borderBlur"];
        label: string;
      }[],
    },
    {
      type: "select",
      defaultValue: "border-rose-500",
      key: "borderColor",
      label: "Border Color",
      options: [
        {
          label: "Rose",
          value: "border-rose-500",
        },
        {
          label: "Emerald",
          value: "border-emerald-500",
        },
        {
          label: "Purple",
          value: "border-purple-500",
        },
        {
          label: "Sky",
          value: "border-sky-500",
        },
      ] as {
        value: SettingsByProvider["MotionChain"]["borderColor"];
        label: string;
      }[],
    },
    {
      type: "number",
      min: 0.01,
      max: 50,
      label: "Total Duration",
      defaultValue: 0.15,
      key: "duration",
    },
  ],
  MotionContainer: [
    {
      type: "select",
      defaultValue:
        "bg-rose-500" as SettingsByProvider["MotionContainer"]["backgroundColor"],
      key: "backgroundColor",
      label: "Background Color",
      options: [
        {
          label: "Rose",
          value: "bg-rose-500",
        },
        {
          label: "Emerald",
          value: "bg-emerald-500",
        },
        {
          label: "Purple",
          value: "bg-purple-500",
        },
        {
          label: "Sky",
          value: "bg-sky-500",
        },
      ] as {
        value: SettingsByProvider["MotionContainer"]["backgroundColor"];
        label: string;
      }[],
    },
  ],
  MotionImage: [
    {
      type: "text",
      defaultValue: "/assets/motion-image.webp",
      key: "img",
      label: "Image Link",
    },
    {
      type: "selectNumber",
      defaultValue: 81,
      key: "pieces",
      label: "Pieces",
      options: Pieces.map((val) => ({
        label: val.toString(),
        value: val,
      })),
    },
    {
      type: "select",
      defaultValue: "none",
      key: "fn",
      label: "Trigger Function",
      options: [
        {
          label: "None",
          value: "none",
        },
        {
          label: "Hover",
          value: "hover",
        },
        {
          label: "Click",
          value: "click",
        },
      ] as { label: string; value: MotionImageConfigProps["fn"] }[],
    },
    {
      type: "number",
      min: 0.1,
      max: 50,
      label: "Total Duration",
      defaultValue: 1,
      key: "duration",
    },
  ],
  MotionMovie: [
    {
      type: "selectStringArray",
      defaultValue: [
        "/assets/motion-image.webp",
        "/assets/motion-container.webp",
      ],
      key: "images",
      label: "Image List",
    },
    {
      type: "selectNumber",
      defaultValue: 81,
      key: "pieces",
      label: "Pieces",
      options: Pieces.map((val) => ({
        label: val.toString(),
        value: val,
      })),
    },
    {
      type: "number",
      min: 5,
      max: 25,
      defaultValue: 5,
      key: "animationDuration",
      label: "Total Duration",
    },
  ],
  MotionLink: [
    {
      type: "number",
      defaultValue: 5000,
      key: "timer",
      label: "Timer(s)",
      min: 1000,
      max: 10000,
    },
    {
      type: "text",
      defaultValue: "/",
      key: "link",
      label: "Redirection link",
    },
  ],
  MotionText: [
    {
      defaultValue: 24,
      key: "fontSize",
      label: "Font Size",
      type: "number",
      min: 8,
      max: 100,
    },
    {
      type: "select",
      key: "mode",
      label: "Animation Mode",
      defaultValue: "chars",
      options: [
        {
          label: "Char by Char",
          value: "chars",
        },
        {
          label: "Word by Word",
          value: "words",
        },
      ] as {
        value: SettingsByProvider["MotionText"]["mode"];
        label: string;
      }[],
    },
    {
      type: "number",
      min: 0,
      max: 50,
      label: "Char Tracking",
      defaultValue: 0,
      key: "space",
    },
  ],
} as const satisfies Record<Motions, SettingsFieldsProps[]>;
