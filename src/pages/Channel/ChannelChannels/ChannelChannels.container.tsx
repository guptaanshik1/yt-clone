import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import useChannelChannelsFilters from "../hooks/useChannelChannelsFilters";
import ChannelChannelsView from "./ChannelChannels.view";
import { ChannelChannelsContext } from "./utils/context";
import channelChannelsFilters from "../../../mocks/channelChannelsCol.json";
import selectedFilterData from "../../../mocks/channelChannels.json";
import { TChannelsFilter } from "../utils/constants";
import useChannelChannelsList from "../hooks/useChannelChannelsList";

export default function ChannelChannelsContainer() {
  const { pathname } = useLocation();
  const storeChannelName = useAppSelector((state) => state.channel.channelName);

  const [selectedChannelFilter, setSelectedChannelFilter] =
    React.useState<TChannelsFilter>({
      filter: "all_collections",
      title: "All Collections",
    });
  //   const { data: channelChannelsFilters, isLoading: isChannelFiltersLoading } =
  //     useChannelChannelsFilters(storeChannelName);

  //   const { data: selectedFilterData, isLoading: isSelectedFilterDataLoading, refetch } = useChannelChannelsList(
  //     storeChannelName,
  //     selectedChannelFilter?.filter
  //   );

  //   React.useEffect(() => {
  //     if (selectedChannelFilter?.filter !== "all_collections") {
  //       refetch({
  //         queryKey: [
  //           "channel/channels-list",
  //           storeChannelName,
  //           selectedChannelFilter?.filter,
  //         ],
  //       });
  //     }
  //   }, [selectedChannelFilter?.filter]);

  console.log("channelsData:", selectedFilterData);

  return (
    <ChannelChannelsContext.Provider
      // @ts-ignore
      value={{
        selectedChannelFilter,
        setSelectedChannelFilter,
        channelChannelsFilters,
        // selectedFilterData,
        // isSelectedFilterDataLoading,
        //isChannelFiltersLoading
      }}
    >
      <ChannelChannelsView />
    </ChannelChannelsContext.Provider>
  );
}
