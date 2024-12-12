"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { LockKeyhole, LockKeyholeOpen } from "lucide-react"
const Thumbnail: React.FC<{
  thumbnail: string
  title: string
  videoId: string
  isPrivate: boolean
}> = ({ thumbnail, title, videoId, isPrivate }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
  const statusText = isPrivate ? "Private" : "Public"

  return (
    <div className="relative w-full h-auto cursor-pointer group overflow-hidden rounded-lg shadow-lg">
      <Link href={videoUrl} target="_blank">
        <div className="relative ">
          <Image
            src={thumbnail}
            alt={title}
            width={300}
            height={180}
            className="object-cover w-full h-60 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex items-center">
            <div className="relative flex items-center gap-2">
              <span className="ml-2 text-sm font-semibold text-black text-opacity-70 bg-white p-1 rounded-md opacity-0 transform  transition-all duration-300 group-hover:opacity-100 ">
                {statusText}
              </span>
              <div className="p-2 rounded-full bg-white bg-opacity-90 transition-transform duration-300 ease-in-out cursor-pointer flex items-center justify-center">
                {isPrivate ? (
                  <LockKeyhole
                    size={20}
                    className="text-red-500 text-2xl transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <LockKeyholeOpen
                    size={20}
                    className="text-green-500 text-2xl transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full  right-0 p-2 bg-black bg-opacity-70 transition-transform ease-in-out transform ">
            <span className="text-lg font-bold text-white">
              {title.length > 30 ? `${title.slice(0, 40)}...` : title}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Thumbnail
