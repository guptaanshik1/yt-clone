import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
