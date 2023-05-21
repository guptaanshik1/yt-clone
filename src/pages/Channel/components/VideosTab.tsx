import { Button, Flex } from "@chakra-ui/react";
import { useChannelContext } from "../utils/context";
import ChannelVideoCard from "./ChannelVideoCard";

const VideosTab = () => {
  const { channelVideosLatest } = useChannelContext();

  return (
    <Flex flexDir={"column"} w={"100%"}>
      <Flex gridGap={"20px"} my={"20px"}>
        <Button
          size={"10px"}
          p="10px"
          bgColor={"#f2f2f2"}
          _hover={{ opacity: 0.9 }}
        >
          Latest
        </Button>
        <Button
          size={"10px"}
          p={"10px"}
          bgColor={"#f2f2f2"}
          _hover={{ opacity: 0.9 }}
        >
          Popular
        </Button>
      </Flex>
      <Flex w={"100%"} flexWrap={"wrap"}>
        {
          // @ts-ignore
          channelVideosLatest?.contents?.map((video) => (
            <ChannelVideoCard
              key={video?.video?.videoId}
              video={video?.video}
            />
          ))
        }
      </Flex>
    </Flex>
  );
};

export default VideosTab;
