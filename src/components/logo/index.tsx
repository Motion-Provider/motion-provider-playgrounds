import MotionContainer from "@/motion/motion-container";

export const Logo = () => (
  <div className="absolute md:top-24 md:left-24 left-12 top-12 flex items-center justify-center-safe gap-2">
    <MotionContainer
      animation={{
        mode: ["fadeIn"],
        transition: "smooth",
        delay: 0.25,
        duration: 1,
      }}
      elementType="div"
      className="blur-3xl size-24 bg-yellow-200 absolute -z-20"
    />

    <div
      style={{
        imageRendering: "pixelated",
        flexShrink: 0,
        backgroundSize: "100% 100%",
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 9'><path d='M 9.062 0 L 4.32 8.992 L 0 8.992 L 3.703 1.971 C 4.277 0.882 5.709 0 6.902 0 Z M 19.656 2.248 C 19.656 1.006 20.623 0 21.816 0 C 23.009 0 23.976 1.006 23.976 2.248 C 23.976 3.49 23.009 4.496 21.816 4.496 C 20.623 4.496 19.656 3.49 19.656 2.248 Z M 9.872 0 L 14.192 0 L 9.45 8.992 L 5.13 8.992 Z M 14.974 0 L 19.294 0 L 15.592 7.021 C 15.018 8.11 13.585 8.992 12.392 8.992 L 10.232 8.992 Z' fill='rgb(0, 0, 0)'/></svg>")`,
        opacity: 1,
      }}
      className="size-8 rounded-lg p-5 bg-[#FFF42B]"
    />
  </div>
);
