import { apiClient } from "@/api-client/api-client";
import type { SingleStreamer } from "@/schemas/single-streamer";

export const addNewStreamer = (streamerData: SingleStreamer) => {
  return apiClient.post("/streamers", { ...streamerData });
};
