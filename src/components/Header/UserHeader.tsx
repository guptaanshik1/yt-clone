import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import useGetColorMode from "../../hooks/useGetColorMode";

const UserHeader = () => {
  const { isDark } = useGetColorMode();
  return (
    <Flex justifyContent={"space-between"} alignContent={"center"}>
      <Flex
        justifyContent={"center"}
        alignContent={"center"}
        textAlign={"center"}
        m={"0.4em 1em"}
        cursor={"pointer"}
      >
        <RxDotsVertical size={"20px"} />
      </Flex>
      <Flex
        border={"1px solid lightgray"}
        w={"100px"}
        p={"0.4em"}
        borderRadius={"50px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <FaRegUserCircle size={"20px"} color={"blue"} />
        <Text color={"blue"} fontSize={"14px"}>
          Sign In
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserHeader;
