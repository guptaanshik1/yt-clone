import { Flex } from "@chakra-ui/react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { RxDotsHorizontal } from "react-icons/rx";
import IconRender from "./IconRender";
import { MdInsertComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";

const ShortIcons = () => {
  return (
    <Flex ml={"20px"} flexDir={"column"} gridGap={"20px"}>
      <IconRender>
        <AiFillLike size={"22px"} />
      </IconRender>
      <IconRender>
        <AiFillDislike size={"22px"} />
      </IconRender>
      <IconRender>
        <RiShareForwardFill size={"22px"} />
      </IconRender>
      <IconRender>
        <MdInsertComment size={"22px"} />
      </IconRender>
      <IconRender>
        <RxDotsHorizontal size={"22px"} />
      </IconRender>
    </Flex>
  );
};

export default ShortIcons;
