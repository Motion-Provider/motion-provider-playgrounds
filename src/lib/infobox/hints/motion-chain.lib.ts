import { InfoboxHintLibProps } from "@/interfaces/@types-lib";

export default [
  "Welcome to Motion Chain Playground 🚀, here you will get useful insights about Motion Chain and of course the playground.",
  "Motion Chain — as the name implies is a component that allows you to create a sequence of animations and trailing functionalities for your React Components.",
  "In this playground, you might see 30 circles all chained to create a sequence. Go on, play with it using the buttons below!",
  "If you'd like to see more about Motion Chain, please switch to 'View' tab and check how the syntax looks.",
  "Motion Chain wraps the child components itself then creates chained animations depending on the configuration.",
  "Notice that it's strictly requires an array of children otherwise it won't work and warns you with 'getErrorLog()' function which comes under the hood.",
  "Motion Chain provides a set of useful props to control and centralize the animation process. You can check out the 'Learn' tab for more details.",
  "Comes with 16 predefined delay algorithms (linear,exponential,sinusoidal..+13)",
  "Automatic child-animation matching: MP always will match the queued animation config with the closest child component in the given array and eventually animate it in sequence.",
] as const satisfies InfoboxHintLibProps;
