import React from "react";
import HomePageView from "./HomePage.view";
import useGetHomeVideos from "./hooks/useGetHomeVideos";
import { HomePageContext } from "./utils/context";

export default function HomePageContainer() {
  const { data: videosData, isLoading: isVideosDataLoading } =
    useGetHomeVideos();
  console.log("vidoesData: ", videosData);
  return (
    // @ts-ignore
    <HomePageContext.Provider value={{ videosData, isVideosDataLoading }}>
      <HomePageView />
    </HomePageContext.Provider>
  );
}
