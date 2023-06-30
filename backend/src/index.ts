import cors from "cors";
import dotenv from "dotenv";
import type { Express } from "express";
import express from "express";
import helmet from "helmet";
import { Server } from "socket.io";

import { singleStreamerRouter } from "./single-streamer/single-streamer.route";
import { streamersRouter } from "./streamers/streamers.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(helmet());
app.use(
  cors({
    origin: "*"
  })
);
app.use(express.json());

app.use("/streamers", streamersRouter);
app.use("/streamer", singleStreamerRouter);

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

const io = new Server(server);

app.set("io", io);
