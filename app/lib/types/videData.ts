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
