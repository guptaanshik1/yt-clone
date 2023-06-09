import {
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  chakra,
  Box,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { GoVerified } from "react-icons/go";
import { VERIFIED_CHANNEL } from "../../../constants/homePageConstants";
import { formatDuration } from "../../../utils/formatDuration";
import { formatViewCount } from "../../../utils/viewCountFormatter";
import ThumbnailPlayer from "../../../components/ThumbnailPlayer";
import { Link } from "react-router-dom";
import { RxDotsVertical } from "react-icons/rx";
import { BsBroadcast } from "react-icons/bs";
import { useSearchResultsContext } from "../utils/context";

const SearchCard = ({ ...video }) => {
  const { ulRef, isFetchingNextPage } = useSearchResultsContext();
  const [isMouseOverVideo, setIsMouseOverVideo] = React.useState(false);
  const [isThumbnailMoving, setIsThumbnailMoving] = React.useState(false);
  const [showMenuIcon, setShowMenuIcon] = React.useState(false);

  const mouseOverThumbnail = () => {
    setIsMouseOverVideo(true);
  };
  const mouseOutThumbnail = () => {
    setIsMouseOverVideo(false);
    setIsThumbnailMoving(true);
  };

  React.useEffect(() => {
    let timeoutId: number;
    if (isMouseOverVideo) {
      timeoutId = setTimeout(() => {
        setIsThumbnailMoving(true);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
      setIsThumbnailMoving(false);
    };
  }, [isMouseOverVideo]);

  return (
    <>
      <Flex
        cursor={"pointer"}
        h={"280px"}
        p={"8px"}
        maxH={"200px"}
        gap={"14px"}
        ref={ulRef}
      >
        {isFetchingNextPage && (
          <div style={{ position: "absolute" }}>
            <Spinner size={"xl"} color={"blue"} />
          </div>
        )}
        <Flex
          w={"35%"}
          position={"relative"}
          onMouseOver={mouseOverThumbnail}
          onMouseOut={mouseOutThumbnail}
        >
          {!isThumbnailMoving ? (
            <>
              <Image
                src={video?.thumbnails[0]?.url}
                objectFit={"cover"}
                borderRadius={"8px"}
              />
              {!video?.isLiveNow && (
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
                  {isMouseOverVideo
                    ? `Keep hovering to play`
                    : formatDuration(video?.lengthSeconds)}
                </Flex>
              )}
            </>
          ) : (
            <>
              {video?.movingThumbnails && !video?.isLiveNow ? (
                <ThumbnailPlayer thumbnailUrl={video?.movingThumbnails[0]} />
              ) : (
                <Image
                  src={video?.thumbnails[0]?.url}
                  objectFit={"cover"}
                  borderRadius={"8px"}
                />
              )}
            </>
          )}
        </Flex>
        <Flex
          w={"100%"}
          flexDir={"column"}
          onMouseOver={() => setShowMenuIcon(true)}
          onMouseOut={() => setShowMenuIcon(false)}
        >
          <Flex
            w={"100%"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontWeight={400} fontSize={"18px"}>
              {video?.title}
            </Text>
            {showMenuIcon && <RxDotsVertical size={"24px"} color={"grey"} />}
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
          <Link to={`/${video?.author?.channelId}`}>
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
              {video?.isLiveNow ? (
                <Flex>
                  <chakra.span
                    display={"flex"}
                    alignItems={"center"}
                    backgroundColor={"red"}
                    color={"#FFFFFF"}
                    fontWeight={600}
                    fontSize={"10px"}
                    p={"2px 4px"}
                    w={"80px"}
                  >
                    <BsBroadcast size={12} /> &nbsp; Live Now
                  </chakra.span>
                </Flex>
              ) : null}
            </Flex>
          </Link>
          <Flex mt={"10px"}>
            <Text fontSize={"10px"}>{video?.descriptionSnippet}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SearchCard;
