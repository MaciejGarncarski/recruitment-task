import { Prisma } from "@prisma/client";
import type { Request, Response } from "express";

import {
  getStreamersInputSchema,
  streamerDataSchema
} from "./streamers.schema";
import { createNewStreamer, getStreamersList } from "./streamers.service";
import { ALREADY_EXISTS } from "../consts/error-messages";

export const createStreamerHandler = async (
  { body }: Request,
  res: Response
) => {
  const requestData = streamerDataSchema.safeParse(body);

  if (!requestData.success) {
    return res
      .status(400)
      .send(`Cannot create. Error: ${requestData.error.issues[0].message}`);
  }

  try {
    await createNewStreamer(requestData.data);
    return res.status(201).send("created");
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(409).send(ALREADY_EXISTS);
      }
    }
    return res.status(400).send("bad request");
  }
};

export const getStreamersListHandler = async (
  { query }: Request,
  res: Response
) => {
  const requestData = getStreamersInputSchema.safeParse(query);

  if (!requestData.success) {
    return res
      .status(400)
      .send(
        `Cannot get streamers data. Error: ${requestData.error.issues[0].message}`
      );
  }

  try {
    const data = await getStreamersList({
      currentPage: requestData.data.currentPage
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("bad request");
  }
};
