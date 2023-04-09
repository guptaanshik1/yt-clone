import { Button, Flex, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { limitDescriptionChars } from "../../../utils/limitTitleChars";
import { useChannelContext } from "../utils/context";
import { BiChevronRight } from "react-icons/bi";
import useGetColorMode from "../../../hooks/useGetColorMode";

const ChannelInfo = () => {
  const { channelDetails } = useChannelContext();
  const { isDark } = useGetColorMode();

  return (
    <Flex mt={"20px"} ml={"20px"} w={"95%"} justifyContent={"space-between"}>
      <Flex>
        <Image
          src={channelDetails?.avatar[1]?.url}
          rounded={"full"}
          h={"150px"}
        />
        <Flex
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          ml={"20px"}
          mt={"6px"}
        >
          <Text fontWeight={700} fontSize={"24px"}>
            {channelDetails?.title}
          </Text>
          <Flex gap={"20px"}>
            <Text fontWeight={500} fontSize={"14px"}>
              {channelDetails?.username}
            </Text>
            <Text fontSize={"14px"}>
              {channelDetails?.stats?.subscribersText}
            </Text>
            <Text
              fontSize={"14px"}
            >{`${channelDetails?.stats?.videos} videos`}</Text>
          </Flex>
          <Flex mt={"20px"}>
            <Text
              fontSize={"16px"}
              fontWeight={300}
              lineHeight={"18px"}
              w={"100%"}
            >
              {limitDescriptionChars(channelDetails?.description)} &nbsp;
            </Text>
            <BiChevronRight size={"20px"} />
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent={"flex-start"} mt={"10px"} alignItems={"flex-start"}>
        <Button
          rounded={"full"}
          fontWeight={700}
          color={isDark ? "#000000" : "#FFFFFF"}
          bgColor={isDark ? "#f0f1f1" : "#000000"}
          _hover={{ opacity: 0.8 }}
        >
          Subscribe
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChannelInfo;
