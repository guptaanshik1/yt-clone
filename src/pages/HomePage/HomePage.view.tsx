import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./components/VideoCard";
import { useHomePageContext } from "./utils/context";

export default function HomePageView() {
  const { videosData, isVideosDataLoading } = useHomePageContext();
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
        !isVideosDataLoading && videosData?.contents?.map((data) => (
            <Link
              key={data?.video?.videoId}
              to={`/watch?v=${data?.video?.videoId}`}
            >
              <VideoCard {...data?.video} />
            </Link>
          ))
      }
    </Flex>
  );
}
