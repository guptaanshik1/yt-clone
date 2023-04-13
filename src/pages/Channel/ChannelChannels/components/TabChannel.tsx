import { Flex, IconButton, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { useChannelChannelsContext } from "../utils/context";
import ChannelChannelsFilter from "./ChannelChannelsFilter";

const TabChannel = () => {
  const { selectedChannelFilter } = useChannelChannelsContext();
  return (
    <Flex flexDir={"column"} mt={"14px"}>
      <Menu>
        <MenuButton
          as={IconButton}
          background="none"
          px={2}
          _focus={{}}
          _hover={{}}
          _active={{
            borderRadius: "full",
          }}
        >
          <Flex
            flexDir={"row"}
            border={"1px solid black"}
            w={"200px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            lineHeight={"20px"}
            p={"10px"}
          >
            <Text fontSize={"18px"} fontWeight={300}>
              {selectedChannelFilter?.title}
            </Text>
            <HiChevronDown size={"22px"} />
          </Flex>
        </MenuButton>
        <ChannelChannelsFilter />
      </Menu>
    </Flex>
  );
};

export default TabChannel;
