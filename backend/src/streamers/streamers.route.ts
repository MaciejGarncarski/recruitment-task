import express from "express";

import {
  createStreamerHandler,
  getStreamersListHandler
} from "./streamers.controller";

export const streamersRouter = express.Router();

streamersRouter.post("/", createStreamerHandler);
streamersRouter.get("/", getStreamersListHandler);
streamersRouter.get("/:streamerId/vote", createStreamerHandler);
