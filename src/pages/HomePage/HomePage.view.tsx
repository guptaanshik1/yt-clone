import { Flex, Skeleton, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import VideoCard from "./components/VideoCard";
import { useHomePageContext } from "./utils/context";

export default function HomePageView() {
  const { videosData, isVideosDataLoading, hasNextPage, isFetchingNextPage } =
    useHomePageContext();

  if (isVideosDataLoading) {
    return Array.from({ length: 9 }, (x, id) => {
      return (
        <Flex m={"40px 100px"} flexWrap={"wrap"} h={"100px"}>
          <Skeleton p={"2px 8px"} w={"100%"} key={id} />
        </Flex>
      );
    });
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
