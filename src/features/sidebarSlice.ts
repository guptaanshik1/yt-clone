import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type InitialState = {
  isOpen: boolean;
  showSidebar: boolean;
};

const initialState: InitialState = {
  isOpen: false,
  showSidebar: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
    openSidebar: (state) => {
      state.showSidebar = true;
    },
  },
});

export const hasToShowSidebar = (state: RootState) => state.sidebar.showSidebar;

export const { toggleSidebar, closeSidebar, openSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
