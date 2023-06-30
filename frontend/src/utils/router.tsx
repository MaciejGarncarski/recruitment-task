import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/routes/layout";
import { Root } from "@/routes/root";
import { StreamerRecordPage } from "@/routes/streamer-record-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <Root /> },
      {
        path: "streamer/:streamerId",
        element: <StreamerRecordPage />
      }
    ]
  }
]);
