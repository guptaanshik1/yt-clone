import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import useGetColorMode from "../../../hooks/useGetColorMode";
import { formatViewCount } from "../../../utils/viewCountFormatter";
import { useWatchPageContext } from "../utils/context";

const VideoDescription = () => {
  const { isShowFullDesc, setIsShowFullDesc } = useWatchPageContext();
  const { colorMode } = useGetColorMode();
  const { videoDetails } = useWatchPageContext();

  return (
    <Flex
      m={"20px"}
      w={"1000px"}
      bgColor={"rgb(242 242 242)"}
      borderRadius={"8px"}
      border={"1px solid red"}
      p={"8px"}
      flexDir={"column"}
    >
      <Flex mb={"10px"}>
        <Text fontWeight={600}>
          {formatViewCount(videoDetails?.stats?.views)} views
        </Text>
        <Text ml={"8px"} fontWeight={500}>
          {videoDetails?.publishedDate} ago
        </Text>
        {videoDetails?.superTitle?.items?.map((item) => (
          <Text ml={"8px"} key={item}>
            {item}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default VideoDescription;
