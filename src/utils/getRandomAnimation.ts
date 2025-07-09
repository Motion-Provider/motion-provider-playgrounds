import animations from "@/motion/lib/animate.lib";
import { AnimationKeys } from "@/motion/types";

export default function getRandomAnimation(count: number): AnimationKeys[] {
  if (count <= 0) return [];

  let animationArr = [] as AnimationKeys[];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(
      Math.random() * Object.keys(animations).length
    );
    animationArr.push(Object.keys(animations)[randomIndex] as AnimationKeys);
  }

  return animationArr;
}
