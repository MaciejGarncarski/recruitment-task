import { useInfiniteQuery } from "@tanstack/react-query";

import { getStreamers } from "@/services/get-streamers";

export const useInfiniteStreamers = () => {
  return useInfiniteQuery({
    queryKey: ["streamer list"],
    queryFn: ({ pageParam = 1 }) => getStreamers({ currentPage: pageParam }),
    getNextPageParam: ({ currentPage, maxPages }) => currentPage < maxPages
  });
};
