"use client"
import React from "react"
import LangSwitcher from "@components/HeaderSection/langSwitcher"
import NavMenu from "@components/HeaderSection/navigation/navMenu"
import Logo from "./logo"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage, setActiveLink } from "@lib/redux/stateSlice"
import { languages } from "@lib/languages"

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

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === language)
    const newLang =
      currentIndex === languages.length - 1
        ? languages[0].code
        : languages[currentIndex + 1].code

    const newActiveLink =
      languages[currentIndex].content.navItems[activeLink] || ""

    dispatch(setLanguage(newLang))
    dispatch(setActiveLink(newActiveLink))
  }

  return (
    <div
      className={`sticky top-0 z-50 bg-headerBg flex items-center justify-between p-5 gap-x-10 transition-colors duration-300 ${
        language === "ar" ? "flex-row-reverse" : ""
      }`}
    >
      <Logo />
      <NavMenu activeLink={activeLink} language={language} />
      <LangSwitcher language={language} toggleLanguage={toggleLanguage} />
    </div>
  )
}

export default Header
