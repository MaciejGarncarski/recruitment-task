import { useQuery } from "@tanstack/react-query";

import type { GetSingleStreamerInput } from "@/schemas/single-streamer";
import { getSingleStreamer } from "@/services/get-single-streamer.service";
import { QUERY_STREAMER } from "@/utils/query-keys";

export const useSingleStreamer = ({ streamerId }: GetSingleStreamerInput) => {
  return useQuery({
    queryKey: [QUERY_STREAMER, streamerId],
    queryFn: () => getSingleStreamer({ streamerId })
  });
};
