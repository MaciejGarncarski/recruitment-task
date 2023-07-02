import { apiClient } from "@/api-client/api-client";
import {
  type GetSingleStreamerInput,
  singleStreamerResponseSchema
} from "@/schemas/single-streamer";

export const getSingleStreamer = async ({
  streamerId
}: GetSingleStreamerInput) => {
  const { data } = await apiClient.get(`/streamer/${streamerId}`);

  const response = singleStreamerResponseSchema.safeParse(data);

  if (!response.success) {
    throw new Error(response.error.message);
  }

  return response.data;
};
