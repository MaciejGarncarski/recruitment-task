import { useQueryClient } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { useEffect } from "react";

import { useAddVote } from "@/hooks/use-add-vote";
import { QUERY_STREAMER } from "@/utils/query-keys";
import { socket, SOCKET_VOTE_MSG } from "@/utils/socket";

type VoteProgress = {
  upVotes: number;
  downVotes: number;
  streamerId: number;
};

const VOTE_DEBOUNCE_TIMEOUT = 400;

export const useVoteProgress = ({
  upVotes,
  downVotes,
  streamerId
}: VoteProgress) => {
  const queryClient = useQueryClient();
  const { mutate } = useAddVote();

  const handleUpVote = debounce(
    () => mutate({ streamerId, type: "upvote" }),
    VOTE_DEBOUNCE_TIMEOUT
  );

  const handleDownVote = debounce(
    () => mutate({ streamerId, type: "downvote" }),
    VOTE_DEBOUNCE_TIMEOUT
  );

  const voteSum = upVotes + downVotes;
  const progress = ((upVotes || 1) / (voteSum || 2)) * 100;
  const progressWithPercent = `${progress}%`;

  useEffect(() => {
    const onVoteMessage = (id: unknown) => {
      if (typeof id !== "number") {
        return;
      }
      queryClient.invalidateQueries([QUERY_STREAMER, id]);
    };

    socket.on(SOCKET_VOTE_MSG, onVoteMessage);

    return () => {
      socket.off(SOCKET_VOTE_MSG, onVoteMessage);
    };
  }, [queryClient]);

  return {
    handleDownVote,
    handleUpVote,
    progressWithPercent,
    progress
  };
};
