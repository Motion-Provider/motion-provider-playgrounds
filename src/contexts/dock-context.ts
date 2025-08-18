import { DockContextValue } from "@/interfaces/@types-components";
import { createContext } from "react";

export const DockContext = createContext<DockContextValue | null>(null);
