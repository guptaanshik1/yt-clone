import React from "react";
import { useAppSelector } from "../../app/hooks";
import { getResultsFor } from "../../features/searchSlice";
import useGetSearchVideos from "./hooks/useGetSearchVideos";
import SearchResultsView from "./SearchResults.view";
import { SearchResultsContext } from "./utils/context";
import data from "../../mocks/searchResults.json";

export default function SearchResultsContainer() {
  const searchQuery = useAppSelector((state) => getResultsFor(state));
  const [showFilters, setShowFilters] = React.useState(false);
  // const { data: searchResults, isLoading: isSearchResultsLoading, refetch: refetchSearchResults } =
  //   useGetSearchVideos(searchQuery);
  const { filterGroups, contents } = data;

  return (
    <SearchResultsContext.Provider
      // @ts-ignore
      value={{
        // refetchSearchResults,
        filterGroups,
        contents,
        showFilters,
        setShowFilters,
      }}
    >
      <SearchResultsView />
    </SearchResultsContext.Provider>
  );
}
