
import React from "react";
import { useSearchResultsContext } from "./utils/context";

export default function SearchResultsView() {
    const { count } = useSearchResultsContext();
    return <p>SearchResults View and count is {count}</p>;
}    
