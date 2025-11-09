import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UiState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}

const initialState: UiState = {
  isScrolled: false,
  isMobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsScrolled(state, action: PayloadAction<boolean>) {
      state.isScrolled = action.payload;
    },
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.isMobileMenuOpen = action.payload;
    },
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const { setIsScrolled, setMobileMenuOpen, toggleMobileMenu } =
  uiSlice.actions;
export default uiSlice.reducer;
