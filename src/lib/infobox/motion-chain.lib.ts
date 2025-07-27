import { MotionChainLibProps } from "@/interfaces";

export default [
  "Welcome to Motion Chain Playground 🚀, here you will get useful insights about Motion Chain and of course the playground.",
  "Motion Chain — as the name implies is a component that allows you to create a sequence of animations and trailing functionalities for your React Components.",
  "In this playground, you might see 30 circles all related with each other to create a sequenced animation.",
  "If you'd like to see more about Motion Chain, please switch to 'View' tab and check out the syntax.",
  "Motion Chain wraps the child components itself then creates chained animations depending on the given animation mode.",
  "Motion Chain strictly requires an array of children otherwise it won't work and warns you with 'getErrorLog()' function which comes under the hood.",
  "Motion Chain provides you with a set of useful props to control and centralize the animation process. You can check out the 'View' tab for more details.",
  "Do not use bunch of 'MotionContainer' to create sequenced animations by manually configuring each component. Instead, use 'MotionChain' and let the Motion engine decide 'when—to—animate' ",
] satisfies MotionChainLibProps;
