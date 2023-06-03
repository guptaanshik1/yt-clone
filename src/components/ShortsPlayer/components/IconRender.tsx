import { Flex } from "@chakra-ui/react";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const IconRender = ({ children }: IProps) => {
  return (
    <Flex
      borderRadius={"50%"}
      p={"10px"}
      bgColor={"#f2f2f3"}
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      {children}
    </Flex>
  );
};

export default IconRender;
