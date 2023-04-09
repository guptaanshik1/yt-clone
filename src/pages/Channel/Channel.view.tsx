import { Flex } from "@chakra-ui/react";
import React from "react";
import ChannelBanner from "./components/ChannelBanner";
import ChannelInfo from "./components/ChannelInfo";
import ChannelTabs from "./components/ChannelTabs";
import { useChannelContext } from "./utils/context";

export default function ChannelView() {
  const { channelDetails } = useChannelContext();

  return (
    <Flex flexDir={"column"} ml={"100px"}>
      <Flex flexDir={"column"}>
        <ChannelBanner banner={channelDetails?.banner} />
        <ChannelInfo />
        <ChannelTabs />
      </Flex>
    </Flex>
  );
}
