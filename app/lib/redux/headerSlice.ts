import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HeaderState } from "@lib/types/ReduxTypes/HeaderTypes"

const initialState: HeaderState = {
  language: "fr",
  activeLink: "Accueil",
  mobileState: false,
  isMenuRefSet: false,
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload
    },
    setMobileState(state, action: PayloadAction<boolean>) {
      state.mobileState = action.payload
    },
    setMenuRef(state, action: PayloadAction<boolean>) {
      state.isMenuRefSet = action.payload 
    },
  },
})

export const { setLanguage, setActiveLink, setMobileState, setMenuRef } =
  headerSlice.actions
export default headerSlice.reducer
