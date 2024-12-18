import React, { useRef, useEffect } from "react"
import { VideoDetails } from "@lib/types/videData"
import Thumbnail from "./Thumbnail"
import InfoPopUp from "./videoInfo/InfoPopUp"
import VideoInfo from "./videoInfo/VideoInfo"
interface videoCardProps {
  key: string
  videoData: VideoDetails
  activePopupId: string | null
  setActivePopupId: (id: string | null) => void
}

const VideoCard: React.FC<videoCardProps> = ({
  videoData,
  activePopupId,
  setActivePopupId,
}) => {
  const {
    thumbnail,
    title,
    channelThumbnail,
    viewCount,
    channelTitle,
    uploadDate,
    lengthSeconds,
    id,
    isPrivate,
    description,
    commentCount,
    category,
  } = videoData
  // @ts-expect-error fix later
  const channel = channelThumbnail[0]?.url
  const popupRef = useRef<HTMLDivElement>(null)

  const isActivePopup = activePopupId === id

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setActivePopupId(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setActivePopupId])

  return (
    <div className="w-full overflow-hidden relative">
      <Thumbnail
        // @ts-expect-error fix later
        thumbnail={thumbnail}
        videoId={id}
        isPrivate={isPrivate}
        lengthSeconds={lengthSeconds}
      />
      <VideoInfo
        videoId={id}
        channel={channel}
        isActivePopup={isActivePopup}
        setActivePopupId={setActivePopupId}
        title={title}
        viewCount={viewCount}
        channelTitle={channelTitle}
        uploadDate={uploadDate}
      />

      <InfoPopUp
        isActivePopup={isActivePopup}
        popupRef={popupRef}
        commentCount={commentCount}
        category={category}
        description={description}
      />
    </div>
  )
}

export default VideoCard
