import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IInitialState {
  isMenuOpen: boolean;
  currentlySelected: {
    Appearance?: string;
    Language?: string;
    Location?: string;
    RestrictedMode?: string;
  };
  selectedMenu: {
    label: string;
    subMenuHeading?: string;
    currentlySelected?: string;
    subMenuItems?: Array<{ label: string }>;
  };
}

const initialState: IInitialState = {
  isMenuOpen: false,
  currentlySelected: {
    Appearance: "Light Theme",
    Language: "English (US)",
    Location: "India",
    RestrictedMode: "",
  },
  selectedMenu: {
    label: "",
    subMenuHeading: "",
    currentlySelected: "",
    subMenuItems: [],
  },
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedMenu: (
      state,
      action: PayloadAction<IInitialState["selectedMenu"]>
    ) => {
      state.selectedMenu = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setCurrentlySelectedItem: (
      state,
      action: PayloadAction<Partial<IInitialState["currentlySelected"]>>
    ) => {
      state.currentlySelected = {
        ...state.currentlySelected,
        ...action.payload,
      };
    },
  },
});

export const getSelectedMenu = (state: RootState) => state.menu.selectedMenu;
export const isMenuOpen = (state: RootState) => state.menu.isMenuOpen;
export const getCurrentlySelectedItem = (state: RootState) =>
  state.menu.currentlySelected;

export const {
  setSelectedMenu,
  toggleMenu,
  closeMenu,
  setCurrentlySelectedItem,
} = menuSlice.actions;
export default menuSlice.reducer;
