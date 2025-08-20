import { SelectIconProps } from "@/interfaces/@types-components";
import { FC } from "react";

const SelectIcon: FC<SelectIconProps> = ({ name }) => {
  const base = "h-5 w-5 flex-shrink-0";

  switch (name) {
    case "Home":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Explore":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.5 17.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "Notifications":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M15 17H9a3 3 0 0 1-3-3V10a6 6 0 0 1 12 0v4a3 3 0 0 1-3 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.73 21a2 2 0 0 1-3.46 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "Messages":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "Bookmarks":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 2h12v20l-6-4-6 4V2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "Lists":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "Profile":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "More":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 6v.01M12 12v.01M12 18v.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "Twitter":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-2.2.95-3.47 1.2A4.48 4.48 0 0 0 11 6v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    default:
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

export default SelectIcon;
