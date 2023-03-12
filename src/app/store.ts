import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
