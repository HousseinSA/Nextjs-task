"use client"
import VideoCard from "./VideoCardComponents/VideoCard"
import LoadingVideoCard from "@/app/components/loadingSkeleton/LoadingVideoCard"
import { useVideoData } from "@hooks/useVideoData"
const HeroSection = () => {
  const { videoData, videoLoadingState } = useVideoData()

  if (videoLoadingState) {
    return <LoadingVideoCard />
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-3 md:p-8 mt-6">
      {videoData.map((video) => (
        <VideoCard key={video.id} videoData={video} />
      ))}
    </div>
  )
}

export default HeroSection
