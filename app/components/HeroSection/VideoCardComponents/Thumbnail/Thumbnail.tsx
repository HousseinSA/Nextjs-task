"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Lock, Unlock } from "lucide-react"
import { formatVideoLength } from "@/app/lib/functions/FormattingFunctions"
import { RootState, ThumbnailProps } from "@/app/lib/types/HeroSectionTypes"
import { setHoverState } from "@lib/redux/HeroSlice"

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  videoId,
  isPrivate,
  lengthSeconds,
  children,
}) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
  const dispatch = useDispatch()
  const { hoverState } = useSelector((state: RootState) => state.hero)
  console.log(thumbnail)
  return (
    <div className="relative">
      <div className="relative">
        <Link href={videoUrl} target="_blank">
          <Image
            className="w-full h-[198px] object-cover rounded-lg cursor-pointer"
            alt="Thumbnail"
            src={thumbnail}
            width={352}
            height={198}
          />
        </Link>
        <div
          className="absolute top-2 right-2 flex items-center"
          onMouseEnter={() => dispatch(setHoverState(true))}
          onMouseLeave={() => dispatch(setHoverState(false))}
        >
          <div
            className="flex items-center z-40 "
            style={{ zIndex: "50px !important" }}
          >
            {isPrivate ? (
              <Lock
                size={20}
                className="text-red-300 opacity-60 hover:opacity-80 transition cursor-pointer"
              />
            ) : (
              <Unlock
                size={20}
                className="text-green-300 opacity-60 hover:opacity-80 transition cursor-pointer "
              />
            )}
            <span
              className={` bg-white px-2 py-.5 mr-1 rounded-md text-sm ${
                isPrivate ? "text-red-500" : "text-green-500"
              } transition-opacity duration-300 ${
                hoverState ? "opacity-80" : "opacity-0"
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
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs font-semibold py-[1px] px-[4px] rounded">
        {formatVideoLength(lengthSeconds)}
      </div>
      {children}
    </div>
  )
}

export default Thumbnail
