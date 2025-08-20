import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Welcome to Motion Movie Playground 🎞️ — use MotionMovie to build image sequences with enter/exit animations and timed crossfades.",
  "MotionMovie requires a non-empty `images` array. If images is empty or not an array the component will return the `fallback` (and log an error).",
  "Always provide non-empty `enter` and `exit` animation arrays (AnimationKeys). MotionMovie picks from those arrays to drive each image transition.",
  "Make sure `animationDuration` is meaningfully larger than the transition `duration` — a good starting guideline is `animationDuration >= duration * 2` for smooth in/out cycles.",
  "Images are automatically preloaded for smoother playback, but large or high-resolution sets increase memory and bandwidth. Prefer optimized sizes and modern formats (WebP/AVIF) for production.",
  "Use the `controller` (if provided) to pause, resume, or programmatically advance the sequence — this is useful for user interactions or synchronizing with other UI elements.",
  "Leverage `pieces`, `delayLogic`, and `fn` for creative sequencing (mosaic reveals, staggered transitions, custom timing). Test combinations on mobile — complex splits can be expensive.",
  "Provide a `fallback` component for cases when images fail to load or validation fails — this keeps your UI resilient and prevents empty states.",
  "To restart or re-sync the loop, update the component `key` or the `images` array (or use the controller). Changing those will reset internal timers and animation state.",
  "Accessibility & perf: include semantic captions/hidden labels for screen readers, respect reduced-motion preferences where appropriate, and test on target devices to verify smooth playback.",
] as const satisfies InfoboxHintLibProps;
