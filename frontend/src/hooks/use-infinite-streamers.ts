import { useInfiniteQuery } from "@tanstack/react-query";

import { getStreamers } from "@/services/get-streamers";
import { QUERY_STREAMER_LIST } from "@/utils/query-keys";

export const useInfiniteStreamers = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_STREAMER_LIST],
    queryFn: ({ pageParam = 1 }) => {
      return getStreamers({ currentPage: pageParam });
    },
    getNextPageParam: ({ currentPage, maxPages }) => {
      if (maxPages === currentPage) {
        return;
      }

      return currentPage + 1;
    }
  });
};
