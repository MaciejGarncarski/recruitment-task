import { useMutation } from "@tanstack/react-query";

import type { SingleStreamer } from "@/schemas/single-streamer";
import { addNewStreamer } from "@/services/add-new-streamer";

export const useAddNewStreamer = () => {
  return useMutation({
    onSuccess: () => console.log("created"),
    mutationFn: (streamerData: SingleStreamer) => addNewStreamer(streamerData)
  });
};
