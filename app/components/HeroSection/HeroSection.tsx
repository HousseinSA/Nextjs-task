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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 md:p-8 mt-6">
      {videoData.map((video) => (
        <div
          key={video.id}
          className="flex flex-col bg-textColor rounded-md p-2"
        >
          <Thumbnail
          // @ts-expect-error fix later
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
