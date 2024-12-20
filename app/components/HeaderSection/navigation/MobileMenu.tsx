import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setActiveLink } from "@lib/redux/stateSlice"
import LangSwitcher from "@components/HeaderSection/langSwitcher"
import { languages } from "@/app/lib/types/languages/languages"
import NavLink from "./navLink"

interface MobileMenuProps {
  activeLink: string
  language: string
  toggleLanguage: () => void
  closeMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeLink,
  language,
  toggleLanguage,
  closeMenu,
}) => {
  const dispatch = useDispatch()
  const currentLanguage = languages.find((lang) => lang.code === language)
  const navItems = currentLanguage?.content.navItems || {}
  const menuArrangementState =
    language === "ar" ? "flex flex-col-reverse" : "flex flex-col"

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [closeMenu])

  const handleLinkClick = (navLink: string) => {
    dispatch(setActiveLink(navLink))
    closeMenu()
  }

  return (
    <div className="absolute top-16 md:hidden left-0 w-full h-auto p-8 bg-headerBg text-textColor flex flex-col items-center justify-center z-40">
      <ul className={`${menuArrangementState} items-center gap-4`}>
        {Object.keys(navItems).map((navLink) => {
          const { route } = navItems[navLink]
          return (
            // @ts-expect-error fix
            <NavLink
              key={navLink}
              menu={navLink}
              route={route}
              isActive={activeLink === navLink}
              onClick={() => handleLinkClick(navLink)} // Close menu on link click
            />
          )
        })}
      </ul>
      <LangSwitcher
        language={language}
        toggleLanguage={toggleLanguage}
        mobileState={true}
      />
    </div>
  )
}

export default MobileMenu
