import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeSidebar, openSidebar } from "../../features/sidebarSlice";
import useScreenSize from "../../hooks/useScreenSize";
import CommentsContainer from "./components/Comments/CommentsContainer";
import VideoDetails from "./components/VideoDetails";
import VideoPlayer from "./components/VideoPlayer";
import Container from "./components/VideoRelatedContent/Container";
import { useWatchPageContext } from "./utils/context";

export default function WatchPageView() {
  const { isVideoDetailsLoading } = useWatchPageContext();
  const dispatch = useAppDispatch();
  const { isLargeScreen } = useScreenSize();
  React.useEffect(() => {
    dispatch(closeSidebar());

    return () => {
      dispatch(openSidebar());
    };
  }, []);

  return (
    <Flex flexDir={isLargeScreen ? "row" : "column"}>
      <Flex flexDir={"column"}>
        <VideoPlayer />
        {!isVideoDetailsLoading && <VideoDetails />}
        <Divider w={"95%"} my={"10px"} mx={"20px"} />
        {!isLargeScreen && <Container />}
        <CommentsContainer />
      </Flex>
      {isLargeScreen && (
        <Flex flexDir={"column"} mt={"20px"} w={"100%"} mr={"10px"}>
          {/* For video related content */}
          <Container />
        </Flex>
      )}
    </Flex>
  );
}
