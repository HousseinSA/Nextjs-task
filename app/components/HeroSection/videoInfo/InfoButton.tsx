import React from "react"

interface InfoButtonProps {
  icon: React.ReactNode
  title: string
  titleInfo: string |number
}

const InfoButton: React.FC<InfoButtonProps> = ({ icon, title, titleInfo }) => {
  return (
    <button className="flex items-center justify-start p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-200 ease-linear shadow-md transform hover:scale-105">
      <span className="mr-2 text-lg transition-transform duration-300 ease-in-out rounded-full bg-textColor p-2">
        {icon}
      </span>
      <span className="font-semibold text-lg text-gray-700">
        {title} <span className="font-normal">{titleInfo}</span>
      </span>
    </button>
  )
}

export default InfoButton
