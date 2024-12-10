
export interface VideoData {
  id: string
  title: string
  lengthSeconds: string // Use number if you prefer to handle it as a numeric value
  channelTitle: string
  thumbnail: string// Array of thumbnails
  viewCount: string // Use number if you prefer to handle it as a numeric value
  isPrivate: boolean
  likeCount: string // Use number if you prefer to handle it as a numeric value
}


export interface VideoInfoProp {
    lengthSeconds: string
    viewCount: string
    isPrivate: boolean
    title: string
    id: string
  }