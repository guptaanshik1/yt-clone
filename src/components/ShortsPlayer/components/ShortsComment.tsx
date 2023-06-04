import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { MdClose, MdOutlineSort } from "react-icons/md";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import PostComment from "./PostComment";

const ShortsComment = () => {
  const [commentValue, setCommentValue] = React.useState("");

  return (
    <Flex flexDir={"column"} h={"100%"} w={"100%"}>
      <Flex
        alignItems={"center"}
        p={"6px"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Flex w={"50%"}>
          <Text fontWeight={700} fontSize={"24px"}>
            Comments
          </Text>
        </Flex>
        <Flex w={"50%"} justifyContent={"flex-end"}>
          <MdOutlineSort size={"24px"} cursor={"pointer"} />
          <MdClose size={"24px"} cursor={"pointer"} />
        </Flex>
      </Flex>
      <PostComment />
    </Flex>
  );
};

export default ShortsComment;
