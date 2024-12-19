import React from "react"
import { useDispatch } from "react-redux"
import { setActiveLink } from "@lib/redux/stateSlice"
import LangSwitcher from "@components/HeaderSection/langSwitcher"
import { languages } from "@lib/languages"
import NavLink from "./navLink"

const MobileMenu: React.FC<{
  activeLink: string
  language: string
  toggleLanguage: () => void
}> = ({ activeLink, language, toggleLanguage }) => {
  const dispatch = useDispatch()
  const currentLanguage = languages.find((lang) => lang.code === language)
  const navItems = currentLanguage?.content.navItems || {}

  return (
    <div className="absolute top-16 md:hidden left-0 w-full h-auto p-8 bg-headerBg text-textColor flex flex-col items-center justify-center z-40">
      <ul className="flex flex-col items-center gap-4">
        {Object.keys(navItems).map((navLink, index) => {
          const { route } = navItems[navLink]
          return (
            <NavLink
              key={index}
              menu={navLink}
              route={route}
              isActive={activeLink === navLink}
              onClick={() => dispatch(setActiveLink(navLink))}
            />
          )
        })}
        <div className="mt-6">
          <LangSwitcher
            language={language}
            toggleLanguage={toggleLanguage}
            mobileState={true}
          />
        </div>
      </ul>
    </div>
  )
}

export default MobileMenu
