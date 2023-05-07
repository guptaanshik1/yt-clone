import {
  Flex,
  Image,
  Text,
  chakra,
  UnorderedList,
  ListItem,
  ResponsiveValue,
} from "@chakra-ui/react";
import React from "react";
import { GoVerified } from "react-icons/go";
import { VERIFIED_CHANNEL } from "../../../../constants/homePageConstants";
import useScreenSize from "../../../../hooks/useScreenSize";
import { limitChars } from "../../../../utils/limitTitleChars";
import { formatViewCount } from "../../../../utils/viewCountFormatter";
import { useWatchPageContext } from "../../utils/context";

const ContentCard = ({ ...video }) => {
  const { isLargeScreen, isSmallScreen, isMediumScreen } = useScreenSize();
  const { ulRef } = useWatchPageContext();

  const checkWidth = (): ResponsiveValue<number | (string & {})> => {
    if (isSmallScreen) {
      return "96%";
    } else if (isMediumScreen) {
      return "96%";
    } else {
      return "100%";
    }
  };

  return (
    <Flex
      w={checkWidth()}
      flexDir={"row"}
      my={"10px"}
      mx={isLargeScreen ? "0" : "10px"}
      h={"auto"}
      ref={ulRef}
    >
      <Flex w={"200px"}>
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
            {limitChars(video?.title)}
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
