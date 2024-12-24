import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HeaderState } from "@lib/types/HeaderTypes"

const isClient = typeof window !== "undefined";

const storedHeader = isClient ? localStorage.getItem("header") : null;
const initialState: HeaderState = storedHeader
  ? JSON.parse(storedHeader)
  : {
      language: "fr",
      activeLink: "Accueil",
      mobileState: false,
      isMenuRefSet: false,
    };

const saveToLocalStorage = (state: HeaderState) => {
  if (isClient) {
    localStorage.setItem("header", JSON.stringify(state));
  }
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
      saveToLocalStorage(state);
    },
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload;
      saveToLocalStorage(state);
    },
    setMobileState(state, action: PayloadAction<boolean>) {
      state.mobileState = action.payload;
      saveToLocalStorage(state);
    },
    setMenuRef(state, action: PayloadAction<boolean>) {
      state.isMenuRefSet = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const { setLanguage, setActiveLink, setMobileState, setMenuRef } =
  headerSlice.actions
export default headerSlice.reducer
