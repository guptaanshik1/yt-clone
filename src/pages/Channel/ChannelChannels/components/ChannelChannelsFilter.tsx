import { MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { TChannelsFilter } from "../../utils/constants";
import { useChannelChannelsContext } from "../utils/context";

const ChannelChannelsFilter = () => {
  const { channelChannelsFilters, setSelectedChannelFilter } =
    useChannelChannelsContext();
  // const channelsFilters = useAppSelector(
  //   (state) => state.channel.channelChannelsFilter
  // );
  const handleChannelFilter = (col: TChannelsFilter) => {
    // @ts-ignore
    setSelectedChannelFilter(col);
  };

  return (
    <MenuList>
      <MenuItem
        onClick={() =>
          handleChannelFilter({
            filter: "all_collections",
            title: "All Collections",
          })
        }
      >
        All Collections
      </MenuItem>
      {
        // @ts-ignore
        channelChannelsFilters?.collections?.map((col) => {
          return (
            <MenuItem onClick={() => handleChannelFilter(col)}>
              {col?.title}
            </MenuItem>
          );
        })
      }
    </MenuList>
  );
};

export default ChannelChannelsFilter;
