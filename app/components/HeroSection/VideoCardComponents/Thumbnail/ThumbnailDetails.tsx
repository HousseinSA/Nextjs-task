import Thumbnail from "./Thumbnail"
import DetailsPopup from "../videoInfo/DetailsPopup"
import { ThumbnailDetailsProps } from "@lib/types/HeroSectionTypes"
const ThumbnailDetails: React.FC<ThumbnailDetailsProps> = ({
  videoData,
  isActivePopup,
  popupRef,
}) => (
  <Thumbnail
    thumbnail={videoData.thumbnail}
    videoId={videoData.id}
    isPrivate={videoData.isPrivate}
    lengthSeconds={videoData.lengthSeconds}
  >
    <DetailsPopup
      isActivePopup={isActivePopup}
      popupRef={popupRef}
      commentCount={videoData.commentCount}
      category={videoData.category}
      description={videoData.description}
    />
  </Thumbnail>
)

export default ThumbnailDetails
