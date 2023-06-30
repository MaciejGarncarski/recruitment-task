import { useMutation } from "@tanstack/react-query";

import type { VoteInput } from "@/schemas/vote";
import { addVote } from "@/services/add-vote";

export const useAddVote = () => {
  return useMutation({
    mutationFn: (voteData: VoteInput) => addVote(voteData)
  });
};
