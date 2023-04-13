import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ChannelView from "./Channel.view";
import useChannelDetails from "./hooks/useChannelDetails";
import { ChannelContext } from "./utils/context";
import channelDetails from "../../mocks/channelDetails.json";
import playlistsData from "../../mocks/playlistsData.json";
import useChannelPlaylists from "./hooks/useChannelPlaylists";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setChannelId } from "../../features/channelSlice";

export default function ChannelContainer() {
  const { channelName } = useParams<{ channelName: string }>();
  const [selectedFilter, setSelectedFilter] = React.useState<string>("");
  // const { data: channelDetails, isLoading: isChannelDetailsLoading } =
  //   useChannelDetails(channelName as string);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  React.useEffect(() => {
    dispatch(setChannelId(channelName as string));
  }, []);
  const storeChannelName = useAppSelector((state) => state.channel.channelName);
  // const {
  //   data: playlistsData,
  //   isLoading: isPlaylistsDataLoading,
  //   refetch: playlistsRefetch,
  // } = useChannelPlaylists(storeChannelName as string);

  // React.useEffect(() => {
  //   playlistsRefetch({
  //     queryKey: ["channel/playlists", storeChannelName],
  //   });
  // }, []);
  return (
    <ChannelContext.Provider
      // @ts-ignore
      value={{
        channelName,
        channelDetails,
        selectedFilter,
        setSelectedFilter,
        // playlistsData,
        // isPlaylistsDataLoading,
        playlistsData,
        // channelChannelsData,
        // isChannelChannelsDataLoading,
        // channelChannelsRefetch,
      }}
    >
      <ChannelView />
    </ChannelContext.Provider>
  );
}
