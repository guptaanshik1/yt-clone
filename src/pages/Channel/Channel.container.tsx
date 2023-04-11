import React from "react";
import { useParams } from "react-router-dom";
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
  React.useEffect(() => {
    console.log("first useEffect");
    console.log("channelName:", channelName);
    dispatch(setChannelId(channelName as string));
  }, []);
  const storeChannelName = useAppSelector((state) => state.channel.channelName);
  // const {
  //   data: playlistsData,
  //   isLoading: isPlaylistsDataLoading,
  //   refetch,
  // } = useChannelPlaylists(storeChannelName as string, selectedFilter);

  // React.useEffect(() => {
  //   console.log("second useEffect");
  //   refetch({
  //     queryKey: ["channel/playlists", storeChannelName, selectedFilter],
  //   });
  // }, [selectedFilter]);

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
      }}
    >
      <ChannelView />
    </ChannelContext.Provider>
  );
}
