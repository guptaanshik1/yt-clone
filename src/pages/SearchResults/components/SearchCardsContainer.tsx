import React from "react";
import { Link } from "react-router-dom";
import { useSearchResultsContext } from "../utils/context";
import SearchCard from "./SearchCard";

const SearchCardsContainer = () => {
  const { contents } = useSearchResultsContext();
  return (
    <>
      {
        // @ts-ignore
        contents?.map((data) => (
          <Link key={data?.video?.videoId} to={`/watch?v=${data?.video?.videoId}`}>
            <SearchCard {...data.video} />
          </Link>
        ))
      }
    </>
  );
};

export default SearchCardsContainer;
