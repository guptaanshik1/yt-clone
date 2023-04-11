import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  channelName: string;
}

const initialState: IInitialState = {
  channelName: "",
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelId: (state, action: PayloadAction<string>) => {
      state.channelName = action.payload;
    },
  },
});

export const { setChannelId } = channelSlice.actions;
export default channelSlice.reducer;
