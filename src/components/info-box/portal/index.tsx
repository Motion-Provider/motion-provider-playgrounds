import { Skeleton } from "@/components/ui/skeleton";
import { InfoBoxLayoutProps } from "@/interfaces/@types-layout";
import InfoBoxLayout from "@/layouts/info-box-layout";
import { useIsClient } from "@uidotdev/usehooks";
import { createPortal } from "react-dom";

export default function InfoBoxPortal({
  children,
  className,
}: InfoBoxLayoutProps) {
  const isClient = useIsClient();

  if (!isClient) return <Skeleton className={className} />;

  return createPortal(
    <InfoBoxLayout className={className}>{children}</InfoBoxLayout>,
    document.body
  );
}
