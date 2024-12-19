import { languages } from "./languages"

export const getLabelByPathname = (pathname: string, language: string) =>  {
  const currentLanguage = languages.find((lang) => lang.code !== language)
  if (!currentLanguage) return null

  const navItems = currentLanguage.content.navItems
  for (const key in navItems) {
    if (navItems[key].route === pathname) {
      return navItems[key].label
    }
  }
  return null
}
