import { FC } from "react";
import { cn } from "@/lib/utils";
import { interFont } from "@/lib/fonts";
import SeoMetadata from "@/components/seo-metadata";
import { PageLayoutProps } from "@/interfaces/@types-layout";

const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <main
    className={cn(
      "w-full h-screen relative flex flex-row overflow-hidden",
      interFont.className
    )}
  >
    <SeoMetadata />
    {children}
  </main>
);

export default PageLayout;
