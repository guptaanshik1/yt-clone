import { RootState } from "./../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  searchQuery: string;
}

const initialState: InitialState = {
  searchQuery: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setAllSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const getSearchText = (state: RootState) => state.search.searchQuery;

export const { setAllSearchQuery } = searchSlice.actions;
export default searchSlice;
