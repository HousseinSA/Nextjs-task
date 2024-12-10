import React from "react"

interface ThumbnailProps {
    thumbnail: string
    title: string  
 
}

const Thumbnail :React.FC<ThumbnailProps>= ({ thumbnail, title }) => {
  return (
    <img
      src={thumbnail}
      alt={title}
      className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0"
    />
  )
}

export default Thumbnail
