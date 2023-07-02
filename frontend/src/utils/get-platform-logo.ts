import type { Platform } from "@/components/streamer-form/streamer-form.data";

const logos: Record<Platform, string> = {
  Kick: "/logos/kick.svg",
  TikTok: "/logos/tiktok.svg",
  Twitch: "/logos/twitch.svg",
  YouTube: "/logos/youtube.svg",
  Rumble: "/logos/rumble.svg"
};

export const getPlatformLogo = (platform: Platform) => logos[platform];
