import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/searchSlice";
import sidebarSlice from "../features/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
