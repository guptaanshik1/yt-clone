import React from "react";
import WatchPageView from "./WatchPage.view";
import { WatchPageContext } from "./utils/context";
import useGetVideoDetails from "./hooks/useGetVideoDetails";
import { useSearchParams } from "react-router-dom";
import data from "../../mocks/videoDetailsById.json";
import relatedContent from "../../mocks/videoRelatedContent.json";
import comments from "../../mocks/comments.json";
import replies from "../../mocks/repliesForComments.json";
import useGetRelatedContent from "./hooks/useGetRelatedContent";
import useGetComments from "./hooks/useGetComments";
import useIntersectionObserver from "../../services/useIntersectionObserver";

export default function WatchPageContainer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // const { data: videoDetails, isLoading: isVideoDetailsLoading } =
  //   useGetVideoDetails(videoId as string);

  // const { data: relatedContent, isLoading: isRelatedLoading, fetchNextPage, hasNextPage } =
  //   useGetRelatedContent(videoId as string);

  // const { data: commentsData, isLoading: isCommentsLoading } = useGetComments(
  //   videoId as string
  // );

  // const repliesData = commentsData?.replies["0"];
  const ulRef = React.useRef(null);
  const [isShowFullDesc, setIsShowFullDesc] = React.useState(false);
  const [showReplyPost, setShowReplyPost] = React.useState(false);
  const { totalCommentsCount, comments: allComments } = comments;

  // useIntersectionObserver(fetchNextPage, hasNextPage, ulRef)

  return (
    <WatchPageContext.Provider
      // @ts-ignore
      value={{
        // videoDetails,
        // isVideoDetailsLoading,
        // repliesData,
        videoDetails: data,
        ulRef,
        relatedContent,
        videoId,
        isShowFullDesc,
        setIsShowFullDesc,
        totalCommentsCount,
        comments: allComments,
        replies,
        showReplyPost,
        setShowReplyPost,
      }}
    >
      <WatchPageView />
    </WatchPageContext.Provider>
  );
}
