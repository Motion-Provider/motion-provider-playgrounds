import { Skeleton } from "@/components/ui/skeleton";
import { LayoutProps } from "@/interfaces/@types-layout";
import InfoBoxLayout from "@/layouts/infobox-layout";
import { useIsClient } from "@uidotdev/usehooks";
import { createPortal } from "react-dom";

export default function InfoBoxPortal({ children, className }: LayoutProps) {
  const isClient = useIsClient();

  if (!isClient) return <Skeleton className={className} />;

  return createPortal(
    <InfoBoxLayout className={className}>{children}</InfoBoxLayout>,
    document.body
  );
}
