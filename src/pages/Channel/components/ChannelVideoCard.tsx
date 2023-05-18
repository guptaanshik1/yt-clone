import React from "react";

interface IProps {
  video: any;
}

const ChannelVideoCard = ({ video }: IProps) => {
  console.log("video:", video);
  return <div>ChannelVideoCard</div>;
};

export default ChannelVideoCard;
