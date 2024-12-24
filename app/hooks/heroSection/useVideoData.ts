"use client"
import axios from "axios"
import { useEffect } from "react"
import {
  VideoData,
  RootState,
  videoInfoCompProps,
} from "@/app/lib/types/HeroSectionTypes"
import {
  setActivePopupId,
  togglePopupState,
  setVideoData,
  setVideoLoadingState,
} from "@lib/redux/HeroSlice"
import { useDispatch, useSelector } from "react-redux"

export const useVideoData = () => {
  const { videoData, videoLoadingState, activePopupId, popUpState } =
    useSelector((state: RootState) => state.hero)
  const dispatch = useDispatch()
  useEffect(() => {
    const getVideoData = async () => {
      try {
        dispatch(setVideoLoadingState(true))
        const response = await axios.get(`/api/youtube?`)
        const randomVideos = response.data.data
        const filteredDetails = randomVideos.map((video: VideoData) => ({
          id: video.id,
          title: video.title,
          lengthSeconds: video.lengthSeconds,
          channelTitle: video.channelTitle,
          thumbnail: video.thumbnail[video.thumbnail.length - 1],
          viewCount: video.viewCount,
          isPrivate: video.isPrivate,
          category: video.category,
          likeCount: video.likeCount,
          channelThumbnail: video.channelThumbnail,
          uploadDate: video.uploadDate,
          commentCount: video.commentCount,
          description: video.description,
        }))
        dispatch(setVideoData(filteredDetails))
        dispatch(setVideoLoadingState(false))
      } catch (error) {
        dispatch(setVideoLoadingState(false))
        console.error("Failed to fetch video data:", error)
      }
    }
    getVideoData()
  }, [dispatch])

  const handlePopUpState = () => {
    dispatch(togglePopupState())
  }
  const handleActivePopUpId = (id: string | null) => {
    dispatch(setActivePopupId(id))
  }

  const handleToggleDetails = (id: string | null) => {
    handleActivePopUpId(id)
    handlePopUpState()
  }

  return {
    videoData,
    videoLoadingState,
    popUpState,
    activePopupId,
    handlePopUpState,
    handleActivePopUpId,
    handleToggleDetails,
  }
}


import { RefObject } from "react"
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, callback])
}

export const useVideoDataValues = (videoData: VideoData) => {
  const { activePopupId, popUpState } = useSelector(
    (state: RootState) => state.hero
  )
  const videoId = videoData.id
  const isActivePopup = activePopupId === videoId && popUpState

  const channelImage = videoData.channelThumbnail[0]?.url
  const videoInfoValues: videoInfoCompProps = {
    channel: channelImage,
    title: videoData.title,
    viewCount: videoData.viewCount,
    channelTitle: videoData.channelTitle,
    uploadDate: videoData.uploadDate,
  }

  return { isActivePopup, videoInfoValues }
}
