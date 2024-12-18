import React from "react"
import { formatNumber, ShorterString } from "../../../lib/FormattingFunctions"
interface InfoPopProps {
  isActivePopup: boolean
  popupRef: React.RefObject<HTMLDivElement>
  description: string
  category: string
  commentCount: string
}

const InfoPopUp: React.FC<InfoPopProps> = ({
  isActivePopup,
  popupRef,
  description,
  category,
  commentCount,
}) => {
  return (
    <>
      {isActivePopup && (
        <div
          ref={popupRef}
          className="absolute top-[50px] right-0 bg-white shadow-lg rounded-lg p-4 "
        >
          <h4 className="font-semibold">Video Details</h4>
          <p>
            <strong className="text-textColor">Description:</strong>{" "}
            {ShorterString(description, 20)}
          </p>
          <p>
            <strong className="text-textColor">Category:</strong> {category}
          </p>
          <p>
            <strong className="text-textColor">Comments:</strong>{" "}
            {formatNumber(commentCount)}
          </p>
        </div>
      )}
    </>
  )
}

export default InfoPopUp
