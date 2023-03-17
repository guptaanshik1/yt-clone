
import React from "react";
import SearchResultsView from "./SearchResults.view";
import { SearchResultsContext } from "./utils/context";

export default function SearchResultsContainer() {
    const [count, setCount] = React.useState(1);
    return (
    <SearchResultsContext.Provider
    // @ts-ignore
        value={{
        count: count,
        }}
    >
        <SearchResultsView />
    </SearchResultsContext.Provider>
    );
}
