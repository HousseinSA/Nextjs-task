"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { VideoDetails } from "@lib/types/videData"
import Thumbnail from "./Thumbnail"
import VideoInfo from "./VideoInfo"

const HeroSection = () => {
  const [videoData, setVideoData] = useState<VideoDetails[] | null>(null)

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await axios.get(`/api/youtube?`)
        const randomVideo = response.data.data
        const filteredDetails = randomVideo.map((video: VideoDetails) => ({
          id: video.id,
          title: video.title,
          lengthSeconds: video.lengthSeconds,
          channelTitle: video.channelTitle,
          thumbnail: video.thumbnail[video.thumbnail.length - 1],
          viewCount: video.viewCount,
          isPrivate: video.isPrivate,
          category: video.category,
          likeCount: video.likeCount,
        }))
        setVideoData(filteredDetails)
      } catch (error) {
        console.error("Failed to fetch video data:", error)
      }
    }

    getVideoData()
  }, [])

  if (!videoData) return null

  console.log(videoData)
  return (
    <div className="flex flex-col gap-6 md:gap-0 p-8 mt-6 md:flex-row md:items-start md:mt-8">
      {videoData.map((video) => (
        <div
          key={video.id}
          className="flex flex-col md:flex-row md:items-start"
        >
          <Thumbnail
            thumbnail={video.thumbnail.url}
            title={video.title}
            videoId={video.id}
            isPrivate={video.isPrivate}
          />
          <VideoInfo videoInfo={video} />
        </div>
      ))}
    </div>
  )
}

export default HeroSection
