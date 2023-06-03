import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  shortId: string;
};

const initialState: TInitialState = {
  shortId: "",
};

const shortSlice = createSlice({
  name: "shorts",
  initialState,
  reducers: {
    setShortId: (state, action: PayloadAction<string>) => {
      state.shortId = action.payload;
    },
  },
});

export const { setShortId } = shortSlice.actions;
export default shortSlice.reducer;
