"use client"
import React, { useState, useEffect } from "react"
import NavLink from "./navLink"

type Language = "fr" | "ar"

const navItems: Record<Language, string[]> = {
  fr: ["Accueil", "Contact", "À propos"],
  ar: ["الرئيسية", "اتصل", "معلومات عنا"],
}

const NavMenu: React.FC<{ language: Language }> = ({ language }) => {
  const [activeLink, setActiveLink] = useState(() => {
    const storedActiveLink = localStorage.getItem("activeLink")
    return storedActiveLink && navItems[language].includes(storedActiveLink)
      ? storedActiveLink
      : navItems[language][0]
  })

  useEffect(() => {
    setActiveLink((prevActiveLink) =>
      navItems[language].includes(prevActiveLink)
        ? prevActiveLink
        : navItems[language][0]
    )
  }, [language])

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink)
  }, [activeLink])

  return (
    <div className="flex-1 hidden md:flex justify-center items-center gap-3">
      {navItems[language].map((navLink, index) => (
        <NavLink
          key={index}
          menu={navLink}
          isActive={activeLink === navLink}
          onClick={() => setActiveLink(navLink)}
        />
      ))}
    </div>
  )
}

export default NavMenu
