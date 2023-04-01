import { Flex } from "@chakra-ui/react";
import React from "react";
import { useWatchPageContext } from "../../utils/context";
import CommentsTop from "./CommentsTop";
import DisplayComments from "./DisplayComments";
import PostComment from "./PostComment";

const CommentsContainer = () => {
  return (
    <Flex flexDir={"column"} w={"900px"} mx={"20px"}>
      <CommentsTop />
      <PostComment />
      <DisplayComments />
    </Flex>
  );
};

export default CommentsContainer;
