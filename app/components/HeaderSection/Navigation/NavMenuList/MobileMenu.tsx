import React, { useRef } from "react"
import LangSwitcher from "@/app/components/HeaderSection/Navigation/langSwitcher"
import { languages } from "@/app/lib/types/languages/languages"
import NavLink from "./navLink"
import { useMobileMenuAnimation } from "@/app/hooks/header/useMobileMenuAnimation"
import { useHeaderValues } from "@hooks/header/useHeader"

interface MobileMenuProps {
  toggleLanguage: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ toggleLanguage }) => {
  const { language, mobileState, activeLink } = useHeaderValues()

  const currentLanguage = languages.find((lang) => lang.code === language)
  const navItems = currentLanguage?.content.navItems || {}
  const menuRef = useRef<HTMLDivElement>(null)
  const handleLinkClick = useMobileMenuAnimation(menuRef)

  const menuArrangementClass =
    language === "ar" ? "flex flex-col-reverse" : "flex flex-col"

  return (
    <div
      ref={menuRef}
      className={`absolute top-16 md:hidden left-0 w-full p-8 bg-headerBg text-textColor flex flex-col items-center justify-center z-40 ${
        mobileState ? "flex" : "hidden"
      }`}
    >
      <ul className={`${menuArrangementClass} items-center gap-4`}>
        {Object.keys(navItems).map((navLink) => {
          const { route } = navItems[navLink]
          return (
            <NavLink
              key={navLink}
              menu={navLink}
              route={route}
              isActive={activeLink === navLink}
              onClick={() => handleLinkClick(navLink)}
            />
          )
        })}
      </ul>
      <LangSwitcher
        toggleLanguage={toggleLanguage}
      />
    </div>
  )
}

export default MobileMenu
