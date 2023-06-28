import type { GetSingleStreamerInput } from "./single-streamer.schema";
import { db } from "../db";

export const getStreamer = ({ streamerId }: GetSingleStreamerInput) => {
  return db.streamer.findFirstOrThrow({
    where: {
      streamer_id: streamerId
    }
  });
};
