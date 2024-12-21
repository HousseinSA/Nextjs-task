"use client"
import axios from "axios"
import { useEffect, useState } from "react"

import { VideoDetails } from "@lib/types/videData"

export const useVideoData = () => {
  const [videoData, setVideoData] = useState<VideoDetails[]>([])
  const [videoLoadingState, setVideoLoadingState] = useState<boolean>(false)

  useEffect(() => {
    const getVideoData = async () => {
      try {
        setVideoLoadingState(true)
        const response = await axios.get(`/api/youtube?`)
        const randomVideos = response.data.data
        const filteredDetails = randomVideos.map((video: VideoDetails) => ({
          id: video.id,
          title: video.title,
          lengthSeconds: video.lengthSeconds,
          channelTitle: video.channelTitle,
          thumbnail: video.thumbnail[video.thumbnail.length - 1],
          viewCount: video.viewCount,
          isPrivate: video.isPrivate,
          category: video.category,
          likeCount: video.likeCount,
          channelThumbnail: video.channelThumbnail,
          uploadDate: video.uploadDate,
          commentCount: video.commentCount,
          description: video.description,
        }))
        setVideoData(filteredDetails)
        setVideoLoadingState(false)
      } catch (error) {
        setVideoLoadingState(false)
        console.error("Failed to fetch video data:", error)
      }
    }
    getVideoData()
  }, [])

  return { videoData, videoLoadingState }
}
