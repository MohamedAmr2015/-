import React, { useState } from 'react';
import type { Product } from '../types';
import type { Language, TranslationKey } from '../translations';

interface BookingPageProps {
  product: Product;
  onBack: () => void;
  onConfirm: () => void;
  t: (key: TranslationKey) => string;
  lang: Language;
}

const FileInput: React.FC<{ label: string; id: string; onChange: (file: File | null) => void; preview: string | null; }> = ({ label, id, onChange, preview }) => {
    return (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-teal-500 transition-colors duration-300">
            <label htmlFor={id} className="cursor-pointer">
                {preview ? (
                    <img src={preview} alt="Preview" className="mx-auto h-32 w-auto object-contain rounded-md" />
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <p className="mt-2 text-sm text-gray-600">{label}</p>
                    </>
                )}
            </label>
            <input id={id} type="file" className="hidden" accept="image/*" onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)} />
        </div>
    );
}


const BookingPage: React.FC<BookingPageProps> = ({ product, onBack, onConfirm, t, lang }) => {
  const [idImage, setIdImage] = useState<File | null>(null);
  const [selfieImage, setSelfieImage] = useState<File | null>(null);
  const [idPreview, setIdPreview] = useState<string | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);

  const handleIdChange = (file: File | null) => {
    setIdImage(file);
    if(file) setIdPreview(URL.createObjectURL(file));
    else setIdPreview(null);
  }

  const handleSelfieChange = (file: File | null) => {
    setSelfieImage(file);
    if(file) setSelfiePreview(URL.createObjectURL(file));
    else setSelfiePreview(null);
  }

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
        <h1 className="text-3xl font-bold text-gray-800 mx-4">{t('completeBooking')}</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{t('productDetails')}</h2>
          <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl font-bold text-teal-600 mt-4">{product.pricePerDay} {t('pricePerDay')}</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{t('identityVerification')}</h2>
          <p className="text-gray-500 mb-6">{t('uploadClearPhotos')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FileInput label={t('idCardPhoto')} id="id-upload" onChange={handleIdChange} preview={idPreview} />
            <FileInput label={t('selfieWithId')} id="selfie-upload" onChange={handleSelfieChange} preview={selfiePreview} />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">{t('paymentMethod')}</h2>
          <div className="space-y-3 mb-8">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-teal-50 has-[:checked]:border-teal-500">
              <input type="radio" name="payment" className="form-radio text-teal-600" defaultChecked />
              <span className="mx-3 text-gray-700">{t('creditCard')}</span>
            </label>
             <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-teal-50 has-[:checked]:border-teal-500">
              <input type="radio" name="payment" className="form-radio text-teal-600" />
              <span className="mx-3 text-gray-700">{t('vodafoneCash')}</span>
            </label>
             <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-teal-50 has-[:checked]:border-teal-500">
              <input type="radio" name="payment" className="form-radio text-teal-600" />
              <span className="mx-3 text-gray-700">{t('cashOnDelivery')}</span>
            </label>
          </div>
          
          <button
            onClick={onConfirm}
            disabled={!idImage || !selfieImage}
            className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {t('confirmAndPay')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
