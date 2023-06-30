import { io } from "socket.io-client";

export const socket = io("http://localhost:8080/", {
  transports: ["websocket"]
});

export const SOCKET_LIST_MSG = "streamer list";
export const SOCKET_VOTE_MSG = "vote";
