"use client"
import React from "react"
import { useDispatch } from "react-redux"
import NavLink from "./navLink"

import { setActiveLink } from "@lib/redux/stateSlice"
import { languages } from "@lib/languages" 

const NavMenu: React.FC<{ activeLink: string; language: string }> = ({
  activeLink,
  language,
}) => {
  const dispatch = useDispatch()

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleLinkClick = (link: string) => {
    dispatch(setActiveLink(link)) 
  }

  const navItems = currentLanguage?.content.navItems || {}

  return (
    <ul className="flex-1 hidden md:flex justify-center items-center gap-3">
      {Object.keys(navItems).map((navLink, index) => (
        <NavLink
          key={index}
          menu={navLink}
          isActive={activeLink === navLink} 
          onClick={() => handleLinkClick(navLink)}
        />
      ))}
    </ul>
  )
}

export default NavMenu
