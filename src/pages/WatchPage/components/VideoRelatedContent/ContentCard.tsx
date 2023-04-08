import {
  Flex,
  Image,
  Text,
  chakra,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { GoVerified } from "react-icons/go";
import { VERIFIED_CHANNEL } from "../../../../constants/homePageConstants";
import { formatViewCount } from "../../../../utils/viewCountFormatter";

const ContentCard = ({ ...video }) => {
  return (
    <Flex w={"100%"} flexDir={"row"} my={"10px"} h={"auto"}>
      <Flex w={"100%"}>
        <Image
          w={"1000px"}
          src={video?.thumbnails[0]?.url}
          objectFit={"fill"}
          height={"120px"}
          borderRadius={"8px"}
        />
      </Flex>
      <Flex w={"100%"} flexDir={"column"} ml={"4px"}>
        <Flex
          flexWrap={"wrap"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          mb={"4px"}
        >
          <Text fontWeight={700} fontSize={"12px"}>
            {video?.title}
          </Text>
        </Flex>
        <Flex mb="4px">
          <Text fontSize={"12px"} mr={"8px"}>
            {video?.author?.title}
          </Text>
          {video?.author?.badges[0]?.type == VERIFIED_CHANNEL ? (
            <chakra.span mt={"3px"}>
              <GoVerified size={"12px"} />
            </chakra.span>
          ) : null}
        </Flex>
        <Flex>
          <UnorderedList display={"flex"} fontSize={"10px"} m={0}>
            <ListItem style={{ listStyleType: "none" }} mr={"20px"}>
              {!video?.isLiveNow
                ? formatViewCount(video?.stats?.views)
                : `${video?.stats?.viewers} watching`}
            </ListItem>
            {!video?.isLiveNow && (
              <ListItem>{video?.publishedTimeText}</ListItem>
            )}
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContentCard;
