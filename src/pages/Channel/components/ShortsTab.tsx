import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useChannelContext } from "../utils/context";
import AllChannelShorts from "./AllChannelShorts";

const ShortsTab = () => {
  const { channelShorts } = useChannelContext();

  return (
    <Flex flexDir={"row"} flexWrap={"wrap"} gridGap={"10px"}>
      {
        // @ts-ignore
        channelShorts?.contents?.map((data) => {
          return (
            <Link to={`/watch-shorts`} key={data?.short?.videoId}>
              <AllChannelShorts short={data?.short} />
            </Link>
          );
        })
      }
    </Flex>
  );
};

export default ShortsTab;
