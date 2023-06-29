import type { GetSingleStreamerInput } from "./single-streamer.schema";
import { db } from "../db";

export const getStreamer = async ({ streamerId }: GetSingleStreamerInput) => {
  const streamerData = await db.streamer.findFirstOrThrow({
    where: {
      streamer_id: streamerId
    }
  });

  const upVotes = await db.vote.count({
    where: {
      type: "upvote",
      streamer_id: streamerId
    }
  });

  const downVotes = await db.vote.count({
    where: {
      type: "upvote",
      streamer_id: streamerId
    }
  });

  return {
    streamerData,
    upVotes,
    downVotes
  };
};
