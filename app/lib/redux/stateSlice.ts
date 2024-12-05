import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StateSlice {
  language: string
  activeLink: string
}

const initialState: StateSlice = {
  language: "fr",
  activeLink: "Accueil",
}

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload
    },
  },
})

export const { setLanguage, setActiveLink } = stateSlice.actions
export default stateSlice.reducer
