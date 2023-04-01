import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { GoVerified } from "react-icons/go";
import { VscPinned } from "react-icons/vsc";
import { VERIFIED_CHANNEL } from "../../../../constants/homePageConstants";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiTwotoneLike,
  AiTwotoneDislike,
} from "react-icons/ai";
import { useWatchPageContext } from "../../utils/context";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { formatViewCount } from "../../../../utils/viewCountFormatter";

interface IProps {
  comment: Object;
}

const Comment = ({ comment }: IProps) => {
  const { videoDetails } = useWatchPageContext();
  const [toggleLikeDislike, setToggleLikeDislike] = React.useState<{
    liked: boolean;
    disliked: boolean;
  }>({
    liked: false,
    disliked: false,
  });

  const handleLikeDislike = (field: keyof typeof toggleLikeDislike) => {
    setToggleLikeDislike((prev) => {
      if (field == "liked" && prev.disliked) {
        return {
          liked: true,
          disliked: false,
        };
      }
      if (field == "disliked" && prev.liked) {
        return {
          liked: false,
          disliked: true,
        };
      }

      return {
        ...prev,
        [field]: !prev[field],
      };
    });
  };

  return (
    <Flex mb={"20px"}>
      <Flex w={"auto"} h={"60%"} mr={"10px"}>
        <Image
          src={comment?.author?.avatar[0]?.url}
          objectFit={"cover"}
          rounded={"full"}
        />
      </Flex>
      <Flex flexDir={"column"} w={"100%"}>
        <Flex alignItems={"center"} justifyContent={"flex-start"}>
          {comment?.pinned.status && (
            <>
              <VscPinned size={"10px"} />
              <Text ml={"8px"} fontSize={"10px"}>
                {comment?.pinned?.text}
              </Text>
            </>
          )}
        </Flex>
        <Flex alignItems={"center"} justifyContent={"flex-start"}>
          <Text fontSize={"14px"} fontWeight={700} mr={"6px"}>
            {comment?.author?.title}
          </Text>
          {comment?.author?.badges[0]?.type == VERIFIED_CHANNEL && (
            <GoVerified style={{ marginRight: "8px" }} />
          )}
          <Text fontSize={"14px"} fontWeight={400}>
            {comment?.publishedTimeText}
          </Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"flex-start"}>
          <Text fontSize={"16px"} flexWrap={"wrap"} my={"2px"}>
            {comment?.content}
          </Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"flex-start"}>
          {!toggleLikeDislike["liked"] ? (
            <AiOutlineLike
              size={"18px"}
              cursor={"pointer"}
              onClick={() => handleLikeDislike("liked")}
            />
          ) : (
            <AiTwotoneLike
              size={"18px"}
              cursor={"pointer"}
              onClick={() => handleLikeDislike("liked")}
            />
          )}
          <Text
            ml={"4px"}
            mr={"14px"}
            fontSize={"10px"}
            fontWeight={400}
            lineHeight={"20px"}
          >
            {formatViewCount(comment?.stats?.votes)}
          </Text>
          {!toggleLikeDislike["disliked"] ? (
            <AiOutlineDislike
              size={"18px"}
              cursor={"pointer"}
              onClick={() => handleLikeDislike("disliked")}
            />
          ) : (
            <AiTwotoneDislike
              size={"18px"}
              cursor={"pointer"}
              onClick={() => handleLikeDislike("disliked")}
            />
          )}
          {comment?.creatorHeart && (
            <div style={{ position: "relative", margin: "0 20px" }}>
              <Image
                src={videoDetails?.author?.avatar[0]?.url}
                w={"20px"}
                rounded={"full"}
                objectFit={"contain"}
              />
              <BsFillSuitHeartFill
                size={"14px"}
                color="red"
                style={{
                  bottom: -2,
                  right: 0,
                  position: "absolute",
                }}
              />
            </div>
          )}
          <Text fontWeight={700} cursor={"pointer"} mx={"20px"}>
            Reply
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Comment;
