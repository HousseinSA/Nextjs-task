'use client';
import React, { useState } from 'react';
import LangSwitcher from "./langSwitcher";
import Logo from "./logo";
import NavMenu from "./navigation/navMenu";

type Language = 'fr' | 'ar';

const Header: React.FC = () => {
    const [language, setLanguage] = useState<Language>('fr');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'fr' ? 'ar' : 'fr'));
    };

    return (
        <div className={`sticky top-0 bg-[#0f172a] flex items-center justify-between p-6 gap-x-10 transition-colors duration-300`}>
            {language === 'ar' ? (
                <>
                    <LangSwitcher language={language} toggleLanguage={toggleLanguage} />
                    <NavMenu language={language} /> 
                    <Logo />
                </>
            ) : (
                <>
                    <Logo />
                    <NavMenu language={language} /> 
                    <LangSwitcher language={language} toggleLanguage={toggleLanguage} />
                </>
            )}
        </div>
    );
};

export default Header;