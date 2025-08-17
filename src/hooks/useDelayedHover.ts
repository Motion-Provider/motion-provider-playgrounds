import { useRef, useCallback } from "react";
export function useDelayedHover(cb: (id?: number) => void, delay = 120) {
  const t = useRef<number | null>(null);
  return {
    onEnter: useCallback(
      (id?: number) => {
        if (t.current) window.clearTimeout(t.current);
        t.current = window.setTimeout(() => cb(id), delay);
      },
      [cb, delay]
    ),
    onLeave: useCallback(() => {
      if (t.current) window.clearTimeout(t.current);
      t.current = window.setTimeout(() => cb(undefined), 60);
    }, [cb]),
  };
}
