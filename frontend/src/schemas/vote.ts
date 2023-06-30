import { z } from "zod";

export const voteSchema = z.union([z.literal("upvote"), z.literal("downvote")]);

export type Vote = z.infer<typeof voteSchema>;

export const voteInputSchema = z.object({
  type: voteSchema,
  streamerId: z.number()
});

export type VoteInput = z.infer<typeof voteInputSchema>;
