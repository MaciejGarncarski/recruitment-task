import { createBrowserRouter } from "react-router-dom";

import { Root } from "@/routes/root";
import { StreamerRecord } from "@/routes/streamer-record";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "streamer/:streamerId",
        element: <StreamerRecord />,
      },
    ],
  },
]);
