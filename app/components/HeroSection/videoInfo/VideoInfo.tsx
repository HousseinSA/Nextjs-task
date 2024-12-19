import React from "react"
import Image from "next/image"
import { formatNumber, ShorterString, timeAgo } from "@lib/FormattingFunctions"
import { Check, EllipsisVertical } from "lucide-react"
interface VideoInfoProps {
  channel: string
  title: string
  viewCount: number
  channelTitle: string
  uploadDate: string
  videoId: string
  setActivePopupId: (id: string) => void
  isActivePopup: boolean
  setPopupState: () => void
}

const VideoInfo: React.FC<VideoInfoProps> = ({
  channel,
  viewCount,
  videoId,
  title,
  channelTitle,
  uploadDate,
  setActivePopupId,
  isActivePopup,
  setPopupState,
}) => {
  const handleToggleDetails = () => {
    setActivePopupId(videoId)
    setPopupState()
  }

  return (
    <div className="py-4 flex gap-4 items-start">
      <Image
        className="w-10 h-10 rounded-full"
        alt="Channel Logo"
        src={channel}
        width={36}
        height={36}
      />
      <div className="flex-1">
        <h3 className="text-[16px] font-semibold text-gray-800 leading-tight">
          {ShorterString(title, 15)}
        </h3>
        <div className="mt-2">
          <div className="flex items-center gap-1">
            <span className="text-base text-gray-500">{channelTitle}</span>
            <Check size={15} className="rounded-full p-1 bg-gray-300" />
          </div>
          <p className="text-base text-gray-500">
            {formatNumber(viewCount)} views
            <span className="h-[17px] mx-1 font-bold">.</span>
            {timeAgo(uploadDate)}
          </p>
        </div>
      </div>
      <EllipsisVertical
        size={30}
        className={`cursor-pointer  transition rounded-full ${
          isActivePopup ? "bg-gray-300" : "bg-transparent"
        } p-1`}
        cursor={'pointer'}
        onClick={handleToggleDetails}
      />
    </div>
  )
}

export default VideoInfo
