import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useChannelContext } from "../utils/context";
import AllLiveTabs from "./AllLiveTabs";

const LiveTab = () => {
  const { latestStreamsData } = useChannelContext();

  return (
    <Flex flexWrap={"wrap"} w={"100%"}>
      {
        // @ts-ignore
        latestStreamsData?.contents?.map((data) => (
          <Link
            to={`/watch?v=${data?.video?.videoId}`}
            key={data?.video?.videoId}
          >
            <AllLiveTabs video={data?.video} />
          </Link>
        ))
      }
    </Flex>
  );
};

export default LiveTab;
