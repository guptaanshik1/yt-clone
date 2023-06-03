import { Flex } from "@chakra-ui/react";
import React from "react";
import { useShortsPlayerContext } from "../utils/context";

interface IProps {
  children: React.ReactNode;
  bg: string;
}

const IconRender = ({ children, bg }: IProps) => {
  const { isDark } = useShortsPlayerContext();

  return (
    <Flex
      borderRadius={"50%"}
      p={"10px"}
      bgColor={bg}
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      {children}
    </Flex>
  );
};

export default IconRender;
