import { Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { FiClock } from "react-icons/fi";
import { RiPlayList2Fill } from "react-icons/ri";
import { RxDotsVertical } from "react-icons/rx";
import { formatDuration } from "../../../utils/formatDuration";
import { limitTitleChars } from "../../../utils/limitTitleChars";
import { formatViewCount } from "../../../utils/viewCountFormatter";

interface IProps {
  video: any;
}

const AllLiveTabs = ({ video }: IProps) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [showText, setShowText] = React.useState<
    "watch later" | "add to queue" | ""
  >("");

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
    setShowText("");
  };
  return (
    <>
      <Flex
        flexDir={"column"}
        flexWrap={"wrap"}
        w={"30%"}
        m={"10px 10px"}
        cursor={"pointer"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        borderRadius={"18px"}
        position={"relative"}
        // ref={ulRef}
      >
        {/* {isFetchingNextPage && (
          <div style={{ position: "absolute" }}>
            <Spinner size={"xl"} color={"blue"} />
          </div>
        )} */}
        <Flex position={"relative"} w={"100%"}>
          <Image
            borderRadius={"8px"}
            w={"100%"}
            objectFit={"contain"}
            h={"200px"}
            src={video?.thumbnails[0]?.url}
          />
          <Flex
            position={"absolute"}
            bottom={0}
            right={3}
            fontSize={"14px"}
            backgroundColor={"#000000"}
            color={"#FFFFFF"}
            borderRadius={"4px"}
            p={"2px"}
          >
            {formatDuration(video?.lengthSeconds)}
          </Flex>
        </Flex>
        <Flex w={"100%"} flexDir={"column"} m={"4px"}>
          <Flex
            w={"100%"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontWeight={700} fontSize={"14px"}>
              {limitTitleChars(video?.title)}
            </Text>
            {isMouseOver && <RxDotsVertical size={"18px"} color={"grey"} />}
          </Flex>
          <Flex mt={"4px"}>
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
        {isMouseOver && (
          <Flex
            position={"absolute"}
            flexDir={"column"}
            gridGap={"6px"}
            color={"#ffffff"}
            right={1}
            m={"4px"}
          >
            <Flex
              bgColor={"#000000"}
              p={"4px"}
              borderRadius={"4px"}
              alignItems={"center"}
              justifyContent={"space-around"}
              gridGap={"4px"}
              onMouseOver={(e) => {
                e.stopPropagation();
                console.log("mouse over watch later");
                setShowText("watch later");
              }}
              onMouseOut={() => {
                console.log("mouse out watch later");
                setShowText("");
              }}
            >
              {showText === "watch later" && <Text>Watch later</Text>}
              <FiClock size={"20px"} />
            </Flex>
            <Flex
              bgColor={"#000000"}
              p={"4px"}
              borderRadius={"4px"}
              alignItems={"center"}
              gridGap={"4px"}
              onMouseOver={(e) => {
                e.stopPropagation();
                console.log("mouse over add to queue");
                setShowText("add to queue");
              }}
              onMouseOut={() => {
                console.log("mouse out add to queue");
                setShowText("");
              }}
            >
              {showText === "add to queue" && <Text>Add to queue</Text>}
              <RiPlayList2Fill size={"20px"} />
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default AllLiveTabs;
