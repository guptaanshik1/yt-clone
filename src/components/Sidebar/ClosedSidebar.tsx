import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { sidebarIconsNameMap } from "../../utils/sidebarIconsNameMap";
import Icon from "../IconNames";

const ClosedSidebar = () => {
  return (
    <Flex
      position={"fixed"}
      w={"100px"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={"1em"}
    >
      {sidebarIconsNameMap.map((icon) => {
        return (
          <Flex
            key={icon.iconName}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"0.8em"}
            cursor={"pointer"}
          >
            <Icon iconName={icon.iconName} size={"24px"} />
            <Text mt={"0.4em"} fontSize={"12px"}>
              {icon.iconName}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default ClosedSidebar;
