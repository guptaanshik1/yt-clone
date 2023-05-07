import {
  Button,
  Flex,
  Image,
  Text,
  chakra,
  Menu,
  IconButton,
  MenuButton,
  ResponsiveValue,
} from "@chakra-ui/react";
import useGetColorMode from "../../../hooks/useGetColorMode";
import { useWatchPageContext } from "../utils/context";
import { TbShare3 } from "react-icons/tb";
import { formatViewCount } from "../../../utils/viewCountFormatter";
import React from "react";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiTwotoneLike,
  AiTwotoneDislike,
} from "react-icons/ai";
import useScreenSize from "../../../hooks/useScreenSize";

const VideoDetails = () => {
  const { videoDetails } = useWatchPageContext();
  const [isLiked, setIsLiked] = React.useState(false);
  const [isDisliked, setIsDisliked] = React.useState(false);
  const { colorMode } = useGetColorMode();
  const { isSmallScreen, isLargeScreen, isMediumScreen } = useScreenSize();

  const handleLiking = () => {
    setIsDisliked(false);
    setIsLiked(!isLiked);
  };

  const handleDisliking = () => {
    setIsLiked(false);
    setIsDisliked(!isDisliked);
  };

  const checkWidth = (): ResponsiveValue<number | (string & {})> => {
    if (isSmallScreen) {
      return "96%";
    } else if (isMediumScreen) {
      return "95%";
    } else {
      return "900px";
    }
  };

  return (
    <Flex
      w={checkWidth()}
      flexDir={"column"}
      m={"20px"}
      justifyContent={"space-between"}
    >
      <Flex w={"100%"} p={"0 4px"} mb={"5px"}>
        <Text fontSize={"22px"} fontWeight={500}>
          {videoDetails?.title}
        </Text>
      </Flex>
      <Flex flexDir={isSmallScreen ? "column" : "row"}>
        <Flex
          w={"100%"}
          alignItems={"center"}
          mr={!isLargeScreen ? "155px" : "0"}
        >
          <Flex>
            <Image
              src={videoDetails?.author?.avatar[0]?.url}
              rounded={"full"}
            />
          </Flex>
          <Flex flexDir={"column"} ml={"10px"} justifyContent={"center"}>
            <Text cursor={"pointer"} fontWeight={500}>
              {videoDetails?.author?.title}
            </Text>
            <Text fontSize={"12px"}>
              {videoDetails?.author?.stats?.subscribersText}
            </Text>
          </Flex>
          <Button
            ml={"30px"}
            rounded={"full"}
            bgColor={colorMode == "dark" ? "#FFFFFF" : "#000000"}
            color={colorMode == "light" ? "#FFFFFF" : "#000000"}
            _hover={{ opacity: 0.8 }}
          >
            Subscribe
          </Button>
        </Flex>

        <Flex
          alignItems={"center"}
          w={isLargeScreen ? "100%" : "96%"}
          mt={isSmallScreen ? "10px" : "0"}
        >
          {/* Flex for like and dislike */}
          <Flex
            rounded={"full"}
            w={isSmallScreen ? "20%" : "40%"}
            bgColor={colorMode == "light" ? "#f2f2f2" : "rgb(47 46 46)"}
            p={"8px"}
            justifyContent={"space-between"}
          >
            <Flex
              cursor={"pointer"}
              alignItems={"center"}
              onClick={handleLiking}
              _hover={{ opacity: 0.4 }}
            >
              {!isLiked ? (
                <AiOutlineLike
                  size={"22px"}
                  color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
                />
              ) : (
                <AiTwotoneLike
                  size={"22px"}
                  color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
                />
              )}
              <Text
                ml={"8px"}
                fontSize={"10px"}
                color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
              >
                {formatViewCount(videoDetails?.stats?.likes)}
              </Text>
            </Flex>
            <chakra.span>{"|"}</chakra.span>
            <Flex
              cursor={"pointer"}
              alignItems={"center"}
              _hover={{ opacity: 0.4 }}
              onClick={handleDisliking}
            >
              {!isDisliked ? (
                <AiOutlineDislike
                  size={"22px"}
                  color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
                />
              ) : (
                <AiTwotoneDislike
                  size={"22px"}
                  color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
                />
              )}
            </Flex>
          </Flex>
          {/* Share button */}
          <Button
            rounded={"full"}
            bgColor={colorMode == "light" ? "#f2f2f2" : "rgb(47 46 46)"}
            p={"8px"}
            w={"100px"}
            ml={"20px"}
            _hover={{ opacity: 0.4 }}
            color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
          >
            <TbShare3 size={"22px"} />
            &nbsp;{"Share"}
          </Button>
          {(isLargeScreen || isSmallScreen) && (
            <Button
              rounded={"full"}
              bgColor={colorMode == "light" ? "#f2f2f2" : "rgb(47 46 46)"}
              p={"8px"}
              w={"140px"}
              ml={"20px"}
              _hover={{ opacity: 0.4 }}
              color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
            >
              <TfiDownload size={"18px"} />
              &nbsp;{"Download"}
            </Button>
          )}
          <Menu>
            <MenuButton
              ml={"16px"}
              as={IconButton}
              color={colorMode == "dark" ? "#FFFFFF" : "#000000"}
              bgColor={colorMode == "light" ? "#f2f2f2" : "rgb(47 46 46)"}
              rounded={"full"}
              px={2}
              _focus={{}}
              _hover={{
                opacity: 0.4,
                rounded: true,
                borderRadius: "full",
              }}
              _active={{
                rounded: true,
                borderRadius: "full",
              }}
            >
              <BsThreeDots />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VideoDetails;
