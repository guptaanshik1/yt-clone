import { Flex, ResponsiveValue } from "@chakra-ui/react";
import React from "react";
import useScreenSize from "../../../../hooks/useScreenSize";
import { useWatchPageContext } from "../../utils/context";
import CommentsTop from "./CommentsTop";
import DisplayComments from "./DisplayComments";
import PostComment from "./PostComment";

const CommentsContainer = () => {
  const { isLargeScreen, isSmallScreen, isMediumScreen } = useScreenSize();
  const checkWidth = (): ResponsiveValue<number | (string & {})> => {
    if (isSmallScreen) {
      return "96%";
    } else if (isMediumScreen) {
      return "96%";
    } else {
      return "900px";
    }
  };

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
