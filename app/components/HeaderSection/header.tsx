"use client"
import React, { useState, useEffect } from "react"
import LangSwitcher from "@components/HeaderSection/langSwitcher"
import NavMenu from "@components/HeaderSection/navigation/navMenu"
import Logo from "./logo"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage, setActiveLink } from "@lib/redux/stateSlice"
import { languages } from "@lib/languages"
import { AlignJustify, X } from "lucide-react"
import { usePathname } from "next/navigation"
import MobileMenu from "./navigation/MobileMenu"

interface StatesProps {
  language: string
  activeLink: string
}

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { language, activeLink } = useSelector((state: StatesProps) => ({
    language: state.language,
    activeLink: state.activeLink,
  }))

  const pathname = usePathname()
  const [mobileState, setMobileState] = useState(false)

  useEffect(() => {
    const currentLanguage = languages.find((lang) => lang.code === language)
    const currentPath = pathname

    const matchingNavLink = Object.keys(
      currentLanguage?.content.navItems || {}
    ).find((navLink) => {
      return currentLanguage?.content.navItems[navLink].route === currentPath
    })

    if (matchingNavLink) {
      dispatch(setActiveLink(matchingNavLink))
    } else {
      const firstLink = Object.keys(currentLanguage?.content.navItems || {})[0]
      dispatch(setActiveLink(firstLink))
    }
  }, [language, pathname, dispatch])

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === language)
    const newLang =
      currentIndex === languages.length - 1
        ? languages[0].code
        : languages[currentIndex + 1].code

    dispatch(setLanguage(newLang))
  }

  const toggleMobileMenu = () => {
    setMobileState((prev) => !prev)
  }

  return (
    <div
      className={`sticky top-0 z-50 bg-headerBg flex items-center justify-between p-5 gap-x-10 transition-colors duration-300 ${
        language === "ar" ? "flex-row-reverse" : ""
      }`}
    >
      <button onClick={toggleMobileMenu} className="cursor-pointer md:hidden">
        {mobileState ? (
          <X size={30} color="white" />
        ) : (
          <AlignJustify size={30} color="white" />
        )}
      </button>
      <Logo />
      <div
        className={`hidden md:flex   ${
          language === "ar" ? "flex-row-reverse" : "flex-row"
        } flex-1 justify-center items-center gap-3`}
      >
        <NavMenu activeLink={activeLink} language={language} />
        <div>
          <LangSwitcher
            language={language}
            toggleLanguage={toggleLanguage}
            mobileState={mobileState}
          />
        </div>
      </div>
      {mobileState && (
        <MobileMenu
          activeLink={activeLink}
          language={language}
          toggleLanguage={toggleLanguage}
        />
      )}
    </div>
  )
}

export default Header
