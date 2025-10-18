import React, { useState, useCallback, useEffect, useMemo } from 'react';
import type { UserRole, View, Product } from './types';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsListPage from './pages/ProductsListPage';
import BookingPage from './pages/BookingPage';
import Header from './components/Header';
import { getTranslator, Language } from './translations';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [language, setLanguage] = useState<Language>('ar');

  const t = useMemo(() => getTranslator(language), [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prevLang => prevLang === 'ar' ? 'en' : 'ar');
    // Reset view to avoid inconsistent translated state
    handleGoToHome();
  }, []);

  const handleSelectRole = useCallback((role: UserRole) => {
    setUserRole(role);
    setView('login');
  }, []);

  const handleLogin = useCallback(() => {
    setView('categories');
  }, []);

  const handleSelectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
    setView('products');
  }, []);
  
  const handleSelectProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
    setView('booking');
  }, []);

  const handleGoToHome = useCallback(() => {
      setView('home');
      setUserRole(null);
      setSelectedCategory('');
      setSelectedProduct(null);
  }, []);

  const handleBackToCategories = useCallback(() => {
      setView('categories');
      setSelectedCategory('');
  }, []);

  const handleBackToProducts = useCallback(() => {
      setView('products');
      setSelectedProduct(null);
  }, []);

  const handleConfirmBooking = useCallback(() => {
    alert(t('bookingConfirmed'));
    handleGoToHome();
  }, [t, handleGoToHome]);

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomePage onSelectRole={handleSelectRole} t={t} lang={language} />;
      case 'login':
        return <LoginPage userRole={userRole} onLogin={handleLogin} t={t} />;
      case 'categories':
        return (
          <>
            <Header onLogoClick={handleGoToHome} lang={language} onToggleLang={toggleLanguage} t={t} />
            <main><CategoriesPage onSelectCategory={handleSelectCategory} t={t} /></main>
          </>
        );
      case 'products':
        return (
          <>
            <Header onLogoClick={handleGoToHome} lang={language} onToggleLang={toggleLanguage} t={t} />
            <main><ProductsListPage category={selectedCategory} onSelectProduct={handleSelectProduct} onBack={handleBackToCategories} t={t} lang={language} /></main>
          </>
        );
      case 'booking':
        if (!selectedProduct) {
          setView('categories'); // Failsafe
          return null;
        }
        return (
           <>
            <Header onLogoClick={handleGoToHome} lang={language} onToggleLang={toggleLanguage} t={t} />
            <main><BookingPage product={selectedProduct} onBack={handleBackToProducts} onConfirm={handleConfirmBooking} t={t} lang={language} /></main>
          </>
        );
      default:
        return <HomePage onSelectRole={handleSelectRole} t={t} lang={language} />;
    }
  };

  return <div className="min-h-screen main-bg">{renderView()}</div>;
};

export default App;
