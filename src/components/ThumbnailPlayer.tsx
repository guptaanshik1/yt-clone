import React from "react";
import ReactPlayer from "react-player";

interface IProps {
  thumbnailUrl: {
    url: string;
  };
}

const ThumbnailPlayer = ({ thumbnailUrl }: IProps) => {
  console.log("moving thumbnails:", thumbnailUrl?.url);
  return (
    <>
      <ReactPlayer width={"35%"} height={""} url={thumbnailUrl?.url} />
    </>
  );
};

export default ThumbnailPlayer;
