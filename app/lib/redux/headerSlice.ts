import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HeaderState } from "@lib/types/HeaderTypes"

const storedHeader = localStorage.getItem("header")
const initialState: HeaderState = storedHeader
  ? JSON.parse(storedHeader)
  : {
      language: "fr",
      activeLink: "Accueil",
      mobileState: false,
      isMenuRefSet: false,
    }

const pastToLocalStorage = (state: HeaderState) => {
  localStorage.setItem("header", JSON.stringify(state))
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
      pastToLocalStorage(state)
    },
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload
      pastToLocalStorage(state)
    },
    setMobileState(state, action: PayloadAction<boolean>) {
      state.mobileState = action.payload
      pastToLocalStorage(state)
    },
    setMenuRef(state, action: PayloadAction<boolean>) {
      state.isMenuRefSet = action.payload
      pastToLocalStorage(state)
    },
  },
})

export const { setLanguage, setActiveLink, setMobileState, setMenuRef } =
  headerSlice.actions
export default headerSlice.reducer
