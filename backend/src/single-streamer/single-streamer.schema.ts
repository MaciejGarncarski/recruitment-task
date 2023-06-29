import { z } from "zod";

export const getSingleStreamerInputSchema = z.object({
  streamerId: z.coerce
    .number({ invalid_type_error: "Invalid type of streamerId param" })
    .min(1, { message: "streamerId is required" })
});

export type GetSingleStreamerInput = z.infer<
  typeof getSingleStreamerInputSchema
>;
