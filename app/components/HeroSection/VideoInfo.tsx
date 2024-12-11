"use client"
import React from "react"

export interface VideoInfoProp {
  lengthSeconds: string
  viewCount: string
  isPrivate: boolean
  title: string
  id: string
  channelTitle: string
}

const VideoInfo: React.FC<{ videoInfo: VideoInfoProp }> = ({ videoInfo }) => {
  const {
    title,
    id,
    lengthSeconds,
    viewCount,
    isPrivate,
    channelTitle,
  } = videoInfo

  if (!videoInfo) return null

  return (
    <div className="flex flex-col justify-between md:p-8 md:ml-4 md:w-2/3 ">
      <h1 className="text-3xl font-bold mb-2 text-headerBg">{title}</h1>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Video ID: <span className="text-gray-700">{id}</span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Channel: <span className="text-gray-700">{channelTitle}</span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Length: <span className="text-gray-700">{lengthSeconds} Seconds</span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Views: <span className="text-gray-700">{viewCount}</span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Likes: <span className="text-gray-700">Not available</span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Private:{" "}
        <span className="text-gray-700">{isPrivate ? "YES" : "NO"}</span>
      </p>
    </div>
  )
}

export default VideoInfo
