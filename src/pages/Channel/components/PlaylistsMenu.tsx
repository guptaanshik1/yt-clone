import { MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { playlistMenu } from "../utils/constants";
import { useChannelContext } from "../utils/context";

const PlaylistsMenu = () => {
  const { selectedFilter, setSelectedFilter } = useChannelContext();
  return (
    <MenuList>
      {Object.entries(playlistMenu)?.map(([key, value]) => {
        return (
          <MenuItem
            key={key}
            onClick={() => {
              // @ts-ignore
              setSelectedFilter(value);
            }}
          >
            {key}
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default PlaylistsMenu;
