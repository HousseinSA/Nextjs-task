import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { gsap } from "gsap"
import { setActiveLink } from "@lib/redux/stateSlice"
import LangSwitcher from "@/app/components/HeaderSection/Navigation/langSwitcher"
import { languages } from "@/app/lib/types/languages/languages"
import NavLink from "./navLink"
interface MobileMenuProps {
  activeLink: string
  language: string
  toggleLanguage: () => void
  closeMenu: () => void
  mobileState: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeLink,
  language,
  toggleLanguage,
  closeMenu,
  mobileState,
}) => {
  const dispatch = useDispatch()
  const currentLanguage = languages.find((lang) => lang.code === language)
  const navItems = currentLanguage?.content.navItems || {}
  const menuArrangementState =
    language === "ar" ? "flex flex-col-reverse" : "flex flex-col"
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mobileState) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none"
          }
        },
      })
    }
  }, [mobileState])

  const handleLinkClick = (navLink: string) => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        dispatch(setActiveLink(navLink))
        closeMenu()
      },
    })
  }

  return (
    <div
      ref={menuRef}
      className={`absolute top-16 md:hidden left-0 w-full h-auto p-8 bg-headerBg text-textColor flex flex-col items-center justify-center z-40 ${
        mobileState ? "" : "hidden"
      }`}
      style={{ display: mobileState ? "flex" : "none" }}
    >
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
              onClick={() => handleLinkClick(navLink)}
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
