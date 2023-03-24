import React from "react";
import { useAppSelector } from "../app/hooks";
import { getSearchText } from "../features/searchSlice";
import useSearchComplete from "../hooks/useSearchComplete";

const SearchSuggestions = () => {
  const searchQuery = useAppSelector((state) => getSearchText(state));
  const { data: searchSuggestions, isLoading: isSearchSuggestionsLoading } = 
    useSearchComplete(searchQuery);
  return <></>;
};

export default SearchSuggestions;
