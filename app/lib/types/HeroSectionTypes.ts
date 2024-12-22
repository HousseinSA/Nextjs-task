export interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface VideoDetails {
  id: string
  title: string
  lengthSeconds: number
  channelTitle: string
  thumbnail: Thumbnail[]
  viewCount: number
  isPrivate: boolean
  category: string
  likeCount: number
  channelThumbnail: string[]
  uploadDate: string
  commentCount: string
  description: string
}

export interface ApiResponse {
  id: string
  title: string
  lengthSeconds: number
  channelTitle: string
  thumbnail: Thumbnail[]
  viewCount: number
  isPrivate: boolean
  category: string
  likeCount: number
}

export interface RootState {
  hero: HeroState
}

export interface HeroState {
  activePopupId: string | null
  popUpState: boolean
  videoData: VideoDetails[]
  videoLoadingState: boolean
}
