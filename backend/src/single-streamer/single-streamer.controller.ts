import { Prisma } from "@prisma/client";
import type { Request, Response } from "express";

import { getSingleStreamerInputSchema } from "./single-streamer.schema";
import { getStreamer } from "./single-streamer.service";

export const getSingleStreamerHandler = async (
  { params }: Request,
  res: Response
) => {
  const requestData = getSingleStreamerInputSchema.safeParse(params);

  if (!requestData.success) {
    return res
      .status(400)
      .send(`Cannot get streamer data ${requestData.error.issues[0].message}`);
  }

  try {
    const streamerData = await getStreamer({
      streamerId: requestData.data.streamerId
    });
    return res.status(200).send(streamerData);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return res
          .status(404)
          .send(`Streamer with id=${requestData.data.streamerId} not found.`);
      }
    }
    return res.status(400).send("Bad request.");
  }
};
