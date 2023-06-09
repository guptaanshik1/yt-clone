import { Divider, Flex, Skeleton, Text } from "@chakra-ui/react";
import { RiEqualizerFill } from "react-icons/ri";
import FilterContainer from "./components/Filters/FilterContainer";
import SearchCardsContainer from "./components/SearchCardsContainer";
import { useSearchResultsContext } from "./utils/context";

export default function SearchResultsView() {
  const { showFilters, setShowFilters, isSearchResultLoading } =
    useSearchResultsContext();

  if (isSearchResultLoading) {
    return Array.from({ length: 9 }, (x, id) => {
      return (
        <Flex m={"40px 100px"} flexWrap={"wrap"} h={"100px"}>
          <Skeleton p={"2px 8px"} w={"100%"} key={id} />
        </Flex>
      );
    });
  }

  return (
    <Flex
      flexWrap={"wrap"}
      flexDir={"column"}
      w={"85%"}
      ml={"150px"}
      mt={"30px"}
      justifyContent={"flex-start"}
      zIndex={99}
    >
      <Flex
        cursor={"pointer"}
        w={"12%"}
        alignItems={"center"}
        p={"4px"}
        _hover={{ background: "#f2f2f2", rounded: "full" }}
        onClick={() => {
          // @ts-ignore
          setShowFilters(!showFilters);
        }}
      >
        <RiEqualizerFill size={"18px"} style={{ marginLeft: "8px" }} />
        <Text ml={"6px"} fontSize={"20px"} fontWeight={500}>
          Filters
        </Text>
      </Flex>
      {showFilters && <FilterContainer />}
      <Divider />
      <Flex flexDir={"column"} w={"100%"}>
        <SearchCardsContainer />
      </Flex>
    </Flex>
  );
}
