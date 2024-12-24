import React, { useRef } from "react"
import { VideoCardProps } from "@/app/lib/types/HeroSectionTypes"
import VideoInfo from "./videoInfo/VideoInfo"
import {
  useClickOutside,
  useVideoDataValues,
} from "@hooks/heroSection/useVideoData"
import ThumbnailDetails from "./Thumbnail/ThumbnailDetails"

const VideoCard: React.FC<VideoCardProps> = ({
  videoData,
  setActivePopupId,
  handlePopUpState,
}) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const { isActivePopup, videoInfoValues } = useVideoDataValues(videoData)

  useClickOutside(popupRef, () => setActivePopupId(null))

  return (
    <div className="w-full overflow-hidden relative">
      <ThumbnailDetails
        videoData={videoData}
        popupRef={popupRef}
        isActivePopup={isActivePopup}
      />
      <VideoInfo
        videoId={videoData.id}
        setActivePopupId={setActivePopupId}
        handlePopUpState={handlePopUpState}
        isActivePopup={isActivePopup}
        videoInfoValues={videoInfoValues}
      />
    </div>
  )
}

export default VideoCard
