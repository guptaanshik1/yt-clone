import { Flex } from "@chakra-ui/react";
import { useWatchPageContext } from "../utils/context";

const VideoPlayer = () => {
  const { videoId } = useWatchPageContext();
  return (
    <Flex m={"20px"}>
      <iframe
        width={"1000"}
        height={"450"}
        title={"Youtube video player"}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Flex>
  );
};

export default VideoPlayer;
