import React from "react";
import { useAppSelector } from "../../app/hooks";
import useGetSearchVideos from "./hooks/useGetSearchVideos";
import SearchResultsView from "./SearchResults.view";
import { SearchResultsContext } from "./utils/context";
import data from "../../mocks/searchResults.json";
import { getResultsFor } from "../../features/searchSlice";
import useIntersectionObserver from "../../services/useIntersectionObserver";
import { IContent, IFilterGroup } from "../../types/types";

export default function SearchResultsContainer() {
  // const searchQuery = useAppSelector((state) => getResultsFor(state));
  const searchQuery = useAppSelector((state) => {
    return getResultsFor(state);
  });
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(false);
  // const [contents, setContents] = React.useState<IContent[]>([]);
  // const [filterGroups, setFilterGroups] = React.useState<IFilterGroup[]>([]);
  // const { filterGroups, contents } = data;

  const ulRef = React.useRef<HTMLUListElement>(null);

  const {
    data,
    isLoading: isSearchResultLoading,
    refetch: refetchFilteredData,
    fetchNextPage,
    hasNextPage,
  } = useGetSearchVideos(searchQuery);

  useIntersectionObserver(fetchNextPage, hasNextPage, ulRef);

  const contents = data?.pages?.flatMap((page) => page?.contents);
  const filterGroups = data?.pages?.flatMap((page) => page?.filterGroups);

  return (
    <SearchResultsContext.Provider
      // @ts-ignore
      value={{
        filterGroups,
        contents,
        showFilters,
        setShowFilters,
        searchQuery,
        ulRef,
        isSearchResultLoading,
        hasNextPage,
        refetchFilteredData,
        selectedOption,
        setSelectedOption,
      }}
    >
      <SearchResultsView />
    </SearchResultsContext.Provider>
  );
}
