import Link from "next/link"
import React from "react"
import { FaLock, FaUnlock } from "react-icons/fa" // Import lock and unlock icons

const Thumbnail: React.FC<{
  thumbnail: string
  title: string
  videoId: string
  isPrivate: boolean
}> = ({ thumbnail, title, videoId, isPrivate }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
  const statusText = isPrivate ? "Private" : "Public" // Text to show on hover

  return (
    <div className="relative w-full h-auto cursor-pointer group">
      <Link href={videoUrl} target="_blank">
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full rounded-lg transition-shadow duration-300 ease-in-out group-hover:shadow-inner"
          />
          <div className="absolute top-2 right-2 flex items-center">
            <div className="relative">
              <div className="p-2 rounded-full bg-white transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer flex items-center justify-center">
                {isPrivate ? (
                  <FaLock className="text-red-500 text-2xl" />
                ) : (
                  <FaUnlock className="text-green-500 text-2xl" />
                )}
              </div>
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-sm font-semibold text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                {statusText}
              </span>
            </div>
          </div>
          <div className="absolute bottom-2 left-4 right-0 p-2 bg-transparent transition-transform  ease-in-out transform group-hover:scale-105">
            <span className="text-2xl font-semibold text-white bg-textColor bg-opacity-50 p-2 rounded-md  hover:text-gray-300 transition-colors duration-300 ">
              {title}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Thumbnail
