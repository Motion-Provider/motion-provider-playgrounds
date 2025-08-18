import { DockContext } from "@/contexts/dock-context";
import { useDock } from "@/hooks/useDock";
import { DockItem, DockTooltip } from "@/interfaces/@types-components";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { FC, memo, ReactNode, useRef, useState } from "react";

const Dock: FC<{ className?: string }> = ({ className }) => {
  const { items } = useDock();
  return <FloatingDockDesktop items={items} className={className} />;
};

const FloatingDockDesktop: FC<{ items: DockItem[]; className?: string }> = ({
  items,
  className,
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.id}
          mouseX={mouseX}
          tooltip={item.tooltip}
          ariaLabel={item.ariaLabel}
        >
          {item.children}
        </IconContainer>
      ))}
    </motion.div>
  );
};

const IconContainer = memo(
  ({
    mouseX,
    children,
    tooltip,
    ariaLabel,
  }: {
    mouseX: MotionValue;
    children: ReactNode;
    tooltip?: DockTooltip;
    ariaLabel?: string;
  }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const distance = useTransform(mouseX, (val) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(
      distance,
      [-150, 0, 150],
      [40, 80, 40]
    );

    const widthTransformIcon = useTransform(
      distance,
      [-150, 0, 150],
      [20, 40, 20]
    );
    const heightTransformIcon = useTransform(
      distance,
      [-150, 0, 150],
      [20, 40, 20]
    );

    const width = useSpring(widthTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    const height = useSpring(heightTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    const widthIcon = useSpring(widthTransformIcon, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    const heightIcon = useSpring(heightTransformIcon, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);

    const showTooltip = hovered || focused;

    if (!children) return null;

    return (
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {typeof tooltip === "string" ? tooltip : tooltip}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center rounded-full absolute hover:scale-150 overflow-hidden"
          aria-label={typeof tooltip === "string" ? tooltip : ariaLabel}
          tabIndex={0}
          role="button"
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: -2 }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

export default Dock;
