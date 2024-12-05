import React from "react"

type NavLinkProps = {
  menu: string
  isActive: boolean
  onClick: () => void
}

const NavLink = ({ menu, isActive, onClick }: NavLinkProps) => {
  const baseClasses = "border-b-2 py-[5px] px-[20px] cursor-pointer"

  const activeClasses = "bg-bgColor text-textColor rounded"

  const inactiveClasses =
    "text-white border-transparent transition  hover:border-gray-700 hover:text-gray-400"

  return (
    <li
      className={`${baseClasses}  ${
        isActive ? activeClasses : inactiveClasses
      }`}
      onClick={onClick}
    >
      {menu}
    </li>
  )
}

export default NavLink
