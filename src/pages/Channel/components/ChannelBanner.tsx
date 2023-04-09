import { Flex, Image } from "@chakra-ui/react";
import React from "react";

interface IProps {
  banner: [];
}

const ChannelBanner = ({ banner }: IProps) => {
  return (
    <Flex>
      <Image src={banner?.desktop[2]?.url} />
    </Flex>
  );
};

export default ChannelBanner;
