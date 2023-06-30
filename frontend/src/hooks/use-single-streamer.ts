import { useQuery } from "@tanstack/react-query";

import type { GetSingleStreamerInput } from "@/schemas/single-streamer";
import { getSingleStreamer } from "@/services/get-single-streamer.service";

export const useSingleStreamer = ({ streamerId }: GetSingleStreamerInput) => {
  return useQuery({
    queryKey: ["streamer", streamerId],
    queryFn: () => getSingleStreamer({ streamerId })
  });
};
