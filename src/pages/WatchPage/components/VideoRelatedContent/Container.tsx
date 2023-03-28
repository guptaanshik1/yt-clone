import React from "react";
import { useWatchPageContext } from "../../utils/context";
import ContentCard from "./ContentCard";

const Container = () => {
  const { relatedContent } = useWatchPageContext();
  return (
    <>
      {relatedContent?.contents?.map((content) => (
        <ContentCard key={content?.video?.videoId} {...content.video} />
      ))}
    </>
  );
};

export default Container;
