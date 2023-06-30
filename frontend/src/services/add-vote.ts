import { apiClient } from "@/apiClient/apiClient";
import type { Vote } from "@/schemas/vote";

type AddVote = {
  type: Vote;
  streamerId: number;
};

export const addVote = ({ streamerId, type }: AddVote) => {
  return apiClient.put(`/streamers/${streamerId}/vote?type=${type}`);
};
