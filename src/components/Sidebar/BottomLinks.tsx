import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { aboveLinks, belowLinks } from "../../utils/sidebarLinkNames";

const BottomLinks = () => {
  return (
    <>
      <Flex flexWrap={"wrap"}>
        {aboveLinks.map((link) => (
          <Text
            key={link}
            fontSize={"12px"}
            fontWeight={700}
            color={"gray.500"}
            p={"1px 4px"}
          >
            {link}
          </Text>
        ))}
      </Flex>
      <br />
      <Flex flexWrap={"wrap"}>
        {belowLinks.map((link) => (
          <Text
            key={link}
            fontSize={"12px"}
            fontWeight={700}
            color={"gray.500"}
            p={"1px 4px"}
          >
            {link}
          </Text>
        ))}
      </Flex>
    </>
  );
};

export default BottomLinks;
