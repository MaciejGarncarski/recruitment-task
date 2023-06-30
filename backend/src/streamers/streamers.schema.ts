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

export const streamerDataSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short." })
    .max(25, { message: "Name is too long." }),
  description: z
    .string()
    .min(1)
    .max(250, { message: "Description is too long." }),
  platform: platformSchema
});

export type Streamer = z.infer<typeof streamerDataSchema>;

export const getStreamersInputSchema = z.object({
  currentPage: z.coerce.number({
    invalid_type_error: "Invalid type of currentPage query"
  })
});

export type GetStreamersInput = z.infer<typeof getStreamersInputSchema>;

export const getSingleStreamerInputSchema = z.object({
  streamerId: z.coerce
    .number({ invalid_type_error: "Invalid type of streamerId param" })
    .min(1, { message: "streamerId is required" })
});

export type GetSingleStreamerInput = z.infer<
  typeof getSingleStreamerInputSchema
>;

export const voteInputSchema = z.object({
  type: z.union([z.literal("upvote"), z.literal("downvote")]),
  streamerId: z.coerce.number().min(1)
});

export type VoteInput = z.infer<typeof voteInputSchema>;

export type StreamerId = {
  streamerId: number;
};
