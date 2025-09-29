import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Welcome to MChain Playground 🚀, here you will get useful insights about Motion Chain and of course the playground.",
  "Motion Chain — as the name implies is a wrapper component that allows you to create a sequence of animations and trailing functionalities.",
  "In this playground, you might see 30 circles all chained in order to create a sequence. Go on, play with it using the buttons below!",
  "If you'd like to see more about MChain, switch to 'Syntax' tab and check how the syntax looks.",
  "MChain wraps the child components then implements the provided animation to each given child component subsequently.",
  "Notice that it's strictly requires an array of children otherwise it won't work and warns you with 'getErrorLog()' function which comes under the hood.",
  "MChain provides a set of useful props to control and centralize the animation process.",
  "Comes with 20+ predefined delay algorithms (linear,exponential,sinusoidal..+14 more) for smooth and sequenced animation effects.",
  "Auto child animation matching: Always will match the queued animation config with the closest child component in the given array and eventually animate it in sequence.",
] as const satisfies InfoboxHintLibProps;
