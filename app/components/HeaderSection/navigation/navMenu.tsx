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
    const initialActiveLink = localStorage.getItem('activeLink') || navItems[language][0];
    const [activeLink, setActiveLink] = useState<string>(initialActiveLink);

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
                    isActive={activeLink === navLink} // Check if the link is active
                    onClick={() => setActiveLink(navLink)} // Update active link on click
                />
            ))}
        </div>
    );
};

export default NavMenu;