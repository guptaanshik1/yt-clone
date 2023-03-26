import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeSidebar, openSidebar } from "../../features/sidebarSlice";
import VideoPlayer from "./components/VideoPlayer";

export default function WatchPageView() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(closeSidebar());

    return () => {
      dispatch(openSidebar());
    };
  }, []);

  return (
    <>
      <VideoPlayer />
    </>
  );
}
