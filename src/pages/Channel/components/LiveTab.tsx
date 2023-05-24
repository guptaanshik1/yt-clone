import { Flex } from "@chakra-ui/react";
import React from "react";
import { useChannelContext } from "../utils/context";
import AllLiveTabs from "./AllLiveTabs";

const LiveTab = () => {
  const { latestStreamsData } = useChannelContext();
  console.log("latestStreamsData:", latestStreamsData);
  return (
    <Flex flexWrap={"wrap"} w={"100%"}>
      {
        // @ts-ignore
        latestStreamsData?.contents?.map((data) => (
          <AllLiveTabs key={data?.video?.videoId} data={data?.video} />
        ))
      }
    </Flex>
  );
};

export default LiveTab;
