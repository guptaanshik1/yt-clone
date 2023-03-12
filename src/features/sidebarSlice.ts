import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isOpen: boolean;
};

const initialState: InitialState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
