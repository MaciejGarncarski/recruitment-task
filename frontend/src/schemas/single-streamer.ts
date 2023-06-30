import { z } from "zod";

import { platformSchema } from "@/components/streamer-form/use-streamer-form";

export const getSingleStreamerInputSchema = z.object({
  streamerId: z.coerce
    .number({ invalid_type_error: "Invalid type of streamerId param" })
    .min(1, { message: "streamerId is required" })
});

export type GetSingleStreamerInput = z.infer<
  typeof getSingleStreamerInputSchema
>;

export const singleStreamerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short." })
    .max(25, { message: "Name is too long." }),
  description: z
    .string()
    .min(0)
    .max(250, { message: "Description is too long." }),
  platform: platformSchema
});

export type SingleStreamer = z.infer<typeof singleStreamerSchema>;

export const singleStreamerResponseSchema = z.object({
  downVotes: z.number(),
  upVotes: z.number(),
  streamerData: singleStreamerSchema
});

export type SingleStreamerResponse = z.infer<
  typeof singleStreamerResponseSchema
>;
