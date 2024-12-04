import React from "react";
import Image from "next/image";

type LangSwitcherProps = {
    language: string;
    toggleLanguage: () => void;
};

const LangSwitcher: React.FC<LangSwitcherProps> = ({ language, toggleLanguage }) => {
    return (
        <div className="hidden md:flex relative">
            <div className="flex gap-1.5 items-center cursor-pointer" onClick={toggleLanguage}>
                <Image
                    className="w-4 h-4 rounded-full"
                    alt={language === 'fr' ? "French Flag" : "Arabic Flag"}
                    src={language === 'fr' ? '/french.webp' : '/arabic.webp'}
                    width={20}
                    height={20}
                />
                <span className="opacity-80">{language === 'fr' ? 'Français' : 'العربية'}</span>
            </div>
        </div>
    );
};

export default LangSwitcher;