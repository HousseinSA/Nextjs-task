// heroSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VideoDetails } from "@lib/types/videData"

interface HeroSlice {
  activePopupId: string | null
  popUpState: boolean
  videoData: VideoDetails[]
  videoLoadingState: boolean
}

const initialState: HeroSlice = {
  activePopupId: null,
  popUpState: false,
  videoData: [],
  videoLoadingState: true, // Set to true initially while data is being fetched
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
