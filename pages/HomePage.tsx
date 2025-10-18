import React from 'react';
import type { UserRole } from '../types';
import LogoIcon from '../components/icons/LogoIcon';
import type { Language, TranslationKey } from '../translations';

interface HomePageProps {
  onSelectRole: (role: UserRole) => void;
  t: (key: TranslationKey) => string;
  lang: Language;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectRole, t, lang }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
        <div className="mb-8">
            <LogoIcon className="mx-auto" lang={lang} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t('welcome')}
        </h1>
        <p className="text-gray-600 mb-10 text-lg">
          {t('tagline')}
        </p>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelectRole('customer')}
            className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300 transform hover:scale-105"
          >
            {t('iAmACustomer')}
          </button>
          <button
            onClick={() => onSelectRole('merchant')}
            className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 transform hover:scale-105"
          >
            {t('iAmAMerchant')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
