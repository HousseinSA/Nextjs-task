import React from "react"
import Link from "next/link"

type NavLinkProps = {
  menu: string
  isActive: boolean
  onClick: () => void
  route: string
}

const NavLink = ({ menu, isActive, onClick, route }: NavLinkProps) => {
  const baseClasses = "border-b-2 py-[5px] px-[20px] cursor-pointer"

  const activeClasses = "bg-bgColor text-textColor rounded border-none"

  const inactiveClasses =
    "text-white border-transparent  hover:border-gray-700 hover:text-gray-300"

  return (
    <Link href={route}>
      <li
        className={`${baseClasses}  ${
          isActive ? activeClasses : inactiveClasses
        }`}
        onClick={onClick}
      >
        {menu}
      </li>
    </Link>
  )
}

export default NavLink
