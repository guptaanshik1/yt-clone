import {
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
  chakra,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { GoVerified } from "react-icons/go";
import { VERIFIED_CHANNEL } from "../../../constants/homePageConstants";
import { formatDuration } from "../../../utils/formatDuration";
import { formatViewCount } from "../../../utils/viewCountFormatter";

const SearchCard = ({ ...video }) => {
  return (
    <>
      <Flex
        cursor={"pointer"}
        h={"280px"}
        p={"8px"}
        maxH={"200px"}
        gap={"14px"}
      >
        <Flex w={"35%"} position={"relative"}>
          <Image
            src={video?.thumbnails[0]?.url}
            objectFit={"cover"}
            borderRadius={"8px"}
          />
          <Flex
            position={"absolute"}
            bottom={1}
            right={1}
            fontSize={"14px"}
            backgroundColor={"#000000"}
            color={"#FFFFFF"}
            borderRadius={"4px"}
            p={"2px"}
          >
            {formatDuration(video?.lengthSeconds)}
          </Flex>
        </Flex>
        <Flex w={"100%"} flexDir={"column"}>
          <Flex
            w={"100%"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"flex-start"}
          >
            <Text fontWeight={400} fontSize={"18px"}>
              {video?.title}
            </Text>
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
          <Flex
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"10px"}
            mt={"10px"}
          >
            <Box w={"40px"}>
              <Image rounded={"full"} src={video?.author?.avatar[0]?.url} />
            </Box>
            <Flex>
              <Text fontSize={"12px"} mr={"8px"}>
                {video?.author?.title}
              </Text>
              {video?.author?.badges[0]?.type == VERIFIED_CHANNEL ? (
                <chakra.span mt={"3px"}>
                  <GoVerified size={"12px"} />
                </chakra.span>
              ) : null}
            </Flex>
          </Flex>
          <Flex mt={"10px"}>
            <Text fontSize={"10px"}>{video?.descriptionSnippet}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SearchCard;
