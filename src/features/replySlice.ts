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
    removeCommentId: (state, action: PayloadAction<string>) => {
      state.commentIds = state.commentIds.filter((id) => id !== action.payload);
    },
  },
});

export const { setCommentIds, removeCommentId } = replySlice.actions;
export default replySlice.reducer;
