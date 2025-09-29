import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Welcome to MMovie Playground 🎞️ — use this to build image carousels with enter/exit animations and timed crossfades.",
  "MMovie requires a non-empty 'images' array. If 'images' prop is empty or not an array the component will return the 'fallback' (and log an error then you can track).",
  "Always provide non-empty 'enter' and 'exit' animation arrays (AnimationKeys). MMovie picks from those arrays to drive each image transition.",
  "Make sure 'animationDuration' is reasonably larger than the transition 'duration' to avoid choppy playback. A good starting guideline is 'animationDuration >= duration * 2' for smooth in/out cycles.",
  "Images are automatically preloaded for smoother playback, but large or high-resolution sets increase memory and bandwidth. Prefer optimized sizes and modern formats (WebP/AVIF).",
  "Use the 'controller' (if provided) to pause, resume, or programmatically advance the sequence. This is useful for user interactions or synching with other UI elements.",
  "Leverage 'pieces', 'delayLogic', and 'fn' for creative sequencing (mosaic reveals, staggered transitions, custom timing). Test combinations on mobile — complex splits can be expensive.",
  "Provide a 'fallback' component for cases when images fail to load or validation fails (keeps your UI resilient and prevents empty states)",
  "To restart or re-sync the loop, update the component 'key' or the 'images' array (or use the controller). Changing those will reset internal timers and animation state.",
] as const satisfies InfoboxHintLibProps;
