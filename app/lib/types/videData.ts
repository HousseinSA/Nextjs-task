export interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface VideoData {
  id: string
  title: string
  lengthSeconds: string // Use number if you prefer to handle it as a numeric value
  channelTitle: string
  thumbnail: Thumbnail[] // Array of thumbnails
  viewCount: string // Use number if you prefer to handle it as a numeric value
  isPrivate: boolean
  likeCount: string // Use number if you prefer to handle it as a numeric value
}
