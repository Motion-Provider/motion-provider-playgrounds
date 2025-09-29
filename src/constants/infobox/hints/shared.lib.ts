﻿import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Use controllers below inside the dock nav in order to control the playground. Each MP component leverages controlling mechanism from the power of 'useAnimationControl' hook.",
  "Whenever you roll a dice, you're simply adding a random animation(s) to the current component among 69+ predefined animations.",
  "Complexity adjusts the next random animation array size.",
  "Each animation you have added will add a new animation instance into the 'mode' prop array and meanwhile you run all-in-once.",
  "You can configure the entire animation set such as duration, delay, config... etc.",
  "You can literally configure your dream animation in seconds using the controller dock below.",
  "Preview the animation you might feel comfortable with by hovering before you select it inside the configuration section.",
  "Use 'TAB' to make lightning—fast switch between the tools. You can control everything on this page by just pressing 'TAB'.",
  "Abiding by the fundamental laws of CSS, kindly never use 'transition-*' classnames in any of parent/child provider components that would transgress the tailwind class rules.",
] as const satisfies InfoboxHintLibProps;
