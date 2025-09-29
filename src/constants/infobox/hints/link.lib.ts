import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Welcome to MLink Playground 🚀, I know this playground is looks totally different compared to others. No controllers, no config... But in fact, all the MP components are being used here!",
  "This playground is actually stands for showcasing the real capacity of the MP seemlesly.",
  "It's worth to mention that this playground is a special case of MLink and not practical. It's just for showcasing purposes only. This component is still in BETA.",
  "MLink enables you to create exit animations during route changes by reversing the other controller mounted MP components. So, if you're already using any other MP components inside the next page then you will also have enter animations as well.",
  "There is a trick of the MLink that either you can directly call 'onReverse' into 'useAnimationController()' hook which is ideal for advanced animation controlling or you can use trigger functionality to handle your exit animations.",
] as const satisfies InfoboxHintLibProps;
