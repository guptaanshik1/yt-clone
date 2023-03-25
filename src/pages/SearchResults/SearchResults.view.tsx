import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiEqualizerFill } from "react-icons/ri";
import SearchCardsContainer from "./components/SearchCardsContainer";
import { useSearchResultsContext } from "./utils/context";

export default function SearchResultsView() {
  const { filterGroups } = useSearchResultsContext();
  return (
    <Flex
      flexWrap={"wrap"}
      flexDir={"column"}
      w={"85%"}
      ml={"150px"}
      mt={"30px"}
      justifyContent={"flex-start"}
    >
      <Flex cursor={"pointer"} w={"10%"} alignItems={"center"} p={"4px"}>
        <RiEqualizerFill size={"18px"} />
        <Text ml={"6px"} fontSize={"20px"} fontWeight={300}>
          Filters
        </Text>
      </Flex>
      <Divider />
      <Flex flexDir={"column"} w={"100%"}>
        <SearchCardsContainer />
      </Flex>
    </Flex>
  );
}
