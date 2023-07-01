import { z } from "zod";

import { platformSchema } from "@/components/streamer-form/streamer-form.data";

const streamerListSchema = z.object({
  streamer_id: z.number(),
  name: z.string(),
  platform: platformSchema
});

export const streamersResponseSchema = z.object({
  streamersData: z.array(streamerListSchema),
  maxPages: z.number(),
  streamersCount: z.number(),
  currentPage: z.number()
});
