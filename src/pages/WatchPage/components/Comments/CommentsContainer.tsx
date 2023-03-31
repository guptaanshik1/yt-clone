import { Flex } from "@chakra-ui/react";
import React from "react";
import { useWatchPageContext } from "../../utils/context";
import CommentsTop from "./CommentsTop";
import DisplayComments from "./DisplayComments";
import PostComment from "./PostComment";

const CommentsContainer = () => {
  const { comments } = useWatchPageContext();
  const { totalCommentsCount, comments: allComments } = comments;
  return (
    <Flex>
      <CommentsTop />
      <PostComment />
      <DisplayComments />
    </Flex>
  );
};

export default CommentsContainer;
