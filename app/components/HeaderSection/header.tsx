"use client"
import React, { useState } from "react"
import LangSwitcher from "@components/HeaderSection/langSwitcher"
import NavMenu from "@components/HeaderSection/navigation/navMenu"
import Logo from "./logo"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage, setActiveLink } from "@lib/redux/stateSlice"
import { languages } from "@lib/languages"
import { AlignJustify, X } from "lucide-react"
import MobileNavMenu from "./navigation/MobileNavMenu"

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

  const [mobileState, setMobileState] = useState(false)

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === language)
    const newLang =
      currentIndex === languages.length - 1
        ? languages[0].code
        : languages[currentIndex + 1].code

    const newActiveLink =
      newLang === "ar"
        ? Object.keys(languages[currentIndex].content.navItems)[0]
        : activeLink

    dispatch(setLanguage(newLang))
    dispatch(setActiveLink(newActiveLink))
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
        className={`hidden md:flex flex-1 justify-center items-center gap-3`}
      >
        <NavMenu activeLink={activeLink}   mobileState={mobileState} language={language} />
        <LangSwitcher language={language}   mobileState={mobileState} toggleLanguage={toggleLanguage} />
      </div>
      <MobileNavMenu
        mobileState={mobileState}
        activeLink={activeLink}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </div>
  )
}

export default Header
