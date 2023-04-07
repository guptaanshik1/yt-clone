import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IInitialState {
  commentIds: Array<string>;
}

const initialState: IInitialState = {
  commentIds: [],
};

const replySlice = createSlice({
  name: "reply",
  initialState,
  reducers: {
    setCommentIds: (state, action: PayloadAction<string>) => {
      state.commentIds = [...state.commentIds, action.payload];
    },
  },
});

export const { setCommentIds } = replySlice.actions;
export default replySlice.reducer;
