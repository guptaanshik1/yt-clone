import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ALL_COLLECTIONS_FILTER,
  ALL_COLLECTIONS_TITLE,
  TChannelsFilter,
} from "../pages/Channel/utils/constants";

interface IInitialState {
  channelName: string;
  channelChannelsFilter: TChannelsFilter[];
}

const initialState: IInitialState = {
  channelName: "",
  channelChannelsFilter: [
    {
      filter: ALL_COLLECTIONS_FILTER,
      title: ALL_COLLECTIONS_TITLE,
    },
  ],
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelId: (state, action: PayloadAction<string>) => {
      state.channelName = action.payload;
    },
    setChannnelsFilters: (state, action: PayloadAction<TChannelsFilter[]>) => {
      state.channelChannelsFilter = [...action.payload];
    },
  },
});

export const { setChannelId, setChannnelsFilters } = channelSlice.actions;
export default channelSlice.reducer;
