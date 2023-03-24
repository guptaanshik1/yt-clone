import { RootState } from "./../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  searchQuery: string;
  resultsFor: string;
}

const initialState: InitialState = {
  searchQuery: "",
  resultsFor: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setAllSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setShowResultFor: (state, action: PayloadAction<string>) => {
      state.resultsFor = action.payload;
    },
  },
});

export const getSearchText = (state: RootState) => state.search.searchQuery;
export const getResultsFor = (state: RootState) => state.search.resultsFor;

export const { setAllSearchQuery, setShowResultFor } = searchSlice.actions;
export default searchSlice;
