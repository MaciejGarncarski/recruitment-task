import { apiClient } from "@/api-client/api-client";
import { streamersResponseSchema } from "@/schemas/streamers";

type CurrentPage = {
  currentPage: number;
};

export const getStreamers = async ({ currentPage }: CurrentPage) => {
  const { data } = await apiClient.get(`/streamers?currentPage=${currentPage}`);

  const response = streamersResponseSchema.safeParse(data);
  if (!response.success) {
    throw new Error(response.error.message);
  }

  return response.data;
};
