import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { VideoDetails } from "@lib/types/videData"
import { EllipsisVertical } from "lucide-react"
import { formatNumber, timeAgo, formatVideoLength } from "@lib/NumberFormatter"
import Link from "next/link"
import { gsap } from "gsap"

const Modal = ({ isOpen, onClose, videoData }) => {
  const modalRef = useRef()

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { width: 0, opacity: 0 },
        { width: "250px", opacity: 1, duration: 0.3, ease: "power2.out" }
      )
    } else {
      gsap.to(modalRef.current, {
        width: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClose,
      })
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="absolute left-full top-0 mt-4">
      <div ref={modalRef} className=" p-4 rounded-lg ">
        <h2 className="text-lg font-bold">Video Details</h2>
        <p>
          <strong>Title:</strong> {videoData.title}
        </p>
        <p>
          <strong>Channel:</strong> {videoData.channelTitle}
        </p>
        <p>
          <strong>Views:</strong> {formatNumber(videoData.viewCount)} views
        </p>
        <p>
          <strong>Uploaded:</strong> {timeAgo(videoData.uploadDate)}
        </p>
        <p>
          <strong>Duration:</strong>{" "}
          {formatVideoLength(videoData.lengthSeconds)}
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-200 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

const YoutubeCard: React.FC<VideoDetails> = ({ videoData }) => {
  const {
    thumbnail,
    title,
    channelThumbnail,
    viewCount,
    channelTitle,
    uploadDate,
    lengthSeconds,
    id,
  } = videoData
  const channel = channelThumbnail[0]?.url
  const videoUrl = `https://www.youtube.com/watch?v=${id}`

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="w-full overflow-hidden relative">
      <div className="relative">
        {/* Video Thumbnail */}
        <Link href={videoUrl} target="_blank">
          <Image
            className="w-full h-[198px] object-cover rounded-lg"
            alt="Thumbnail"
            src={thumbnail.url}
            width={352}
            height={198}
          />
        </Link>
        {/* Duration Overlay */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs font-semibold py-[1px] px-[4px] rounded">
          {formatVideoLength(lengthSeconds)}
        </div>
      </div>

      {/* Video Details */}
      <div className="py-4 flex gap-4 items-start">
        <Image
          className="w-10 h-10 rounded-full"
          alt="Channel Logo"
          src={channel || "/default-channel-logo.png"}
          width={36}
          height={36}
        />
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-gray-800 leading-tight">
            {title}
          </h3>
          <div className="mt-2">
            <span className="text-base text-gray-500">{channelTitle}</span>
            <p className="text-base text-gray-500">
              {formatNumber(viewCount)} views
              <span className="h-[17px] mx-1 font-bold">.</span>
              {timeAgo(uploadDate)}
            </p>
          </div>
        </div>
        <EllipsisVertical
          size={20}
          className={`cursor-pointer transition-all duration-300 rounded-full ${
            isActive ? "bg-gray-300" : "bg-transparent"
          } p-2`}
          onClick={handleToggleModal}
        />
      </div>

      {/* Modal for Video Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleToggleModal}
        videoData={videoData}
      />
    </div>
  )
}

export default YoutubeCard
