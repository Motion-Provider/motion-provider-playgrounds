import React, { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkNavItemComponentProps } from "@/interfaces/@types-components";
import SelectIcon from "./select-icon";
import { Button } from "@/components/ui/button";
import { linkNavItems } from "@/constants/grounds/motion-link-mock.lib";
import MotionChain from "@/motion/motion-chain";
import { MotionAnimationProps } from "@/motion/types";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "@/redux/slices/metadata";
import { ReduxRootState } from "@/redux";
import MotionImage from "@/motion/motion-image";
import { Skeleton } from "@/components/ui/skeleton";
import MotionText from "@/motion/motion-text";

const LinkNavItem: FC<LinkNavItemComponentProps> = ({ item, onClick }) => {
  return (
    <Button
      variant="ghost"
      className="w-full items-center justify-start flex"
      onClick={onClick}
    >
      <SelectIcon name={item.title} />
      <span className="truncate">{item.title}</span>
    </Button>
  );
};

const LinkNavbar: FC = () => {
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];

  return (
    <div className="flex items-center gap-3  pt-3 pb-4 border-b border-stone-800">
      <Avatar className="h-10 w-10 -mr-2">
        <MotionImage
          animation={{
            mode: ["fadeIn", "filterBlurIn", "translate3dIn"],
            transition: "cubicBounce",
            duration: 1,
          }}
          config={{
            duration: 1,
            pieces: 25,
            delayLogic: "sinusoidal",
            img: "/motion-provider-logo.png",
          }}
          controller={{
            trigger: !trigger,
          }}
          wrapperClassName="p-1"
          fallback={<Skeleton className="h-10 w-10 dark" />}
        />
      </Avatar>
      <MotionText
        wrapperClassName="text-sm -mr-4 font-extralight tracking-tighter"
        animation={{
          mode: ["neonGlow", "fadeUp"],
          transition: "cubicBounce",
          duration: 1,
        }}
        config={{
          duration: 0.12,
          delayLogic: "linear",
          mode: "chars",
        }}
        controller={{
          trigger: !trigger,
        }}
        elementType="h3"
      >
        Motion Social.
      </MotionText>
    </div>
  );
};

const LinkNavUser: FC = () => (
  <div className="flex items-center gap-3 px-2 py-3 text-left text-sm hover:bg-stone-800 rounded-lg w-full">
    <div className="flex-1 min-w-0">
      <div className="truncate font-medium">John Doe</div>
      <div className="truncate text-xs text-stone-400">@johndoe</div>
    </div>
    <div className="opacity-80">...</div>
  </div>
);

export default function LinkSidebar() {
  const dispatch = useDispatch();
  const timerRef = useRef<number | null>(null);
  const settings = useSelector(
    (state: ReduxRootState) => state.metadata.settings
  );
  const { trigger } = settings["MotionLink"];

  const handleSetRoute = useCallback(
    (title: string) => {
      dispatch(
        updateSettings({
          key: "trigger",
          value: true,
        })
      );
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      timerRef.current = window.setTimeout(() => {
        dispatch(
          updateSettings({
            key: "trigger",
            value: false,
          })
        );
        dispatch(
          updateSettings({
            key: "route",
            value: `motionsocials.dev/${title.toLowerCase()}`,
          })
        );
        timerRef.current = null;
      }, 2000);
    },
    [dispatch]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const animations = useMemo(
    () =>
      linkNavItems.map((_, idx) => ({
        mode: [idx % 2 === 0 ? "fadeLeft" : "fadeRight", "filterBlurIn"],
        transition: "smooth",
        duration: 1,
      })),
    []
  );
  return (
    <aside className="flex flex-col justify-between size-full p-3 relative">
      <div>
        <LinkNavbar />
        <div className="mt-4">
          <MotionChain
            animations={animations as MotionAnimationProps[]}
            config={{
              duration: 0.15,
              delayLogic: "spiral",
            }}
            elementType="nav"
            className="space-y-2"
            controller={{ trigger: !trigger }}
          >
            {linkNavItems.map((val) => (
              <LinkNavItem
                key={val.id}
                item={val}
                onClick={() => !trigger && handleSetRoute(val.title)}
              />
            ))}
          </MotionChain>
        </div>
      </div>
      <LinkNavUser />
    </aside>
  );
}
