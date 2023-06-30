import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

import { useInfiniteStreamers } from "@/hooks/use-infinite-streamers";
import { socket, SOCKET_LIST_MSG } from "@/utils/socket";

export const useStreamerList = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const { data, hasNextPage, isLoading, isError } = useInfiniteStreamers();
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on(SOCKET_LIST_MSG, () => {
      queryClient.invalidateQueries(["streamer list"]);
    });
  }, [queryClient]);

  return { data, isLoading, isError, listRef };
};
