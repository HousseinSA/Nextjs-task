// Skeleton.js
import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css" // Import default styles

const Loading = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-8 bg-white shadow-md rounded-lg mt-6 md:mt-8">
      <Skeleton className="h-32 w-32 rounded-lg mb-4 md:mb-0 md:mr-4" />
      <div className="flex flex-col justify-between w-full">
        <Skeleton height={24} width="75%" className="mb-2" />
        <Skeleton height={20} width="50%" className="mb-2" />
        <Skeleton height={20} width="33%" className="mb-2" />
        <Skeleton height={20} width="50%" className="mb-2" />
        <Skeleton height={20} width="25%" className="mb-2" />
      </div>
    </div>
  )
}

export default Loading
