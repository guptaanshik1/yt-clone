import React from "react";
import { useHomePageContext } from "./utils/context";

export default function HomePageView() {
  const {videosData, isVideosDataLoading} = useHomePageContext()
  return (
    <Flex
      flexWrap={"wrap"}
      w={"95%"}
      ml={"100px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {
        // @ts-ignore
        !isVideosDataLoading &&
          videosData?.contents?.map((data) => (
            <VideoCard key={data?.video?.videoId} {...data?.video} />
          ))
      }
    </Flex>
  )
}
