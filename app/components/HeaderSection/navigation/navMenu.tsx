'use client';
import React, { useState, useEffect } from 'react';
import NavLink from './navLink';

type Language = 'fr' | 'ar';

type NavItems = {
    fr: string[];
    ar: string[];
};

const navItems: NavItems = {
    fr: ['Accueil', 'Contact', 'À propos'],
    ar: ['الرئيسية', 'اتصل', 'معلومات عنا'],
};

type NavMenuProps = {
    language: Language;
};

const NavMenu: React.FC<NavMenuProps> = ({ language }) => {
    const [activeLink, setActiveLink] = useState<string>(navItems[language][0]);

    useEffect(() => {
        const storedActiveLink = localStorage.getItem('activeLink');
        if (storedActiveLink && navItems[language].includes(storedActiveLink)) {
            setActiveLink(storedActiveLink);
        }
    }, [language]); 

    useEffect(() => {
        const currentIndex = navItems['fr'].indexOf(activeLink) !== -1
            ? navItems['fr'].indexOf(activeLink)
            : navItems['ar'].indexOf(activeLink);

        const newActiveLink = navItems[language][currentIndex] || navItems[language][0];
        setActiveLink(newActiveLink);
    }, [language, activeLink]);

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink); 
    }, [activeLink]);

    return (
        <div className="flex-1 hidden md:flex justify-center items-center gap-3">
            {navItems[language].map((navLink, index) => (
                <NavLink
                    key={index}
                    menu={navLink}
                    isActive={activeLink === navLink} 
                    onClick={() => setActiveLink(navLink)} 
                />
            ))}
        </div>
    );
};

export default NavMenu;