"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Lock, Unlock } from "lucide-react"
import { formatVideoLength } from "@lib/FormattingFunctions"

const Thumbnail: React.FC<{
  thumbnail: string
  videoId: string
  isPrivate: boolean
  lengthSeconds: number
}> = ({ thumbnail, videoId, isPrivate, lengthSeconds }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="relative">
      <Link href={videoUrl} target="_blank">
        <div className="relative">
          <Image
            className="w-full h-[198px] object-cover rounded-lg"
            alt="Thumbnail"
            // @ts-expect-error fix later
            src={thumbnail.url}
            width={352}
            height={198}
          />

          <div
            className="absolute top-2 right-2 flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center">
              {isPrivate ? (
                <Lock
                  size={20}
                  className="text-red-300 opacity-60 hover:opacity-80 transition cursor-pointer"
                />
              ) : (
                <Unlock
                  size={20}
                  className="text-green-300 opacity-60 hover:opacity-80 transition cursor-pointer"
                />
              )}
              <span
                className={` bg-white px-2 py-.5 mr-1 rounded-md text-sm ${
                  isPrivate ? "text-red-500" : "text-green-500"
                } transition-opacity duration-300 ${
                  isHovered ? "opacity-80" : "opacity-0"
                }`}
                style={{
                  position: "absolute",
                  right: "100%",
                  top: "50%",
                  transform: "translateY(-40%)",
                }}
              >
                {isPrivate ? "Private" : "Public"}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs font-semibold py-[1px] px-[4px] rounded">
        {formatVideoLength(lengthSeconds)}
      </div>
    </div>
  )
}

export default Thumbnail
