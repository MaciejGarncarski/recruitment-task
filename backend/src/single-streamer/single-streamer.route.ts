import express from "express";

import { getSingleStreamerHandler } from "./single-streamer.controller";

export const singleStreamerRouter = express.Router();

singleStreamerRouter.get("/:streamerId", getSingleStreamerHandler);
