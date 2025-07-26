import { InfoBoxLayoutProps } from "@/interfaces";
import { interFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function InfoBoxLayout({
  children,
  className,
}: InfoBoxLayoutProps) {
  return (
    <main
      className={cn(
        interFont.className,
        "items-center justify-center flex overflow-hidden relative dark",
        className
      )}
    >
      {children}
    </main>
  );
}
