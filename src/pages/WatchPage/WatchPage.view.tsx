import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeSidebar, openSidebar } from "../../features/sidebarSlice";
import CommentsContainer from "./components/Comments/CommentsContainer";
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
    <Flex>
      <Flex flexDir={"column"}>
        <VideoPlayer />
        <VideoDetails />
        <Divider w={"95%"} my={"10px"} mx={"20px"} />
        <CommentsContainer />
      </Flex>
      <Flex flexDir={"column"} mt={"20px"} w={"100%"} mr={"10px"}>
        <Container />
      </Flex>
    </Flex>
  );
}
