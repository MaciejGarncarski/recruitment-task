import express from "express";

import {
  createStreamerHandler,
  getStreamersListHandler,
  rateLimitAddStreamer,
  rateLimitAddVote,
  voteHandler
} from "./streamers.controller";

export const streamersRouter = express.Router();

streamersRouter.post("/", rateLimitAddStreamer, createStreamerHandler);
streamersRouter.get("/", getStreamersListHandler);
streamersRouter.put("/:streamerId/vote", rateLimitAddVote, voteHandler);
