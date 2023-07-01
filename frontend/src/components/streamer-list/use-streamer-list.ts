import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useInfiniteStreamers } from "@/hooks/use-infinite-streamers";
import { QUERY_STREAMER_LIST } from "@/utils/query-keys";
import { socket, SOCKET_LIST_MSG } from "@/utils/socket";

export const useStreamerList = () => {
  const { ref, inView } = useInView({ rootMargin: "200px" });

  const { data, hasNextPage, isLoading, isError, fetchNextPage } =
    useInfiniteStreamers();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  useEffect(() => {
    socket.on(SOCKET_LIST_MSG, () => {
      queryClient.invalidateQueries([QUERY_STREAMER_LIST]);
    });
  }, [queryClient]);

  return { data, isLoading, isError, ref, fetchNextPage };
};
