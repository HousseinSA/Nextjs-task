const LoadingVideoCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-3 md:p-8 mt-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden">
          {/* Thumbnail Skeleton */}
          <div className="h-[198px] bg-gray-300 animate-pulse"></div>

          {/* Overlay for private/public indicator */}
          <div className="absolute top-2 right-2 flex  items-center">
            <div className="flex items-center z-40 gap-2">
              <span className="bg-gray-400 h-4 w-20 rounded-md ml-2 animate-pulse"></span>
              <div className="bg-gray-400 h-5 w-5 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Video Info Skeleton */}
          <div className="p-4">
            <div className="flex gap-4 items-start">
              {/* Channel Image Placeholder */}
              <div className="w-10 h-10 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <h3 className="bg-gray-300 h-4 mb-2 rounded-md animate-pulse"></h3>
                <div className="mt-2">
                  <div className="flex items-center gap-1">
                    <span className="bg-gray-300 h-4 w-20 mb-2 rounded-md animate-pulse"></span>
                  </div>
                  <p className="bg-gray-300 h-4 w-full mb-2 rounded-md animate-pulse"></p>
                  <p className="bg-gray-300 h-4 w-full rounded-md animate-pulse"></p>
                </div>
              </div>
            </div>
            {/* Additional loading lines for views and time */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingVideoCard
