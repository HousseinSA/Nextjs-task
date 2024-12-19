import React, { useRef, useEffect } from "react"
import { VideoDetails } from "@lib/types/videData"
import Thumbnail from "./Thumbnail"
import VideoInfo from "./videoInfo/VideoInfo"
import DetailsPopup from "./videoInfo/DetailsPopup"

interface videoCardProps {
  key: string
  videoData: VideoDetails
  activePopupId: string | null
  setActivePopupId: (id: string | null) => void
  popUpState: boolean
  setPopupState: () => void
}

const VideoCard: React.FC<videoCardProps> = ({
  videoData,
  setActivePopupId,
  activePopupId,
  setPopupState,
  popUpState,
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
  const channel = channelThumbnail[0]?.url
  const popupRef = useRef<HTMLDivElement>(null)

  const isActivePopup = activePopupId === id && popUpState

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setActivePopupId(null)
      }
    }

    const timeout = setTimeout(
      () => document.addEventListener("mousedown", handleClickOutside),
      300
    )

    return () => {
      clearTimeout(timeout)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setActivePopupId])

  return (
    <div className="w-full overflow-hidden relative">
      <Thumbnail
        thumbnail={thumbnail}
        videoId={id}
        isPrivate={isPrivate}
        lengthSeconds={lengthSeconds}
      >
        <DetailsPopup
          isActivePopup={isActivePopup}
          popupRef={popupRef}
          commentCount={commentCount}
          category={category}
          description={description}
        />
      </Thumbnail>
      <VideoInfo
        videoId={id}
        channel={channel}
        isActivePopup={isActivePopup}
        setActivePopupId={setActivePopupId}
        setPopupState={setPopupState}
        title={title}
        viewCount={viewCount}
        channelTitle={channelTitle}
        uploadDate={uploadDate}
      />
    </div>
  )
}

export default VideoCard
