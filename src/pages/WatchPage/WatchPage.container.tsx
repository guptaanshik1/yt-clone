import React from "react";
import WatchPageView from "./WatchPage.view";
import { WatchPageContext } from "./utils/context";
import useGetVideoDetails from "./hooks/useGetVideoDetails";
import { useSearchParams } from "react-router-dom";
import data from '../../mocks/videoDetailsById.json'

export default function WatchPageContainer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // const { data: videoDetails, isLoading: isVideoDetailsLoading } =
  //   useGetVideoDetails(videoId as string);

  return (
    <WatchPageContext.Provider
      // @ts-ignore
      value={{ 
        // videoDetails,
        // isVideoDetailsLoading
        videoDetails: data
      }}
    >
      <WatchPageView />
    </WatchPageContext.Provider>
  );
}
