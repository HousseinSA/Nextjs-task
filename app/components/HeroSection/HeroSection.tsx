"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { VideoData } from "@lib/types/videData"
import Thumbnail from "./Thumbnail"
import VideoInfo from "./VideoInfo"

const HeroSection = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null)

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await axios.get(`/api/youtube?`)
        const randomVideo = response.data
        setVideoData(randomVideo)
      } catch (error) {
        console.error("Failed to fetch video data:", error)
      }
    }

    getVideoData()
  }, [])

  if (!videoData) return null
  //@ts-expect-error nothing
  const { thumbnail, title, videoId, isPrivate } = videoData
  //@ts-expect-error nothing

  const thumbnailUrl = thumbnail[thumbnail.length - 1].url

  console.log(videoData)
  return (
    <div className="flex flex-col p-8 mt-6 md:flex-row md:items-start md:mt-8">
      <Thumbnail
        thumbnail={thumbnailUrl}
        title={title}
        videoId={videoId}
        isPrivate={isPrivate}
      />
      <VideoInfo videoInfo={videoData} />
    </div>
  )
}

export default HeroSection
