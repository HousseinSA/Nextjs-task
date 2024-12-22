import React, { useRef, useEffect } from "react"
import { VideoDetails } from "@lib/types/HeroSectionTypes"
import VideoInfo from "./videoInfo/VideoInfo"
import DetailsPopup from "./videoInfo/DetailsPopup"
import Thumbnail from "./Thumbnail"
import { useVideoData } from "@hooks/useVideoData"

interface videoCardProps {
  videoData: VideoDetails
}

const VideoCard: React.FC<videoCardProps> = ({ videoData }) => {
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

  const { activePopupId, popUpState, handleActivePopUpId } = useVideoData()

  // @ts-expect-error fix
  const channel = channelThumbnail[0]?.url
  const popupRef = useRef<HTMLDivElement>(null)

  const isActivePopup = activePopupId === id && popUpState

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleActivePopUpId(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handleActivePopUpId])

  return (
    <div className="w-full overflow-hidden relative">
      <Thumbnail
        // @ts-expect-error fix
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
        title={title}
        viewCount={viewCount}
        channelTitle={channelTitle}
        uploadDate={uploadDate}
      />
    </div>
  )
}

export default VideoCard
