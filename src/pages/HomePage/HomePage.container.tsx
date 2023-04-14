import React from "react";
import HomePageView from "./HomePage.view";
import useGetHomeVideos from "./hooks/useGetHomeVideos";
import { HomePageContext } from "./utils/context";
import videosData from "../../mocks/HomePageData.json";

export default function HomePageContainer() {
  // const { data: videosData, isLoading: isVideosDataLoading } =
  //   useGetHomeVideos();
  console.log("videosData:", videosData);
  return (
    <HomePageContext.Provider
      // @ts-ignore
      value={{
        videosData,
        // isVideosDataLoading
      }}
    >
      <HomePageView />
    </HomePageContext.Provider>
  );
}
