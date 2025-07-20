import { Inter, Playfair_Display, Alex_Brush } from "next/font/google";

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["200", "300"],
});

export const primaryFont = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-secondary",
});
