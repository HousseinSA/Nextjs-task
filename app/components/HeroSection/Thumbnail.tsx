import Link from "next/link"
import React from "react"
import { FaLock, FaUnlock } from "react-icons/fa"

const Thumbnail: React.FC<{
  thumbnail: string
  title: string
  videoId: string
  isPrivate: boolean
}> = ({ thumbnail, title, videoId, isPrivate }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

  const statusText = isPrivate ? "Private" : "Public"

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
            <div className="relative flex items-center gap-2">
              <span className="ml-2 text-sm font-semibold text-black text-opacity-60 bg-white p-1 rounded-md opacity-0 transform scale-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100">
                {statusText}
              </span>
              <div className="p-2 rounded-full bg-white transition-transform duration-300 ease-in-out cursor-pointer flex items-center justify-center">
                {isPrivate ? (
                  <FaLock className="text-red-500 text-2xl transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <FaUnlock className="text-green-500 text-2xl transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-0 p-2 bg-transparent transition-transform ease-in-out transform group-hover:scale-105">
            <span className="text-lg font-semibold text-white bg-textColor bg-opacity-70 p-2 rounded-md shadow-md transition-colors duration-300 hover:text-gray-300">
              {title}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Thumbnail
