import { Flex, ResponsiveValue, Skeleton } from "@chakra-ui/react";
import React from "react";
import useScreenSize from "../../../../hooks/useScreenSize";
import { useWatchPageContext } from "../../utils/context";
import CommentsTop from "./CommentsTop";
import DisplayComments from "./DisplayComments";
import PostComment from "./PostComment";

const CommentsContainer = () => {
  const { isLargeScreen, isSmallScreen, isMediumScreen } = useScreenSize();
  const { isCommentsLoading } = useWatchPageContext();
  const checkWidth = (): ResponsiveValue<number | (string & {})> => {
    if (isSmallScreen) {
      return "96%";
    } else if (isMediumScreen) {
      return "96%";
    } else {
      return "900px";
    }
  };

  if (isCommentsLoading) {
    return Array.from({ length: 9 }, (x, id) => {
      return (
        <Flex m={"40px 80px"} flexWrap={"wrap"} h={"100px"}>
          <Skeleton p={"2px 8px"} w={"100%"} key={id} />
        </Flex>
      );
    });
  }

  return (
    <Flex
      flexDir={"column"}
      w={checkWidth()}
      mx={isLargeScreen ? "20px" : "10px"}
      my={isLargeScreen ? "0" : "10px"}
    >
      <CommentsTop />
      <PostComment />
      <DisplayComments />
    </Flex>
  );
};

export default CommentsContainer;
