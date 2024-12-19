"use client"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import NavLink from "./navLink"
import { setActiveLink } from "@lib/redux/stateSlice"
import { languages } from "@lib/languages"

const MobileNavMenu: React.FC<{ activeLink: string; language: string }> = ({
  activeLink,
  language,
}) => {
  const dispatch = useDispatch()
  const currentLanguage = languages.find((lang) => lang.code === language)
  const navItems = currentLanguage?.content.navItems || {}

  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (link: string) => {
    dispatch(setActiveLink(link))
    setIsOpen(false) // Close menu on link click
  }

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      <ul
        className={`absolute top-12 left-0 w-full bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {Object.keys(navItems).map((navLink, index) => (
          <li key={index} className="border-b border-gray-200">
            <NavLink
              menu={navLink}
              isActive={activeLink === navLink}
              onClick={() => handleLinkClick(navLink)}
              className="block p-4 text-gray-700 hover:bg-gray-100"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNavMenu
