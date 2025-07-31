import { InfoboxHintLibProps } from "@/interfaces/@types-lib";

export default [
  "Use controllers below inside the nav to control the circle. Each Motion Provider component leverages controlling mechanism from the power of 'useAnimationControl' hook.",
  "Whenever you roll a dice, you're simply adding a random animation(s) to the current component among 75+ predefined animations. Complexity adjusts the next random animation array size.",
  "Each animation you have added will add a new animation instance into the 'mode' prop array and meanwhile you run all—in—once.",
  "You can configure the entire animation—set such as duration, delay, animation... etc.",
  "You can literally configure your dream animation in seconds using the configuration below.",
  "Preview the animation you might feel comfortable with by hovering before you select it inside configuration.",
  "Use 'TAB' to make lightning—fast switch between the tools. You can control everything on this page by just pressing 'TAB'.",
] as const satisfies InfoboxHintLibProps;
