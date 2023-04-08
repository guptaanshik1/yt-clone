import React from "react";
import { useParams } from "react-router-dom";
import ChannelView from "./Channel.view";
import useChannelDetails from "./hooks/useChannelDetails";
import { ChannelContext } from "./utils/context";
import channelDetails from "../../mocks/channelDetails.json";

export default function ChannelContainer() {
  const { channelName } = useParams<{ channelName: string }>();

  // const { data: channelDetails, isLoading: isChannelDetailsLoading } =
  //   useChannelDetails(channelName as string);

  return (
    <ChannelContext.Provider
      // @ts-ignore
      value={{ channelDetails }}
    >
      <ChannelView />
    </ChannelContext.Provider>
  );
}
