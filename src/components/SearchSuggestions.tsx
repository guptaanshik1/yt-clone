import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getSearchText,
  setCacheResults,
  setOpenSuggestions,
  setShowResultFor,
} from "../features/searchSlice";
import useSearchComplete from "../hooks/useSearchComplete";
import searchSuggestions from "../mocks/autoCompleteResults.json";

const SearchSuggestions = () => {
  const searchQuery = useAppSelector((state) => getSearchText(state));
  const cacheResults = useAppSelector((state) => state.search.cacheResults);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  const {
    data: searchSuggestions,
    isLoading: isSearchSuggestionsLoading,
    refetch,
  } = useSearchComplete(searchQuery);

  React.useEffect(() => {
    if (!isSearchSuggestionsLoading) {
      setSuggestions(searchSuggestions?.results as string[]);
      dispatch(setOpenSuggestions(true));
      dispatch(
        setCacheResults({
          [searchQuery]: searchSuggestions?.results,
        })
      );
    }
  }, [isSearchSuggestionsLoading, searchSuggestions]);

  React.useEffect(() => {
    let timeoutId: number;
    timeoutId = setTimeout(() => {
      if (searchQuery !== "") {
        if (cacheResults[searchQuery]) {
          setSuggestions([...cacheResults[searchQuery]]);
        } else {
          refetch();
        }
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  if ((searchSuggestions?.results?.length as number) <= 0) {
    return null;
  }

  return (
    <UnorderedList>
      {suggestions?.map((item: string) => (
        <ListItem
          key={item}
          listStyleType={"none"}
          p={"8px"}
          cursor={"pointer"}
          onClick={() => {
            dispatch(setShowResultFor(item));
            dispatch(setOpenSuggestions(false));
            navigate("/results");
          }}
        >
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
