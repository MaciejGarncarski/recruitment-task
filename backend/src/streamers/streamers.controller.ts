import { Prisma } from "@prisma/client";
import type { Request, Response } from "express";
import type { Socket } from "socket.io";

import {
  getStreamersInputSchema,
  streamerDataSchema,
  voteInputSchema
} from "./streamers.schema";
import {
  createNewStreamer,
  createVote,
  getStreamersList
} from "./streamers.service";
import { ALREADY_EXISTS, STREAMER_NOT_FOUND } from "../consts/error-messages";
import { httpCodes } from "../consts/http-codes";
import { getZodErrorMessage } from "../utils/error";

export const createStreamerHandler = async (
  { body, app }: Request,
  res: Response
) => {
  const io: Socket = app.get("io");

  const requestData = streamerDataSchema.safeParse(body);

  if (!requestData.success) {
    return res
      .status(httpCodes.BAD_REQUEST)
      .send(`Cannot create. Error: ${getZodErrorMessage(requestData)}`);
  }

  try {
    await createNewStreamer(requestData.data);
    io.emit("new streamer");

    return res.status(httpCodes.RESOURCE_CREATED).send("new streamer added");
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(httpCodes.ALREADY_EXISTS).send(ALREADY_EXISTS);
      }
    }
    return res.status(httpCodes.BAD_REQUEST).send("bad request");
  }
};

export const getStreamersListHandler = async (
  { query }: Request,
  res: Response
) => {
  const requestData = getStreamersInputSchema.safeParse(query);

  if (!requestData.success) {
    return res
      .status(httpCodes.BAD_REQUEST)
      .send(
        `Cannot get streamers data. Error: ${getZodErrorMessage(requestData)}`
      );
  }

  try {
    const data = await getStreamersList({
      currentPage: requestData.data.currentPage
    });

    return res.status(httpCodes.SUCCESS).send(data);
  } catch (error) {
    return res.status(httpCodes.BAD_REQUEST).send("bad request");
  }
};

export const voteHandler = async (
  { params, query, app }: Request,
  res: Response
) => {
  const requestData = voteInputSchema.safeParse({ ...params, ...query });

  if (!requestData.success) {
    return res
      .status(httpCodes.BAD_REQUEST)
      .send(`Bad request. Error: ${getZodErrorMessage(requestData)}`);
  }

  const io: Socket = app.get("io");
  const { streamerId, type } = requestData.data;

  try {
    if (type !== "downvote" && type !== "upvote") {
      return res.status(httpCodes.BAD_REQUEST).send(`Bad request`);
    }

    await createVote({ streamerId, type });
    io.emit("vote", streamerId);

    return res
      .status(httpCodes.RESOURCE_CREATED)
      .send("vote created successfully");
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === STREAMER_NOT_FOUND) {
        return res.status(httpCodes.NOT_FOUND).send(STREAMER_NOT_FOUND);
      }
    }
    return res.status(httpCodes.BAD_REQUEST).send(`Bad request`);
  }
};
