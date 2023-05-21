import React from "react";
import { useChannelContext } from "../utils/context";
import AllChannelShorts from "./AllChannelShorts";

const ShortsTab = () => {
  const { channelShorts } = useChannelContext();
  console.log("channelShorts:", channelShorts);
  return (
    <>
      {
        // @ts-ignore
        channelShorts?.contents?.map((data) => (
          <AllChannelShorts key={data?.short?.video} short={data?.short} />
        ))
      }
    </>
  );
};

export default ShortsTab;
