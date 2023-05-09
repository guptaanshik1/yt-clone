import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { formatViewCount } from "../../../../utils/viewCountFormatter";
import { useWatchPageContext } from "../../utils/context";

const CommentsTop = () => {
  const { comments } = useWatchPageContext();
  return (
    <Flex alignItems={"center"}>
      <Text mr={"20px"} fontWeight={500} fontSize={"18px"}>
        {formatViewCount(comments?.totalCommentsCount)} Comments
      </Text>
      <Flex cursor={"pointer"}>
        <MdOutlineSort size={"24px"} />
        <Text fontSize={"14px"} fontWeight={500} alignSelf={"center"}>
          Sort By
        </Text>
      </Flex>
    </Flex>
  );
};

export default CommentsTop;
