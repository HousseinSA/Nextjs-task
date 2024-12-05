
export interface LanguageContent {
    navItems: Record<string, string>;
  }
  
  export interface Language {
    code: string;
    name: string;
    flagSrc: string;
    content: LanguageContent;
  }
  
  export const languages: Language[] = [
    {
      code: 'fr',
      name: 'Français',
      flagSrc: '/french.webp',
      content: {
        navItems: {
          'Accueil': 'الرئيسية',
          'Contact': 'اتصل',
          'À propos': 'حول',
        },
      },
    },
    {
      code: 'ar',
      name: 'العربية',
      flagSrc: '/arabic.webp',
      content: {
        navItems: {
          'الرئيسية': 'Accueil',
          'اتصل': 'Contact',
          'حول': 'À propos',
        },
      },
    },
  ];