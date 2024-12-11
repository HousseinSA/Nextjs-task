import React from "react"

interface InfoButtonProps {
  icon: React.ReactNode
  label: string
  value: string // New prop for dynamic value
}

const InfoButton: React.FC<InfoButtonProps> = ({ icon, label, value }) => {
  return (
    <button className="flex items-center justify-start p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out shadow-md">
      {icon && <span className="mr-2 text-lg">{icon}</span>}
      <span className="font-semibold text-gray-700">
        {label} <span className="font-normal">{value}</span>
      </span>
    </button>
  )
}

export default InfoButton
