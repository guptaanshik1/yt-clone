import { Divider, Flex, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { useChannelContext } from "../utils/context";

const AboutTab = () => {
  const { channelDetails } = useChannelContext();
  return (
    <Flex
      w={"100%"}
      flexDir={"row"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      mt={"15px"}
    >
      <Flex w={"70%"} flexDir={"column"}>
        <Flex flexWrap={"wrap"} mb={"20px"}>
          <Text fontSize={"18px"} fontWeight={400}>
            Description
          </Text>
          <Text fontSize={"12px"} mt={"20px"}>
            {channelDetails?.description}
          </Text>
        </Flex>
        <Divider />
        <Flex my={"20px"} flexDir={"column"}>
          <Text fontSize={"18px"} fontWeight={400}>
            Details
          </Text>
          <Text fontSize={"12px"} fontWeight={300} mt={"12px"}>
            Location:{" "}
            <chakra.span ml={"20px"}>{channelDetails?.country}</chakra.span>
          </Text>
        </Flex>
        <Divider />
        {channelDetails?.links ? (
          <Flex mt={"14px"} flexDir={"column"}>
            <Text fontSize={"18px"} fontWeight={400}>
              Links
            </Text>
            {channelDetails?.links?.map((link) => {
              return (
                <Flex w={"33%"} mt={"14px"} flexWrap={"wrap"} flex={1}>
                  <Text color={"blue"} cursor={"pointer"}>
                    {link?.title}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        ) : null}
      </Flex>
      <Flex ml={"20px"} flexDir={"column"} p={"10px"}>
        <Text fontSize={"18px"} fontWeight={400} mb={"10px"}>
          Stats
        </Text>
        <Divider />
        <Text
          my={"10px"}
          fontWeight={400}
          fontSize={"14px"}
        >{`Joined ${channelDetails?.joinedDate}`}</Text>
        <Divider />
        <Text
          fontWeight={400}
          fontSize={"14px"}
        >{`${channelDetails?.stats?.views} views`}</Text>
      </Flex>
    </Flex>
  );
};

export default AboutTab;
