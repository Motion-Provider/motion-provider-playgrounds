import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Welcome to MText Playground 🚀, here you will explore the dynamic capabilities of Motion Text and the playground.",
  "Motion Text allows you to divide your text into pieces and animate them seamlessly with two different mode options — 'chars' or 'words'.",
  "In this playground, experiment with text animations using the controls below!",
  "For more insights on Motion Text, switch to the 'View' tab to see syntax examples.",
  "Motion Text automatically manages child components, applying animations based on your configuration.",
  "Ensure providing a string of text segments for optimal results otherwise Motion Provider will throw an error with 'getErrorLog()' for troubleshooting.",
  "Motion Text offers a variety of props to fine-tune and centralize your animation process.",
  "Features include multiple predefined animation modes and transitions for diverse text effects.",
  "Automatic text-animation sync: Motion Text aligns animation configurations with text segments to animate them in sequence.",
  "We recommend using 'linear' or relevant delay algorithm for sophisticated animation effects.",
  "Notice that updating the 'key' property will restart the animation process from the beginning.",
] as const satisfies InfoboxHintLibProps;
