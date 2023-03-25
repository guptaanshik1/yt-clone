import React from "react";
import { useSearchResultsContext } from "../utils/context";
import SearchCard from "./SearchCard";

const SearchCardsContainer = () => {
  const { contents } = useSearchResultsContext();
  return (
    <>
      {
        // @ts-ignore
        contents?.map((data) => (
          <SearchCard key={data?.video?.videoId} {...data.video} />
        ))
      }
    </>
  );
};

export default SearchCardsContainer;
