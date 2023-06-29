import { Prisma } from "@prisma/client";
import type { Request, Response } from "express";

import { getSingleStreamerInputSchema } from "./single-streamer.schema";
import { getStreamer } from "./single-streamer.service";
import { httpCodes } from "../consts/http-codes";
import { getZodErrorMessage } from "../utils/error";

export const getSingleStreamerHandler = async (
  { params }: Request,
  res: Response
) => {
  const requestData = getSingleStreamerInputSchema.safeParse(params);

  if (!requestData.success) {
    return res
      .status(httpCodes.BAD_REQUEST)
      .send(`Cannot get streamer data ${getZodErrorMessage(requestData)}`);
  }

  try {
    const streamerData = await getStreamer({
      streamerId: requestData.data.streamerId
    });
    return res.status(httpCodes.SUCCESS).send(streamerData);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return res
          .status(httpCodes.NOT_FOUND)
          .send(`Streamer with id=${requestData.data.streamerId} not found.`);
      }
    }

    return res.status(httpCodes.BAD_REQUEST).send("Bad request.");
  }
};
