import React from "react";
import { useAppSelector } from "../../app/hooks";
import { getResultsFor } from "../../features/searchSlice";
import useGetSearchVideos from "./hooks/useGetSearchVideos";
import SearchResultsView from "./SearchResults.view";
import { SearchResultsContext } from "./utils/context";

export default function SearchResultsContainer() {
  const searchQuery = useAppSelector((state) => getResultsFor(state));
  const { data: searchResults, isLoading: isSearchResultsLoading } =
    useGetSearchVideos(searchQuery);

  return (
    <SearchResultsContext.Provider
      // @ts-ignore
      value={{}}
    >
      <SearchResultsView />
    </SearchResultsContext.Provider>
  );
}
