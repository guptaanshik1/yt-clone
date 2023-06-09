import { RootState } from "./../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  searchQuery: string;
  resultsFor: string;
  cacheResults: Record<string, string>;
  toggleSuggestions: boolean;
  isSmallScreenSearchVisible: boolean;
}

const initialState: InitialState = {
  searchQuery: "",
  resultsFor: "",
  cacheResults: {},
  toggleSuggestions: false,
  isSmallScreenSearchVisible: false,
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
    setCacheResults: (state, action: PayloadAction<{}>) => {
      state.cacheResults = { ...state.cacheResults, ...action.payload };
    },
    setOpenSuggestions: (state, action: PayloadAction<boolean>) => {
      state.toggleSuggestions = action.payload;
    },
    setSmallScreenVisible: (state, action: PayloadAction<boolean>) => {
      state.isSmallScreenSearchVisible = action.payload;
    },
  },
});

export const getSearchText = (state: RootState) => state.search.searchQuery;
export const getResultsFor = (state: RootState) => state.search.resultsFor;

export const {
  setAllSearchQuery,
  setShowResultFor,
  setCacheResults,
  setOpenSuggestions,
  setSmallScreenVisible,
} = searchSlice.actions;
export default searchSlice;
