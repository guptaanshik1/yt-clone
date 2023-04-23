import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./components/VideoCard";
import { useHomePageContext } from "./utils/context";

export default function HomePageView() {
  const { videosData, isVideosDataLoading } = useHomePageContext();

  if (isVideosDataLoading) {
    return <h1>Loading....</h1>;
  }
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
        videosData?.map((data) => (
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
