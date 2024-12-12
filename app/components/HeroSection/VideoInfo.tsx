"use client"
import React from "react"
import { FaEye, FaThumbsUp, FaClock, FaUser } from "react-icons/fa"
import InfoButton from "./videoInfo/InfoButton"
// import { formatNumber, formatVideoLength } from "@lib/NumberFormatter"
import { VideoDetails } from "@lib/types/videData"

const VideoInfo: React.FC<{ videoInfo: VideoDetails }> = ({ videoInfo }) => {
  const { lengthSeconds, viewCount, channelTitle, likeCount } = videoInfo
  const likesValue = likeCount || "Not available"
  return (
    <div className="flex flex-col justify-between md:px-8 md:ml-4 md:w-2/3 space-y-6">
      <div className="flex flex-col space-y-3">
        <InfoButton
          icon={<FaUser />}
          title="Channel name:"
          titleInfo={channelTitle}
        />
        <InfoButton
          icon={<FaClock />}
          title="Video length:"
          titleInfo={lengthSeconds}
        />
        <InfoButton icon={<FaEye />} title="Views:" titleInfo={viewCount} />
        <InfoButton
          icon={<FaThumbsUp />}
          title="Likes:"
          titleInfo={likesValue}
        />
      </div>
    </div>
  )
}

export default VideoInfo
