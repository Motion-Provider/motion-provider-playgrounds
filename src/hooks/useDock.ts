import { DockContext } from "@/contexts/dock-context";
import { useContext } from "react";

export const useDock = () => {
  const ctx = useContext(DockContext);
  if (!ctx) throw new Error("useDock must be used within DockProvider");
  return ctx;
};
