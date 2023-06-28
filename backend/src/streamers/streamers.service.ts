import type { GetStreamersInput, Streamer } from "./streamers.schema";
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
    skip: currentPage * STREAMERS_PER_PAGE,
    take: STREAMERS_PER_PAGE
  });

  return {
    streamersData,
    maxPages,
    streamersCount
  };
};
