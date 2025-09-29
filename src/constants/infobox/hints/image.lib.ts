import { InfoboxHintLibProps } from "@/interfaces/@types-constants";

export default [
  "Welcome to MImage Playground 🚀, here you will explore the dynamic capabilities of Motion Image and the playground.",
  "Motion Image is a component that allows you to animate images by dividing them into pieces and animating each seamlessly, ofc — based on your config.",
  "For more insights on Motion Image, switch to the 'View' tab to see syntax examples.",
  "You might also want to add a functionality to trigger the animation by 'clicking' or 'hovering' the image itself.",
  "Ensure providing a string image URL otherwise MP will show nothing and throw an error for troubleshooting.",
  "Motion Image leverages the image fragmentation algorithm by dividing the image into pieces and animating them in sequence.",
  "Features include multiple predefined animation modes and transitions for diverse image effects.",
  "Pass a placeholder JSX gracefully to enhance UX before the image loads.",
  "We recommend using 'sinosoidal' or relevant delay algorithm for sophisticated animation effects.",
] as const satisfies InfoboxHintLibProps;
