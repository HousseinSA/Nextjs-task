"use client"
import React from "react"
import { Eye, ThumbsUp, Clock12, TvMinimalPlay } from "lucide-react"
import InfoButton from "./videoInfo/InfoButton"
import { VideoDetails } from "@lib/types/videData"
import { formatNumber, formatVideoLength } from "@lib/NumberFormatter"

const VideoInfo: React.FC<{ videoInfo: VideoDetails }> = ({ videoInfo }) => {
  const { lengthSeconds, viewCount, channelTitle, likeCount } = videoInfo

  const infoItems = [
    {
      icon: <TvMinimalPlay size={20} color="white" />,
      title: "Channel name:",
      info: channelTitle,
    },
    {
      icon: <Clock12 size={20} color="white" />,
      title: "Video length:",
      info: formatVideoLength(lengthSeconds),
    },
    {
      icon: <Eye size={20} color="white" />,
      title: "Views:",
      info: formatNumber(viewCount),
    },
    {
      icon: <ThumbsUp size={20} color="white" />,
      title: "Likes:",
      info: formatNumber(likeCount),
    },
  ]

  return (
    <div className="flex flex-col justify-between p-2">
      <div className="flex flex-col space-y-1">
        {infoItems.map((item, index) => (
          <InfoButton
            key={index}
            icon={item.icon}
            title={item.title}
            titleInfo={item.info}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoInfo
