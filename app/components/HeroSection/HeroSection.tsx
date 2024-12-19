"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { VideoDetails } from "@lib/types/videData"
import VideoCard from "./VideoCard"

const HeroSection = () => {
  const [videoData, setVideoData] = useState<VideoDetails[] | null>(null)
  const [activePopupId, setActivePopupId] = useState<string | null>(null)
  const [popUpState, setPopupState] = useState<boolean>(false)

  useEffect(() => {
    const getVideoData = async () => {
      try {
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
      } catch (error) {
        console.error("Failed to fetch video data:", error)
      }
    }

    getVideoData()
  }, [])

  if (!videoData) return null
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-3 md:p-8 mt-6">
      {videoData.map((video) => (
        <VideoCard
          key={video.id}
          videoData={video}
          activePopupId={activePopupId}
          setActivePopupId={setActivePopupId}
          setPopupState={() => setPopupState((prev) => !prev)}
          popUpState={popUpState}
        />
      ))}
    </div>
  )
}

export default HeroSection
