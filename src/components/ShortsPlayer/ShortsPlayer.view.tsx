import { Flex } from "@chakra-ui/react";
import React from "react";
import WatchShorts from "./components/WatchShorts";
import { useShortsPlayerContext } from "./utils/context";

export default function ShortsPlayerView() {
  return (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <WatchShorts />
    </Flex>
  );
}
