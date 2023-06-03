import { configureStore } from "@reduxjs/toolkit";
import channelSlice from "../features/channelSlice";
import menuSlice from "../features/menuSlice";
import replySlice from "../features/replySlice";
import { searchSlice } from "../features/searchSlice";
import shortsSlice from "../features/shortsSlice";
import sidebarSlice from "../features/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice.reducer,
    menu: menuSlice,
    reply: replySlice,
    channel: channelSlice,
    shorts: shortsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
