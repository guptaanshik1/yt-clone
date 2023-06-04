import { Flex } from "@chakra-ui/react";
import React from "react";
import { useShortsPlayerContext } from "../utils/context";

interface IProps {
  children: React.ReactNode;
  bg: string;
  isSelected: boolean;
}

const IconRender = ({ children, bg, isSelected }: IProps) => {
  const { showComments } = useShortsPlayerContext();
  const setBgColor = () => {
    if (showComments) {
      return isSelected ? "white" : "transparent";
    } else {
      return bg;
    }
  };

  return (
    <Flex
      borderRadius={"50%"}
      p={"10px"}
      bgColor={setBgColor()}
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      {children}
    </Flex>
  );
};

export default IconRender;
