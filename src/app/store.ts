import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../features/menuSlice";
import replySlice from "../features/replySlice";
import { searchSlice } from "../features/searchSlice";
import sidebarSlice from "../features/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice.reducer,
    menu: menuSlice,
    reply: replySlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
