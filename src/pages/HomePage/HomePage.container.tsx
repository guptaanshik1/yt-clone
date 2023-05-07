import React from "react";
import HomePageView from "./HomePage.view";
import useGetHomeVideos from "./hooks/useGetHomeVideos";
import { HomePageContext } from "./utils/context";
import videosData from "../../mocks/HomePageData.json";
import useIntersectionObserver from "../../services/useIntersectionObserver";

export default function HomePageContainer() {
  // const { data: videosData, isLoading: isVideosDataLoading } =
  //   useGetHomeVideos();

  const ulRef = React.useRef<HTMLUListElement>(null);

  const {
    data,
    isLoading: isVideosDataLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetHomeVideos("New");

  useIntersectionObserver(fetchNextPage, hasNextPage, ulRef);

  const videosData = data?.pages?.flatMap((page) => page?.contents) || [];

  return (
    <HomePageContext.Provider
      // @ts-ignore
      value={{
        videosData,
        ulRef,
        hasNextPage,
        isVideosDataLoading,
        isFetchingNextPage,
      }}
    >
      <HomePageView />
    </HomePageContext.Provider>
  );
}
