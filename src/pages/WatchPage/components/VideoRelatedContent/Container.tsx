import { Flex, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useWatchPageContext } from "../../utils/context";
import ContentCard from "./ContentCard";

const Container = () => {
  const { relatedContent, isRelatedLoading } = useWatchPageContext();

  if (isRelatedLoading) {
    return Array.from({ length: 9 }, (x, id) => {
      return (
        <Flex m={"40px 100px"} flexWrap={"wrap"} h={"100px"}>
          <Skeleton p={"2px 8px"} w={"100%"} key={id} />
        </Flex>
      );
    });
  }

  return (
    <>
      {
        // @ts-ignores
        relatedContent?.map((content) => (
          <ContentCard key={content?.video?.videoId} {...content.video} />
        ))
      }
    </>
  );
};

export default Container;
