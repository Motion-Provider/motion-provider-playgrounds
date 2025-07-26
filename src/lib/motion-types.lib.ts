import { DelayLogic, TransitionKeys } from "@/motion/types";

const delayItems = [
  "linear",
  "exponential",
  "sinusoidal",
  "custom",
  "square",
  "triangle",
  "sawtooth",
  "cosine",
  "fibonacci",
  "chaos",
  "pendulum",
  "perlin",
  "chaotic",
  "cumulative",
  "bounce",
  "spiral",
  "quantum",
] as DelayLogic[];

const transitionItems = [
  "default",
  "smooth",
  "easeIn",
  "easeOut",
  "linear",
  "cubicSmooth",
  "cubicFastStart",
  "cubicFastEnd",
  "cubicBounce",
  "cubicElastic",
  "slowSmooth",
  "slowCubic",
  "slowElastic",
  "quickEaseInOut",
  "quickBounce",
  "delayedSmooth",
  "delayedCubic",
  "delayedElastic",
  "fadeSlide",
  "fadeScale",
  "fadeRotate",
] as const as TransitionKeys[];

export { delayItems, transitionItems };
