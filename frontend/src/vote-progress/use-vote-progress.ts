import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useAddVote } from "@/hooks/use-add-vote";
import { socket, SOCKET_VOTE_MSG } from "@/utils/socket";

type VoteProgress = {
  upVotes: number;
  downVotes: number;
  streamerId: number;
};

export const useVoteProgress = ({
  upVotes,
  downVotes,
  streamerId
}: VoteProgress) => {
  const queryClient = useQueryClient();
  const { mutate } = useAddVote();
  const handleUpVote = () => mutate({ streamerId, type: "upvote" });
  const handleDownVote = () => mutate({ streamerId, type: "downvote" });

  const voteSum = upVotes + downVotes;
  const progress = ((upVotes || 1) / (voteSum || 2)) * 100;
  const progressWithPercent = `${progress}%`;

  useEffect(() => {
    socket.on(SOCKET_VOTE_MSG, (val) => {
      if (typeof val !== "number") {
        return;
      }
      queryClient.invalidateQueries(["streamer", val]);
    });
  }, [queryClient]);

  return { handleDownVote, handleUpVote, progressWithPercent, progress };
};
