import { z } from "zod";

export const streamerDataSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short." })
    .max(25, { message: "Name is too long." }),
  description: z
    .string()
    .min(0)
    .max(250, { message: "Description is too long." }),
  platform: z.union([
    z.literal("youtube"),
    z.literal("twitch"),
    z.literal("kick"),
    z.literal("rumble"),
    z.literal("tiktok")
  ])
});

export type Streamer = z.infer<typeof streamerDataSchema>;

export const getStreamersInputSchema = z.object({
  currentPage: z.coerce
    .number()
    .min(1, { message: "currentPage param is required" })
});

export type GetStreamersInput = z.infer<typeof getStreamersInputSchema>;
