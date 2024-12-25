import Link from "next/link"
import React from "react"

interface NavLinkProps {
  menu: string
  route: string
  isActive: boolean
  onClick: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
  menu,
  route,
  isActive,
  onClick,
}) => {
  const baseClasses = "border-b-2 py-[5px] px-[20px] cursor-pointer"
  const activeClasses = "bg-bgColor text-textColor rounded border-none"
  const inactiveClasses =
    "text-white border-transparent hover:border-gray-700 hover:text-gray-300"

  const handleClick = () => {
    onClick()
  }

  return (
    <Link href={route}>
      <li
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
        onClick={handleClick}
      >
        {menu}
      </li>
    </Link>
  )
}

export default NavLink
