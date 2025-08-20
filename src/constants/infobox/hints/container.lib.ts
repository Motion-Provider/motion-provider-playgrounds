import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Welcome to Motion Container Playground 🚀, literally the root of every MP component!",
  "Motion Container is a MP component that allows you to animate any React component by providing a set of predefined animations and transitions.",
  "For more insights on Motion Container, switch to the 'View' tab to see syntax examples.",
  "You might also want to add a functionality to trigger the animation by 'clicking' or 'hovering' the component it's as simple as playing with a toy — just add an event handler.",
  "Ensure providing a valid JSX for optimal results otherwise MP will show nothing and throw an error with 'getErrorLog()' for troubleshooting.",
  "Features include multiple predefined animation modes and transitions for diverse animation effects.",
  "Pass a valid JSX to enhance UX.",
] as const satisfies InfoboxHintLibProps;
