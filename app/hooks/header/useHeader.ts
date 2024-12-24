import {
  setLanguage,
  setActiveLink,
  setMobileState,
} from "@/app/lib/redux/headerSlice"
import { languages } from "@/app/lib/types/languages/languages"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@lib/types/HeaderTypes"

import { usePathname } from "next/navigation"

export const useHeader = () => {
  const dispatch = useDispatch()
  const { language, activeLink, mobileState } = useSelector(
    (state: RootState) => state.header
  )
  const pathname = usePathname()

  useEffect(() => {
    const currentLanguage = languages.find((lang) => lang.code === language)
    const navItems = currentLanguage?.content.navItems || {}
    const matchingNavLink = Object.keys(navItems).find(
      (navLink) => navItems[navLink].route === pathname
    )

    dispatch(setActiveLink(matchingNavLink || Object.keys(navItems)[0]))
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
    dispatch(setMobileState(!mobileState))
  }

  return { language, activeLink, mobileState, toggleLanguage, toggleMobileMenu }
}

export const useHeaderValues = () => {
  const language = useSelector((state: RootState) => state.header.language)
  const activeLink = useSelector((state: RootState) => state.header.activeLink)
  const mobileState = useSelector(
    (state: RootState) => state.header.mobileState
  )
  return { language, activeLink, mobileState }
}
