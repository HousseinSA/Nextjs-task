import React from "react"
import {
  formatNumber,
  ShorterString,
} from "@/app/lib/functions/FormattingFunctions"

interface DetailsPopProps {
  popupRef: React.RefObject<HTMLDivElement>
  description: string
  category: string
  commentCount: string
  isActivePopup: boolean
}

const DetailsPopup: React.FC<DetailsPopProps> = ({
  popupRef,
  description,
  category,
  commentCount,
  isActivePopup,
}) => {
  return (
    <>
      {isActivePopup && (
        <div
          ref={popupRef}
          className="absolute bottom-0 top-10 transition duration-200 right-0 text-white opacity-90 bg-textColor shadow-lg rounded-bl-lg rounded-br-lg p-4 max-h-[300px] overflow-y-auto"
        >
          <h4 className="font-bold">Video Details</h4>
          <p>
            <strong>Description:</strong> {ShorterString(description, 20)}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Comments:</strong> {formatNumber(commentCount)}
          </p>
        </div>
      )}
    </>
  )
}

export default DetailsPopup
