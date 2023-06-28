import { z } from "zod";

export const getSingleStreamerInputSchema = z.object({
  streamerId: z.coerce.number().min(1, { message: "streamerId is required" })
});

export type GetSingleStreamerInput = z.infer<
  typeof getSingleStreamerInputSchema
>;
