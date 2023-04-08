import { Image } from "@chakra-ui/react";
import React from "react";

interface IProps {
  thumbnailUrl: {
    url: string;
  };
}

const ThumbnailPlayer = ({ thumbnailUrl }: IProps) => {
  return (
    <>
      <Image src={thumbnailUrl?.url} w={"100%"} />
    </>
  );
};

export default ThumbnailPlayer;
