import { PageLayoutProps } from "@/interfaces";
import { interFont } from "@/lib/fonts";
import { FC } from "react";

const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <main
    className={`w-full h-screen relative dark ${interFont.className} flex flex-row overflow-hidden`}
  >
    {children}
  </main>
);

export default PageLayout;
