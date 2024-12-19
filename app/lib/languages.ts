export interface NavItem {
  label: string
  route: string
}

export interface LanguageContent {
  navItems: Record<string, NavItem>
}

export interface Language {
  code: string
  name: string
  flagSrc: string
  content: LanguageContent
}

export const languages: Language[] = [
  {
    code: "fr",
    name: "Français",
    flagSrc: "/french.webp",
    content: {
      navItems: {
        Accueil: { label: "الرئيسية", route: "/" },
        Contact: { label: "اتصل", route: "/contact" },
        "À propos": { label: "حول", route: "/about" },
      },
    },
  },
  {
    code: "ar",
    name: "العربية",
    flagSrc: "/arabic.webp",
    content: {
      navItems: {
        حول: { label: "À propos", route: "/about" },
        اتصل: { label: "Contacte", route: "/contact" },
        الرئيسية: { label: "Accueil", route: "/" },
      },
    },
  },
]
