import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VideoData, HeroState } from "@/app/lib/types/HeroSectionTypes"

const initialState: HeroState = {
  activePopupId: null,
  popUpState: false,
  videoData: [],
  videoLoadingState: false,
  hoverState: false,
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
    setVideoData(state, action: PayloadAction<VideoData[]>) {
      state.videoData = action.payload
    },
    setVideoLoadingState(state, action: PayloadAction<boolean>) {
      state.videoLoadingState = action.payload
    },
    setHoverState(state, action: PayloadAction<boolean>) {
      state.hoverState = action.payload
    },
  },
})

export const {
  setActivePopupId,
  togglePopupState,
  setVideoData,
  setVideoLoadingState,
  setHoverState,
} = heroSlice.actions
export default heroSlice.reducer
