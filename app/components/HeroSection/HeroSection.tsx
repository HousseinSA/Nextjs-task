"use client";
import React, { useEffect, useState } from "react";
import { VideoData } from "@lib/types/videData";
import Thumbnail from "./Thumbnail";
import VideoInfo from "./VideoInfo";

const HeroSection = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await fetch(`/api/youtube?`);
        if (!response.ok) throw new Error("Failed to fetch video data");
        const data: VideoData = await response.json();
        setVideoData(data);
      } catch (error) {
        console.error("Failed to fetch video data:", error);
      }
    };

    getVideoData();
  }, []);

  if (!videoData) return null;

  return (
    <div className="flex flex-col p-8 mt-6 md:flex-row md:items-start md:mt-8">
      <Thumbnail thumbnail={videoData.thumbnail} title={videoData.title} />
      <VideoInfo videoInfo={videoData} />
    </div>
  );
}

export default HeroSection;