import React from 'react';
import LogoIcon from './icons/LogoIcon';
import type { Language, TranslationKey } from '../translations';


interface HeaderProps {
  onLogoClick: () => void;
  lang: Language;
  onToggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, lang, onToggleLang, t }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div onClick={onLogoClick} className="cursor-pointer">
            <LogoIcon lang={lang} />
          </div>
          <nav>
             <button
              onClick={onToggleLang}
              className="font-bold text-teal-600 hover:text-teal-800 transition-colors px-4 py-2 rounded-md hover:bg-teal-50"
            >
              {t('toggleLanguage')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
