import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VideoDetails, HeroState } from "@/app/lib/types/HerosectionTypes"

const initialState: HeroState = {
  activePopupId: null,
  popUpState: false,
  videoData: [],
  videoLoadingState: false,
}

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setActivePopupId(state, action: PayloadAction<string | null>) {
      state.activePopupId = action.payload
    },
    togglePopupState(state) {
      state.popUpState = !state.popUpState
    },
    setVideoData(state, action: PayloadAction<VideoDetails[]>) {
      state.videoData = action.payload
    },
    setVideoLoadingState(state, action: PayloadAction<boolean>) {
      state.videoLoadingState = action.payload
    },
  },
})

export const {
  setActivePopupId,
  togglePopupState,
  setVideoData,
  setVideoLoadingState,
} = heroSlice.actions
export default heroSlice.reducer
