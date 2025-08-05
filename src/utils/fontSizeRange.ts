import { fontSizeRanges } from "@/constants/schema/fonts-schema";

export function getFontSizeClass(fontSize: number): string {
  let closest = fontSizeRanges[0];
  let smallestDiff = Math.abs(fontSize - closest.value);

  for (const entry of fontSizeRanges) {
    const diff = Math.abs(fontSize - entry.value);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closest = entry;
    }
  }

  return closest.className;
}
