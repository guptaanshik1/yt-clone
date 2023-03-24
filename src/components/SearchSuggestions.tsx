import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { useAppSelector } from "../app/hooks";
import { getSearchText } from "../features/searchSlice";
import useSearchComplete from "../hooks/useSearchComplete";
import { searchData } from "../mocks/autoCompleteResults";

const SearchSuggestions = () => {
  const searchQuery = useAppSelector((state) => getSearchText(state));
  const { data: searchSuggestions, isLoading: isSearchSuggestionsLoading } =
    useSearchComplete(searchQuery);

  if (searchData?.length <= 0) return null;
  return (
    <UnorderedList>
      {searchData.map((item) => (
        <ListItem key={item} listStyleType={"none"} p={"8px"}>
          <Flex justifyContent={"flex-start"} alignItems={"center"}>
            <TfiSearch size={"18px"} />
            <Text ml={"20px"} color={"#000000"}>
              {item}
            </Text>
          </Flex>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default SearchSuggestions;
