import { Flex } from "@chakra-ui/react";
import React from "react";
import { useChannelContext } from "../utils/context";
import AllChannelShorts from "./AllChannelShorts";

const ShortsTab = () => {
  const { channelShorts } = useChannelContext();

  return (
    <Flex flexDir={"row"} flexWrap={"wrap"} gridGap={"10px"}>
      {
        // @ts-ignore
        channelShorts?.contents?.map((data) => (
          <AllChannelShorts key={data?.short?.video} short={data?.short} />
        ))
      }
    </Flex>
  );
};

export default ShortsTab;
