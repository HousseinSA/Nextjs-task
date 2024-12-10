import React from "react"
import Image from "next/image"
import { languages } from "@lib/languages"

type LangSwitcherProps = {
  language: string
  toggleLanguage: () => void
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({
  language,
  toggleLanguage,
}) => {
  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="hidden md:flex relative cursor-pointer">
      <div className="flex gap-1.5 items-center " onClick={toggleLanguage}>
        {currentLanguage && (
          <>
            <Image
              className="w-4 h-4 rounded-full opacity-70 cursor-pointer "
              alt={`${currentLanguage.name} Flag`}
              src={currentLanguage.flagSrc}
              width={64}
              height={64}
            />
            <span className="opacity-70 text-white cursor-pointer">
              {currentLanguage.name}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default LangSwitcher
