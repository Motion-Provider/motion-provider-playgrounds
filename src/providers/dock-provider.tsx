import { DockContext } from "@/contexts/dock-context";
import { DockItem } from "@/interfaces/@types-components";
import { FC, ReactNode, useCallback, useMemo, useState } from "react";

const DockProvider: FC<{
  initialItems?: DockItem[];
  children: ReactNode;
}> = ({ initialItems = [], children }) => {
  const [items, setItems] = useState<DockItem[]>(initialItems);

  const updateItem = useCallback((id: string, patch: Partial<DockItem>) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, ...patch } : it))
    );
  }, []);

  const registerItem = useCallback((item: DockItem) => {
    setItems((prev) => {
      if (prev.some((p) => p.id === item.id)) return prev;
      return [...prev, item];
    });
    return () => setItems((prev) => prev.filter((p) => p.id !== item.id));
  }, []);

  const value = useMemo(
    () => ({ items, setItems, updateItem, registerItem }),
    [items, updateItem, registerItem]
  );

  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
};

export default DockProvider;
