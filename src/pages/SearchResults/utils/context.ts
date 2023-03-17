
import React from "react";

export const SearchResultsContext = React.createContext(null);

export const useSearchResultsContext = () => {
  const context = React.useContext(SearchResultsContext);
  if (!context)
    throw new Error("useSearchResultsContext can not be used outside it's provider");
  return context;
};
