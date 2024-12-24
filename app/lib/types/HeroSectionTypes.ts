export interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface RootState {
  hero: HeroState
}
export interface HeroState {
  activePopupId: string | null
  popUpState: boolean
  videoData: VideoData[]
  videoLoadingState: boolean
  hoverState: boolean
}
export interface ThumbnailDetailsProps {
  videoData: VideoData
  isActivePopup: boolean
  popupRef: React.RefObject<HTMLDivElement>
}
export interface VideoCardProps {
  videoData: VideoData
  setActivePopupId: (id: string | null) => void
  handlePopUpState: () => void
}

export interface videoInfoCompProps {
  channel: string
  title: string
  viewCount: number
  channelTitle: string
  uploadDate: string
}

export interface VideoInfoProps {
  videoId: string
  setActivePopupId: (id: string) => void
  isActivePopup: boolean
  handlePopUpState: () => void
  videoInfoValues: videoInfoCompProps
}

export interface ThumbnailProps {
  thumbnail: Thumbnail
  videoId: string
  isPrivate: boolean
  lengthSeconds: number
  children: React.ReactNode
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

export interface VideoData {
  id: string
  title: string
  lengthSeconds: number
  channelTitle: string
  thumbnail: Thumbnail[]
  viewCount: number
  isPrivate: boolean
  category: string
  likeCount: number
  channelThumbnail: Thumbnail[]
  uploadDate: string
  commentCount: string
  description: string
}
