import { Outlet } from "react-router-dom";

import { AddStreamer } from "@/components/add-streamer/add-streamer";
import { Header } from "@/components/header/header";

export const Root = () => {
  return (
    <>
      <Header />
      <AddStreamer />
      <Outlet />
    </>
  );
};
