import React from "react";
import WatchPageView from "./WatchPage.view";
import { WatchPageContext } from "./utils/context";
import useGetVideoDetails from "./hooks/useGetVideoDetails";
import { useSearchParams } from "react-router-dom";
import data from "../../mocks/videoDetailsById.json";
import relatedContent from "../../mocks/videoRelatedContent.json";
import useGetRelatedContent from "./hooks/useGetRelatedContent";

export default function WatchPageContainer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // const { data: videoDetails, isLoading: isVideoDetailsLoading } =
  //   useGetVideoDetails(videoId as string);

  // const { data: relatedContent, isLoading: isRelatedLoading } =
  //   useGetRelatedContent(videoId as string);
  const [isShowFullDesc, setIsShowFullDesc] = React.useState(false);

  return (
    <WatchPageContext.Provider
      // @ts-ignore
      value={{
        // videoDetails,
        // isVideoDetailsLoading
        videoDetails: data,
        relatedContent,
        videoId,
        isShowFullDesc,
        setIsShowFullDesc,
      }}
    >
      <WatchPageView />
    </WatchPageContext.Provider>
  );
}
