import { Flex } from "@chakra-ui/react";
import React from "react";
import { useWatchPageContext } from "../../utils/context";
import Comment from "./Comment";

const DisplayComments = () => {
  const { comments } = useWatchPageContext();

  return (
    <Flex mt={"20px"} flexDir={"column"}>
      {
        // @ts-ignore
        comments?.map((comment) => (
          <Comment key={comment?.commentId} comment={comment} />
        ))
      }
    </Flex>
  );
};

export default DisplayComments;
