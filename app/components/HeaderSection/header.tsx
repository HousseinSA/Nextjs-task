"use client"
import React from "react"
import { AlignJustify, X } from "lucide-react"
import LangSwitcher from "@/app/components/HeaderSection/Navigation/langSwitcher"
import NavMenu from "@/app/components/HeaderSection/Navigation/NavMenuList/navMenu"
import Logo from "./logo"
import MobileMenu from "./Navigation/NavMenuList/MobileMenu"
import { useHeader } from "@hooks/header/useHeader"

const Header: React.FC = () => {
  const { language, toggleLanguage, toggleMobileMenu, mobileState } =
    useHeader()

  const isArabic = language === "ar"
  const flexDirection = isArabic ? "flex-row-reverse" : "flex-row"

  return (
    <div
      className={`sticky top-0 z-50 bg-headerBg flex items-center justify-between p-5 gap-x-3 transition-colors duration-300 ${flexDirection}`}
    >
      <Logo />
      <button onClick={toggleMobileMenu} className="cursor-pointer md:hidden">
        {mobileState ? (
          <X
            size={30}
            color="white"
            className="transition-opacity duration-300"
          />
        ) : (
          <AlignJustify
            size={30}
            color="white"
            className="transition-opacity duration-300"
          />
        )}
      </button>
      <div
        className={`flex-1 hidden md:flex justify-center items-center gap-3  ${flexDirection}`}
      >
        <NavMenu />
        <LangSwitcher toggleLanguage={toggleLanguage} />
      </div>
      {mobileState && <MobileMenu toggleLanguage={toggleLanguage} />}
    </div>
  )
}

export default Header
