import React from 'react';
import type { Product } from '../types';
import type { Language, TranslationKey } from '../translations';

interface ProductsListPageProps {
  category: string;
  onSelectProduct: (product: Product) => void;
  onBack: () => void;
  t: (key: TranslationKey) => string;
  lang: Language;
}

const ProductCard: React.FC<{ product: Product; onSelect: () => void; t: (key: TranslationKey) => string; }> = ({ product, onSelect, t }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
    <div className="overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-teal-600 font-bold text-lg">{product.pricePerDay} {t('pricePerDay')}</p>
        <button onClick={onSelect} className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300 font-semibold">
          {t('rentNow')}
        </button>
      </div>
    </div>
  </div>
);

const ProductsListPage: React.FC<ProductsListPageProps> = ({ category, onSelectProduct, onBack, t, lang }) => {
  const placeholderProducts: Product[] = [
    { id: 1, name: t('fridgeName'), description: t('fridgeDesc'), pricePerDay: 50, imageUrl: 'https://picsum.photos/seed/fridge/400/300', category: t('categoryAppliances') },
    { id: 2, name: t('washerName'), description: t('washerDesc'), pricePerDay: 40, imageUrl: 'https://picsum.photos/seed/washer/400/300', category: t('categoryAppliances') },
    { id: 3, name: t('sedanName'), description: t('sedanDesc'), pricePerDay: 250, imageUrl: 'https://picsum.photos/seed/sedan/400/300', category: t('categoryCars') },
    { id: 4, name: t('suvName'), description: t('suvDesc'), pricePerDay: 400, imageUrl: 'https://picsum.photos/seed/suv/400/300', category: t('categoryCars') },
    { id: 5, name: t('dressName'), description: t('dressDesc'), pricePerDay: 150, imageUrl: 'https://picsum.photos/seed/dress/400/300', category: t('categoryClothing') },
    { id: 6, name: t('suitName'), description: t('suitDesc'), pricePerDay: 200, imageUrl: 'https://picsum.photos/seed/suit/400/300', category: t('categoryClothing') },
  ];

  const filteredProducts = placeholderProducts.filter(p => p.category === category);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-10">
        <button onClick={onBack} className="text-teal-600 hover:text-teal-800 p-2 rounded-full hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {lang === 'ar' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7" />
                )}
            </svg>
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mx-4">{t('availableProducts')} <span className="text-teal-600">{category}</span></h1>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onSelect={() => onSelectProduct(product)} t={t} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">{t('noProducts')}</p>
      )}
    </div>
  );
};

export default ProductsListPage;
