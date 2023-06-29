import express from "express";

import {
  createStreamerHandler,
  getStreamersListHandler,
  voteHandler
} from "./streamers.controller";

export const streamersRouter = express.Router();

streamersRouter.post("/", createStreamerHandler);
streamersRouter.get("/", getStreamersListHandler);
streamersRouter.put("/:streamerId/vote", voteHandler);
