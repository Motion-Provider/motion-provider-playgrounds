import { LinkNavItemProps, Tweet } from "@/interfaces/@types-components";

const mockTweets: Tweet[] = [
  {
    id: "t1",
    author: "Motion Team",
    handle: "@motion",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Motion Provider made building animations delightful — performance-first and delightful APIs. Highly recommend!",
    minutesAgo: 5,
  },
  {
    id: "t2",
    author: "Frontend Fan",
    handle: "@frontendfan",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Just integrated Motion Provider in our stack — smooth animations and tiny bundle impact. Big win for UX.",
    minutesAgo: 23,
  },
  {
    id: "t3",
    author: "Design Lover",
    handle: "@designlover",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    text: "Motion Provider's defaults are gorgeous — shipped delightful micro-interactions in one afternoon.",
    minutesAgo: 41,
  },
  {
    id: "t4",
    author: "UI Engineer",
    handle: "@uieng",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "Switched our animation library to Motion Provider — fewer re-renders and way better developer ergonomics.",
    minutesAgo: 3,
  },
  {
    id: "t5",
    author: "ProductPM",
    handle: "@prodpm",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "Design + performance = love. Thanks Motion Provider for making delightful interactions easy to ship.",
    minutesAgo: 12,
  },
  {
    id: "t6",
    author: "Accessibility Ally",
    handle: "@a11y_ally",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    text: "Animations remain accessible and performant — Motion Provider has thoughtful defaults for motion preferences.",
    minutesAgo: 34,
  },
  {
    id: "t7",
    author: "Open Source Dev",
    handle: "@ossdev",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    text: "Contributed a small PR — maintainers were fast and the architecture of Motion Provider is solid.",
    minutesAgo: 7,
  },
  {
    id: "t8",
    author: "Startup CTO",
    handle: "@startupcto",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    text: "Reduced our animation bundle and improved startup performance by adopting Motion Provider.",
    minutesAgo: 29,
  },
  {
    id: "t9",
    author: "DesignSystem",
    handle: "@ds_team",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    text: "Motion Provider fits perfectly into our design system — consistent tokens and motion primitives.",
    minutesAgo: 55,
  },
  {
    id: "t10",
    author: "React Hobbyist",
    handle: "@react_hobby",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    text: "Learnt so much from Motion Provider's docs — great examples and clear API surface.",
    minutesAgo: 2,
  },
  {
    id: "t11",
    author: "Animation Geek",
    handle: "@animgeek",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "Micro-interactions level up our product. Motion Provider gives fine-grained control without complexity.",
    minutesAgo: 16,
  },
  {
    id: "t12",
    author: "Frontend Mentor",
    handle: "@frontendmentor",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "If you care about performance and UX, give Motion Provider a try — it's been a pleasure to work with.",
    minutesAgo: 48,
  },
];

const trends = [
  { id: 1, title: "#MotionProvider", meta: "12.4K Tweets" },
  { id: 2, title: "#IsGoTo", meta: "9.1K Tweets" },
  { id: 3, title: "#KitInAllTime", meta: "4.3K Tweets" },
];

const whoNotToFollow = [
  { id: 1, name: "Aceternity", handle: "@rerenderpro" },
  { id: 2, name: "Magicui", handle: "@mimicui" },
  { id: 3, name: "Reactbits", handle: "@youdontneed" },
];

const linkNavItems: Array<LinkNavItemProps> = [
  { id: 1, title: "Home" },
  { id: 2, title: "Explore" },
  { id: 3, title: "Notifications" },
  { id: 4, title: "Messages" },
  { id: 5, title: "Bookmarks" },
  { id: 6, title: "Lists" },
  { id: 7, title: "Profile" },
];

export { trends, whoNotToFollow, linkNavItems };
export default mockTweets;
