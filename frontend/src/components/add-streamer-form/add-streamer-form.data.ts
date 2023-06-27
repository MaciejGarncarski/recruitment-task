import type { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: {
    opacity: 0,
    top: -100
  },
  exit: {
    opacity: 0,
    top: 100
  },
  visible: {
    opacity: 1,
    top: "50%"
  }
};

export const dropdownData = [
  { value: "twitch", text: "Twitch" },
  { value: "youtube", text: "YouTube" },
  { value: "tiktok", text: "TikTok" },
  { value: "kick", text: "Kick" },
  { value: "rumble", text: "Rumble" }
];
