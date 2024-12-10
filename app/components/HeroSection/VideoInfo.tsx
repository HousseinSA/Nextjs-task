"use client"
import React from "react"

const VideoInfo = ({ videoInfo }) => {
  return (
    <div className="md:ml-4 flex flex-col justify-between">
      <h1 className="text-3xl font-bold mb-2 text-headerBg">
        {videoInfo.title}
      </h1>
      <p className="font-semibold text-gray-700 text-lg">
        {videoInfo.channelTitle}
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Video ID: <span className="text-gray-700"> {videoInfo.id}</span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Length:{" "}
        <span className="text-gray-700">{videoInfo.lengthSeconds} Seconds</span>{" "}
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Views: <span className="text-gray-700">{videoInfo.viewCount}</span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Likes:{" "}
        <span className="text-gray-700">
          {!videoInfo.likeCount && "Not provided"}
        </span>
      </p>
      <p className="mt-2 font-bold text-lg text-headerBg">
        Private:{" "}
        <span className="text-gray-700">
          {videoInfo.isPrivate ? "YES" : "NO"}
        </span>
      </p>
    </div>
  )
}

export default VideoInfo
