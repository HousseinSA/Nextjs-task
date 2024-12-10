"use client"
import React, { useState } from "react"
import NavLink from "./navLink"
const NavMenu = () => {
  const navLinks = ["Accueil", "Contacte", "A props"]
  const [activeLink, setActiveLink] = useState<string>("")

  function handelActive(active: string) {
    setActiveLink(active)
  }

  console.log(activeLink)
  return (
    <ul className="flex-1 hidden md:flex justify-center items-center gap-3">
      {navLinks.map((navLink, index) => {
        return (
          <NavLink
            key={index}
            navLink={navLink}
            handelActive={handelActive}
            isActive={activeLink === navLink}
          />
        )
      })}
    </ul>
  )
}

export default NavMenu
