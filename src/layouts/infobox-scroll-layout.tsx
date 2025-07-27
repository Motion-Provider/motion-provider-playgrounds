import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { InfoBoxLayoutProps } from "@/interfaces";
import { cn } from "@/lib/utils";

export default function InfoBoxScrollLayout({
  children,
  className,
}: InfoBoxLayoutProps) {
  return (
    <ScrollArea className={cn("w-full h-66 overflow-y-scroll", className)}>
      {children}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
