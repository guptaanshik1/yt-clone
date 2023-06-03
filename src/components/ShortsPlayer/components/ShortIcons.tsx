import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { RxDotsHorizontal } from "react-icons/rx";
import IconRender from "./IconRender";
import {
  MdInsertComment,
  MdOutlineFeedback,
  MdOutlineOutlinedFlag,
} from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { BsJustifyLeft } from "react-icons/bs";
import { BiCaptions } from "react-icons/bi";
import { IoBanOutline } from "react-icons/io5";
import { useShortsPlayerContext } from "../utils/context";
import React from "react";

const ShortIcons = () => {
  const { isDark } = useShortsPlayerContext();

  const [toggleLikeDislike, setToggleLikeDislike] = React.useState<{
    like: boolean;
    dislike: boolean;
  }>({
    like: false,
    dislike: false,
  });

  const handleLikeDisLike = (field: keyof typeof toggleLikeDislike) => {
    console.log("field clicked:", [field]);
    setToggleLikeDislike((prev) => {
      if (field === "like" && prev.dislike) {
        return {
          like: true,
          dislike: false,
        };
      }

      if (field === "dislike" && prev.like) {
        return {
          like: false,
          dislike: true,
        };
      }

      return {
        ...prev,
        [field]: !prev[field],
      };
    });
  };

  return (
    <Flex ml={"20px"} flexDir={"column"} gridGap={"20px"}>
      <IconRender bg={toggleLikeDislike["like"] ? "black" : "#f2f2f2"}>
        {!toggleLikeDislike["like"] ? (
          <AiFillLike
            size={"22px"}
            color={"black"}
            onClick={() => handleLikeDisLike("like")}
          />
        ) : (
          <AiFillLike
            size={"22px"}
            color={"white"}
            onClick={() => handleLikeDisLike("like")}
          />
        )}
      </IconRender>
      <IconRender bg={toggleLikeDislike["dislike"] ? "black" : "#f2f2f2"}>
        {!toggleLikeDislike["dislike"] ? (
          <AiFillDislike
            size={"22px"}
            color={"black"}
            onClick={() => handleLikeDisLike("dislike")}
          />
        ) : (
          <AiFillDislike
            size={"22px"}
            color={"white"}
            onClick={() => handleLikeDisLike("dislike")}
          />
        )}
      </IconRender>
      <IconRender bg={isDark ? "#272727" : "#f2f2f2"}>
        <RiShareForwardFill size={"22px"} color={isDark ? "white" : "black"} />
      </IconRender>
      <IconRender bg={isDark ? "#272727" : "#f2f2f2"}>
        <MdInsertComment size={"22px"} color={isDark ? "white" : "black"} />
      </IconRender>
      <Menu>
        <MenuButton
          bgColor={"none"}
          _hover={{ background: "none" }}
          as={IconButton}
          borderRadius={"50%"}
          color={isDark ? "white" : "black"}
        >
          <IconRender bg={isDark ? "#272727" : "#f2f2f2"}>
            <RxDotsHorizontal size={"22px"} />
          </IconRender>
        </MenuButton>
        <MenuList>
          <MenuItem color={"#0f0f0f"}>
            <BsJustifyLeft size={"20px"} />
            &nbsp;&nbsp; Description
          </MenuItem>
          <MenuItem color={"#0f0f0f"}>
            <BiCaptions size={"20px"} />
            &nbsp;&nbsp; Captions
          </MenuItem>
          <MenuItem color={"#0f0f0f"}>
            <IoBanOutline size={"20px"} />
            &nbsp;&nbsp; Don't recommend this channel
          </MenuItem>
          <MenuItem color={"#0f0f0f"}>
            <MdOutlineOutlinedFlag size={"20px"} />
            &nbsp;&nbsp; Report
          </MenuItem>
          <MenuItem color={"#0f0f0f"}>
            <MdOutlineFeedback size={"20px"} />
            &nbsp;&nbsp; Send Feedback
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ShortIcons;
