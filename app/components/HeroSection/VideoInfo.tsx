"use client";
import React from "react";
import { FaEye, FaThumbsUp, FaClock, FaUser } from "react-icons/fa";
import InfoButton from "./videoInfo/InfoButton";

export interface VideoInfoProp {
  lengthSeconds: string;
  viewCount: string;
  isPrivate: boolean;
  channelTitle: string;
  id: string;
  likeCount: string;
}

const VideoInfo: React.FC<{ videoInfo: VideoInfoProp }> = ({ videoInfo }) => {
  const { lengthSeconds, viewCount, channelTitle, likeCount } =
    videoInfo;

  const likesValue = likeCount ? likeCount : "Not available";

  return (
    <div className="flex flex-col justify-between md:px-8 md:ml-4 md:w-2/3 space-y-6">
      <div className="flex flex-col space-y-3">
        <InfoButton icon={<FaUser />} label="Channel name:" value={channelTitle} />
        <InfoButton
          icon={<FaClock />}
          label="Video length:"
          value={`${lengthSeconds} Seconds`}
        />
        <InfoButton icon={<FaEye />} label="Views:" value={viewCount} />
        <InfoButton icon={<FaThumbsUp />} label="Likes:" value={likesValue} />
      </div>
    </div>
  );
};

export default VideoInfo;