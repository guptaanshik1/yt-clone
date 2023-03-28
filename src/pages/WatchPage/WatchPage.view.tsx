import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeSidebar, openSidebar } from "../../features/sidebarSlice";
import VideoDetails from "./components/VideoDetails";
import VideoPlayer from "./components/VideoPlayer";
import Container from "./components/VideoRelatedContent/Container";

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
      <VideoDetails />
      <Container />
    </>
  );
}
