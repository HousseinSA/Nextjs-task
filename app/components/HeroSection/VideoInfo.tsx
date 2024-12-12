"use client"
import React from "react"
import { Eye, ThumbsUp, Clock12, User } from "lucide-react"
import InfoButton from "./videoInfo/InfoButton"
import { VideoDetails } from "@lib/types/videData"
import { formatNumber, formatVideoLength } from "@lib/NumberFormatter"

const VideoInfo: React.FC<{ videoInfo: VideoDetails }> = ({ videoInfo }) => {
  const { lengthSeconds, viewCount, channelTitle, likeCount } = videoInfo
  const likesValue = likeCount || "Not available"
  console.log(typeof lengthSeconds, typeof likeCount, typeof viewCount)

  return (
    <div className="flex flex-col justify-between p-2">
      <div className="flex flex-col space-y-1">
        <InfoButton
          icon={<User />}
          title="Channel name:"
          titleInfo={channelTitle}
        />
        <InfoButton
          icon={<Clock12 />}
          title="Video length:"
          titleInfo={formatVideoLength(lengthSeconds)}
        />
        <InfoButton
          icon={<Eye />}
          title="Views:"
          titleInfo={formatNumber(viewCount)}
        />
        <InfoButton
          icon={<ThumbsUp />}
          title="Likes:"
          titleInfo={formatNumber(likesValue)}
        />
      </div>
    </div>
  )
}

export default VideoInfo
