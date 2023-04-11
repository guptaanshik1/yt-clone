import { Flex, IconButton, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import { MdSort } from "react-icons/md";
import PlaylistsMenu from "./PlaylistsMenu";

const PlaylistsTabs = () => {

  return (
    <Flex w={"100%"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        border={"1px solid blue"}
        w={"100%"}
        mt={"12px"}
      >
        <Text fontSize={"18px"} fontWeight={300}>
          Created Playlists
        </Text>
        <Menu>
          <MenuButton
            as={IconButton}
            background="none"
            px={2}
            _focus={{}}
            _hover={{ background: "grey", rounded: true, borderRadius: "full" }}
            _active={{
              borderRadius: "full",
            }}
          >
            <Flex border={"1px solid red"} w={"100px"} alignItems={"center"}>
              <MdSort size={"24px"} />
              <Text fontSize={"14px"} fontWeight={600} ml={"4px"}>
                Sort By
              </Text>
            </Flex>
          </MenuButton>
          <PlaylistsMenu />
        </Menu>
      </Flex>
    </Flex>
  );
};

export default PlaylistsTabs;
