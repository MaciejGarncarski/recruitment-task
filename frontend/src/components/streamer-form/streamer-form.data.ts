import type { Variants } from "framer-motion";
import { z } from "zod";

export const platformSchema = z.union([
  z.literal("YouTube", {
    errorMap: () => ({ message: "Please choose platform" })
  }),
  z.literal("Twitch"),
  z.literal("Kick"),
  z.literal("Rumble"),
  z.literal("TikTok")
]);

export type Platform = z.infer<typeof platformSchema>;

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short" })
    .max(30, { message: "Name is too long" }),
  description: z
    .string()
    .min(1, { message: "Description is too short" })
    .max(250, { message: "Description is too long" }),
  platform: platformSchema
});

export type FormValues = z.infer<typeof formSchema>;

export const variants: Variants = {
  hidden: {
    opacity: 0,
    top: "60%"
  },
  exit: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    top: "50%"
  }
};

export const dropdownData = [
  { value: "Twitch", text: "Twitch" },
  { value: "YouTube", text: "YouTube" },
  { value: "TikTok", text: "TikTok" },
  { value: "Kick", text: "Kick" },
  { value: "Rumble", text: "Rumble" }
];
