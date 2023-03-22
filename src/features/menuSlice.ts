import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IInitialState {
  selectedMenu: object;
}

const initialState: IInitialState = {
  selectedMenu: {},
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedMenu: (state, action: PayloadAction<object>) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const getSelectedMenu = (state: RootState) => state.menu.selectedMenu;

export const { setSelectedMenu } = menuSlice.actions;
export default menuSlice.reducer;
