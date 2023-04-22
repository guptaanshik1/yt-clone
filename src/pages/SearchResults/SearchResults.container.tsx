import React from "react";
import { useAppSelector } from "../../app/hooks";
import useGetSearchVideos from "./hooks/useGetSearchVideos";
import SearchResultsView from "./SearchResults.view";
import { SearchResultsContext } from "./utils/context";
import data from "../../mocks/searchResults.json";
import { getResultsFor } from "../../features/searchSlice";

export default function SearchResultsContainer() {
  // const searchQuery = useAppSelector((state) => getResultsFor(state));
  const searchQuery = useAppSelector((state) => {
    console.log(state);
    return getResultsFor(state);
  });
  const [showFilters, setShowFilters] = React.useState(false);
  // const { filterGroups } = data;

  const {
    mutate: searchResultsMutate,
    data: searchResults,
    isLoading: isSearchResultsLoading,
  } = useGetSearchVideos();

  React.useEffect(() => {
    searchResultsMutate({ q: searchQuery });
  }, [searchQuery]);

  const contents = searchResults?.contents;
  const filterGroups = searchResults?.filterGroups;

  return (
    <SearchResultsContext.Provider
      // @ts-ignore
      value={{
        filterGroups,
        contents,
        showFilters,
        setShowFilters,
        searchResultsMutate,
        searchQuery,
        isSearchResultsLoading,
      }}
    >
      <SearchResultsView />
    </SearchResultsContext.Provider>
  );
}
