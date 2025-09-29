import { MotionCardItem } from "@/interfaces/@types-components";

export default [
  {
    id: 1,
    desc: "Animate everything.",
    title: "Motion Container",
    img: "/assets/motion-container.webp",
  },
  {
    id: 2,
    title: "Motion Chain",
    desc: "Create sequenced animations and trailing functionalities for your components.",
    img: "/assets/motion-chain.webp",
  },
  {
    id: 3,
    title: "Motion Image",
    desc: "Integrate algorithmic piecewise motion animations to your brand new images.",
    img: "/assets/motion-image.webp",
  },
  {
    id: 4,
    title: "Motion Text",
    desc: "Divide your text into pieces with 2 different mode options and animate seemlessly.",
    img: "/assets/motion-text.webp",
  },
  {
    id: 5,
    title: "Motion Movie",
    desc: "Image slideshow. Transitions between images using enter and exit piecewise animations.",
    img: "/assets/motion-movie.webp",
  },
  {
    id: 6,
    title: "Motion Link",
    desc: "Create single thread level or component level layout exit animations.",
    img: "/assets/motion-link.webp",
  },
] as const satisfies MotionCardItem[];
