import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  chakra,
  UnorderedList,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { RxDotsVertical } from "react-icons/rx";
import { limitTitleChars } from "../../../utils/limitTitleChars";
import { formatViewCount } from "../../../utils/viewCountFormatter";
import { GoVerified } from "react-icons/go";
import { BsBroadcast } from "react-icons/bs";
import { VERIFIED_CHANNEL } from "../../../constants/homePageConstants";
import { formatDuration } from "../../../utils/formatDuration";
import ThumbnailPlayer from "../../../components/ThumbnailPlayer";
import { useHomePageContext } from "../utils/context";

const VideoCard = ({ ...video }) => {
  const { ulRef, isFetchingNextPage } = useHomePageContext();
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isThumbnailMoving, setIsThumbnailMoving] = React.useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  React.useEffect(() => {
    let timeoutId: number;
    if (isMouseOver) {
      timeoutId = setTimeout(() => {
        setIsThumbnailMoving(true);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
      setIsThumbnailMoving(false);
    };
  }, [isMouseOver]);

  return (
    <>
      <Flex
        flexDir={"column"}
        flexWrap={"wrap"}
        w={"330px"}
        m={"10px 10px"}
        cursor={"pointer"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={ulRef}
      >
        {isFetchingNextPage && (
          <div style={{ position: "absolute" }}>
            <Spinner size={"xl"} color={"blue"} />
          </div>
        )}
        {!isThumbnailMoving ? (
          <Flex position={"relative"}>
            <Image src={video?.thumbnails[0]?.url} borderRadius={"8px"} />
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
              {isMouseOver
                ? `Keep hovering to play`
                : formatDuration(video?.lengthSeconds)}
            </Flex>
          </Flex>
        ) : (
          <>
            {video?.movingThumbnails && (
              <ThumbnailPlayer thumbnailUrl={video?.movingThumbnails[0]} />
            )}
          </>
        )}
        <Grid
          m={"4px"}
          p={"2px 4px"}
          templateColumns={"repeat(3, 1fr)"}
          templateRows={"repeat(4, 1fr)"}
          h={"100px"}
          w={"330px"}
        >
          <GridItem
            w={"40px"}
            colStart={0}
            colEnd={1}
            rowStart={0}
            rowEnd={1}
            mr={"8px"}
          >
            <Image rounded={"full"} src={video?.author?.avatar[0]?.url} />
          </GridItem>
          <GridItem
            colEnd={4}
            colStart={1}
            rowStart={0}
            rowEnd={1}
            w={"90%"}
            maxH={"50px"}
          >
            <Text fontWeight={700} fontSize={"14px"}>
              {limitTitleChars(video?.title)}
            </Text>
          </GridItem>
          <GridItem
            colStart={3}
            colEnd={4}
            rowStart={0}
            rowEnd={1}
            w={"10px"}
            h={"40px"}
            alignSelf={"flex-end"}
            ml={"70px"}
          >
            {isMouseOver ? (
              <RxDotsVertical size={"24px"} color={"grey"} />
            ) : null}
          </GridItem>
          <GridItem
            colStart={1}
            colEnd={4}
            rowStart={1}
            rowEnd={2}
            w={"100%"}
            mt={"4px"}
          >
            <Flex flexDir={"row"}>
              <Text fontSize={"12px"} mr={"8px"}>
                {video?.author?.title}
              </Text>
              {video?.author?.badges[0]?.type == VERIFIED_CHANNEL ? (
                <chakra.span mt={"3px"}>
                  <GoVerified size={"12px"} />
                </chakra.span>
              ) : null}
            </Flex>
          </GridItem>
          <GridItem colStart={1} colEnd={4} rowStart={2} rowEnd={3}>
            <UnorderedList display={"flex"} fontSize={"12px"} m={0}>
              <ListItem style={{ listStyleType: "none" }} mr={"20px"}>
                {!video?.isLiveNow
                  ? formatViewCount(video?.stats?.views)
                  : `${video?.stats?.viewers} watching`}
              </ListItem>
              {!video?.isLiveNow && (
                <ListItem>{video?.publishedTimeText}</ListItem>
              )}
            </UnorderedList>
          </GridItem>
          {video?.isLiveNow ? (
            <GridItem rowStart={3} rowEnd={4} colStart={1} colEnd={2}>
              <chakra.span
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"red"}
                color={"#FFFFFF"}
                fontWeight={600}
                fontSize={"10px"}
                p={"2px 2px"}
                w={"80px"}
              >
                <BsBroadcast size={12} /> &nbsp; Live Now
              </chakra.span>
            </GridItem>
          ) : null}
        </Grid>
      </Flex>
    </>
  );
};

export default VideoCard;
