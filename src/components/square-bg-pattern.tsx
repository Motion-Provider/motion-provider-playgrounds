import { SquareBackgroundPatternProps } from "@/interfaces/@types-components";
import { FC } from "react";

export const SquareBgPattern: FC<SquareBackgroundPatternProps> = ({
  width = 800,
  height = 600,
  squareSize = 10,
  gap = 10,
  color = "#ccc",
  backgroundColor = "transparent",
  patternId = "squarePattern",
  className = "",
}) => {
  const patternSize = squareSize + gap;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={{ display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background fill */}
      <rect width="100%" height="100%" fill={backgroundColor} />

      {/* Define pattern */}
      <defs>
        <pattern
          id={patternId}
          width={patternSize}
          height={patternSize}
          patternUnits="userSpaceOnUse"
        >
          <rect width={squareSize} height={squareSize} fill={color} />
        </pattern>
      </defs>

      {/* Apply pattern */}
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
