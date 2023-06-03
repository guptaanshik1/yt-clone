import { Flex } from "@chakra-ui/react";
import ShortIcons from "./components/ShortIcons";
import WatchShorts from "./components/WatchShorts";
import React from "react";

export default function ShortsPlayerView() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <WatchShorts />
      <ShortIcons />
    </Flex>
  );
}
