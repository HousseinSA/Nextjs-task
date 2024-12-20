"use client"
import React from "react"
import NavLink from "./navLink"
import { useDispatch } from "react-redux"
import { setActiveLink } from "@lib/redux/stateSlice"
import { languages } from "@/app/lib/types/languages/languages"

const NavMenu: React.FC<{ activeLink: string; language: string }> = ({
  activeLink,
  language,
}) => {
  const dispatch = useDispatch()
  const currentLanguage = languages.find((lang) => lang.code === language)
  const navItems = currentLanguage?.content.navItems || {}

  const handleLinkClick = (link: string) => {
    dispatch(setActiveLink(link))
  }

  return (
    <ul className="flex-1 hidden md:flex justify-center items-center gap-3">
      {Object.keys(navItems).map((navLink) => (
        // @ts-expect-error fix
        <NavLink
          key={navLink}
          menu={navLink}
          route={navItems[navLink].route}
          isActive={activeLink === navLink}
          onClick={() => handleLinkClick(navLink)}
        />
      ))}
    </ul>
  )
}

export default NavMenu
