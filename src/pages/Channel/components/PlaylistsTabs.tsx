import { Flex, IconButton, Menu, MenuButton, Text } from "@chakra-ui/react";
import { MdSort } from "react-icons/md";
import { useChannelContext } from "../utils/context";
import AllPlaylists from "./AllPlaylists";
import PlaylistsMenu from "./PlaylistsMenu";

const PlaylistsTabs = () => {
  const { playlistsData } = useChannelContext();

  return (
    <Flex w={"100%"} flexDir={"column"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
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
            <Flex w={"100px"} alignItems={"center"}>
              <MdSort size={"24px"} />
              <Text fontSize={"14px"} fontWeight={600} ml={"4px"}>
                Sort By
              </Text>
            </Flex>
          </MenuButton>
          <PlaylistsMenu />
        </Menu>
      </Flex>
      {
        // @ts-ignore
        playlistsData?.map((playlist) => {
          return (
            playlist?.type === "playlist" && (
              <AllPlaylists
                key={playlist?.playlist?.playlistId}
                playlist={playlist}
              />
            )
          );
        })
      }
    </Flex>
  );
};

export default PlaylistsTabs;
