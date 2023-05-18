import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useChannelContext } from "../utils/context";
import ChannelVideoCard from "./ChannelVideoCard";

const VideosTab = () => {
  const { channelVideosLatest } = useChannelContext();

  return (
    <Flex flexDir={"column"} w={"100%"}>
      <Flex gridGap={"20p"}>
        <Button>Latest</Button>
        <Button>Popular</Button>
      </Flex>
      {
        // @ts-ignore
        channelVideosLatest?.contents?.map((video) => (
          <ChannelVideoCard key={video?.video?.videoId} video={video?.video} />
        ))
      }
    </Flex>
  );
};

export default VideosTab;
