import type { VoteInput } from "./streamers.schema";
import { type GetStreamersInput, type Streamer } from "./streamers.schema";
import { STREAMER_NOT_FOUND } from "../consts/error-messages";
import { db } from "../db";

export const createNewStreamer = async ({
  name,
  description,
  platform
}: Streamer) => {
  await db.streamer.create({
    data: {
      description,
      name,
      platform
    }
  });
};

const STREAMERS_PER_PAGE = 10;

export const getStreamersList = async ({ currentPage }: GetStreamersInput) => {
  const streamersCount = await db.streamer.count();
  const maxPages = Math.ceil(streamersCount / STREAMERS_PER_PAGE);
  const streamersData = await db.streamer.findMany({
    skip: (currentPage - 1) * STREAMERS_PER_PAGE,
    take: STREAMERS_PER_PAGE,
    select: {
      name: true,
      platform: true,
      streamer_id: true
    },
    orderBy: { streamer_id: "desc" }
  });

  return {
    streamersData,
    maxPages,
    streamersCount,
    currentPage
  };
};

export const createVote = async ({ streamerId, type }: VoteInput) => {
  const streamerExists = await db.streamer.findFirst({
    where: { streamer_id: streamerId }
  });

  if (!streamerExists) {
    throw new Error(STREAMER_NOT_FOUND);
  }

  return db.vote.create({
    data: {
      type,
      streamer_id: streamerId
    }
  });
};
