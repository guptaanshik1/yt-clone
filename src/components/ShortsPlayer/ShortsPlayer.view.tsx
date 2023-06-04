import { Flex } from "@chakra-ui/react";
import ShortIcons from "./components/ShortIcons";
import WatchShorts from "./components/WatchShorts";
import React from "react";
import { useShortsPlayerContext } from "./utils/context";
import ShortsComment from "./components/ShortsComment";

export default function ShortsPlayerView() {
  const { showComments } = useShortsPlayerContext();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <WatchShorts />
      <Flex position={"absolute"} top={48} right={554}>
        {showComments && <ShortIcons />}
      </Flex>
      {!showComments && <ShortIcons />}
      {showComments && (
        <Flex
          position={"absolute"}
          right={100}
          bgColor={"white"}
          transform={"translate(-10.9%, -6%)"}
          h={"83%"}
          w={"400px"}
          borderRadius={"10px"}
          border={"1px solid red"}
        >
          <ShortsComment />
        </Flex>
      )}
    </Flex>
  );
}
