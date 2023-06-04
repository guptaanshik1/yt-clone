import { Flex } from "@chakra-ui/react";
import React from "react";
import { useShortsPlayerContext } from "../utils/context";

const WatchShorts = () => {
  const { shortId, showComments } = useShortsPlayerContext();
  return (
    <Flex h={"100vh"} position={"relative"} transform={"translateX(-8%)"}>
      <iframe
        width="400"
        height="90%"
        style={{ borderRadius: "10px" }}
        src={`https://www.youtube.com/embed/${shortId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Flex>
  );
};

export default WatchShorts;
