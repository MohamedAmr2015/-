import React, { useState } from 'react';
import type { UserRole } from '../types';
import type { TranslationKey } from '../translations';

interface LoginPageProps {
  userRole: UserRole;
  onLogin: () => void;
  t: (key: TranslationKey) => string;
}

const LoginPage: React.FC<LoginPageProps> = ({ userRole, onLogin, t }) => {
  const [isLogin, setIsLogin] = useState(true);

  const roleKey = userRole === 'customer' ? 'iAmACustomer' : 'iAmAMerchant';
  const primaryColor = userRole === 'customer' ? 'teal' : 'orange';

  const getTitle = () => {
    if (isLogin) {
      return userRole === 'customer' ? t('customerLogin') : t('merchantLogin');
    }
    return userRole === 'customer' ? t('newCustomerAccount') : t('newMerchantAccount');
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
        <div className={`bg-${primaryColor}-600 p-6`}>
          <h2 className="text-3xl font-bold text-white text-center">
            {getTitle()}
          </h2>
        </div>
        <div className="p-8">
          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="mb-5">
              <label htmlFor="emailOrPhone" className="block mb-2 text-sm font-medium text-gray-700 text-start">
                {t('emailOrPhone')}
              </label>
              <input
                type="text"
                id="emailOrPhone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 text-start">
                {t('password')}
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700 text-start">
                  {t('confirmPassword')}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className={`w-full text-white bg-${primaryColor}-600 hover:bg-${primaryColor}-700 focus:ring-4 focus:outline-none focus:ring-${primaryColor}-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-300`}
            >
              {isLogin ? t('login') : t('createAccount')}
            </button>
            <p className="text-sm text-gray-600 mt-6 text-center">
              {isLogin ? t('noAccount') : t('hasAccount')}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className={`font-medium text-${primaryColor}-600 hover:underline mx-1`}
              >
                {isLogin ? t('createNewAccount') : t('login')}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
