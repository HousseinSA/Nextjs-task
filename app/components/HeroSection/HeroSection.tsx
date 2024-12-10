"use client"
import React, { useEffect, useState } from "react"
import { VideoData, VideoInfoProp } from "@lib/types/videData"
import Thumbnail from "./Thumbnail"
import VideoInfo from "./VideoInfo"
const HeroSection = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [loading, setLoading] = useState(true)
  const videoId = "arj7oStGLkU"

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await fetch(`/api/youtube?id=${videoId}`)
        if (!response.ok) throw new Error("Failed to fetch video data")
        const data: VideoData = await response.json()
        setVideoData(data)
      } catch (error) {
        console.error("Failed to fetch video data:", error)
      } finally {
        setLoading(false)
      }
    }

    getVideoData()
  }, [])

  if (loading) return <div className="text-center">Loading...</div>
  if (!videoData)
    return <div className="text-center">No Video Data Available</div>
  const { title, thumbnail, lengthSeconds, viewCount, isPrivate, id } =
    videoData

  const videoInfo: VideoInfoProp = {
    lengthSeconds,
    viewCount,
    isPrivate,
    title,
    id,
  }
  console.log(videoData, "testing video data")
  return (
    <div className="flex flex-col justify-around md:flex-row items-start p-8 mt-6 md:mt-8">
      <Thumbnail thumbnail={thumbnail} title={title} />
      <VideoInfo videoInfo={videoInfo} />
    </div>
  )
}

export default HeroSection
