import React from 'react';
import type { Category } from '../types';
import AppliancesIcon from '../components/icons/AppliancesIcon';
import CarIcon from '../components/icons/CarIcon';
import ClothingIcon from '../components/icons/ClothingIcon';
import type { TranslationKey } from '../translations';


interface CategoriesPageProps {
  onSelectCategory: (category: string) => void;
  t: (key: TranslationKey) => string;
}

const CategoryCard: React.FC<{ category: Category; onClick: () => void; }> = ({ category, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-500"
  >
    <category.icon />
    <h3 className="mt-4 text-xl font-bold text-gray-800">{category.name}</h3>
  </div>
);

const CategoriesPage: React.FC<CategoriesPageProps> = ({ onSelectCategory, t }) => {
  const categories: Category[] = [
    { id: 'appliances', name: t('categoryAppliances'), icon: AppliancesIcon },
    { id: 'cars', name: t('categoryCars'), icon: CarIcon },
    { id: 'clothing', name: t('categoryClothing'), icon: ClothingIcon },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">{t('chooseCategory')}</h1>
      <p className="text-lg text-center text-gray-600 mb-12">{t('browseSections')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} onClick={() => onSelectCategory(cat.name)} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
