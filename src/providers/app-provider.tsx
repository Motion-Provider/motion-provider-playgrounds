import { Toaster } from "@/components/ui/sonner";
import { interFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cn("w-full h-screen dark", interFont.className)}>
      {children}
      <Toaster position="bottom-right" />
    </main>
  );
}
