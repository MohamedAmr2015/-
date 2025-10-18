export const translations = {
  en: {
    appName: 'Aggarha',
    // Header
    toggleLanguage: 'العربية',
    // HomePage
    welcome: 'Welcome to Aggarha Platform',
    tagline: 'The perfect place to rent everything you need with ease and security.',
    iAmACustomer: 'I am a Customer',
    iAmAMerchant: 'I am a Merchant',
    // LoginPage
    customerLogin: 'Customer Login',
    merchantLogin: 'Merchant Login',
    newCustomerAccount: 'New Customer Account',
    newMerchantAccount: 'New Merchant Account',
    emailOrPhone: 'Email or Phone Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    login: 'Login',
    createAccount: 'Create Account',
    noAccount: "Don't have an account?",
    createNewAccount: 'Create a new account',
    hasAccount: 'Already have an account?',
    // CategoriesPage
    chooseCategory: 'Choose a Category',
    browseSections: 'Browse our diverse sections and choose what suits your needs.',
    categoryAppliances: 'Electrical Appliances',
    categoryCars: 'Cars',
    categoryClothing: 'Clothing & Fashion',
    // ProductsListPage
    availableProducts: 'Available products in:',
    rentNow: 'Rent Now',
    noProducts: 'No products currently available in this section.',
    // BookingPage
    completeBooking: 'Complete Booking & Verify Identity',
    productDetails: 'Product Details',
    identityVerification: '1. Identity Verification',
    uploadClearPhotos: 'Please upload clear photos to complete the rental process.',
    idCardPhoto: 'ID Card Photo',
    selfieWithId: 'Selfie with ID Card',
    paymentMethod: '2. Choose Payment Method',
    creditCard: 'Credit Card',
    vodafoneCash: 'Vodafone Cash',
    cashOnDelivery: 'Cash on Delivery',
    confirmAndPay: 'Confirm Booking & Pay',
    // Products
    fridgeName: 'Modern Refrigerator',
    fridgeDesc: 'No-frost refrigerator with large capacity and excellent cooling.',
    washerName: 'Automatic Washing Machine',
    washerDesc: 'Modern washing machine with multiple programs.',
    sedanName: 'Economy Sedan Car',
    sedanDesc: 'Comfortable and fuel-efficient family car.',
    suvName: 'SUV Car',
    suvDesc: 'A powerful car suitable for off-roading and adventures.',
    dressName: 'Evening Dress',
    dressDesc: 'An elegant dress suitable for special occasions.',
    suitName: 'Men\'s Suit',
    suitDesc: 'A formal suit with a modern design.',
    pricePerDay: 'EGP / day',
    // Confirmation
    bookingConfirmed: 'Your booking has been successfully confirmed! You will be contacted soon.'
  },
  ar: {
    appName: 'أجرها',
    // Header
    toggleLanguage: 'English',
    // HomePage
    welcome: 'أهلاً بك في منصة أجرها',
    tagline: 'المكان الأمثل لاستئجار كل ما تحتاجه بسهولة وأمان.',
    iAmACustomer: 'أنا عميل',
    iAmAMerchant: 'أنا تاجر',
    // LoginPage
    customerLogin: 'تسجيل دخول عميل',
    merchantLogin: 'تسجيل دخول تاجر',
    newCustomerAccount: 'حساب عميل جديد',
    newMerchantAccount: 'حساب تاجر جديد',
    emailOrPhone: 'البريد الإلكتروني أو رقم الموبايل',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    login: 'تسجيل الدخول',
    createAccount: 'إنشاء حساب',
    noAccount: 'ليس لديك حساب؟',
    createNewAccount: 'إنشاء حساب جديد',
    hasAccount: 'لديك حساب بالفعل؟',
    // CategoriesPage
    chooseCategory: 'اختر الفئة',
    browseSections: 'تصفح أقسامنا المتنوعة واختر ما يناسب احتياجك.',
    categoryAppliances: 'أجهزة كهربائية',
    categoryCars: 'سيارات',
    categoryClothing: 'ملابس وموضة',
    // ProductsListPage
    availableProducts: 'المنتجات المتاحة في قسم:',
    rentNow: 'استأجر الآن',
    noProducts: 'لا توجد منتجات متاحة في هذا القسم حاليًا.',
    // BookingPage
    completeBooking: 'إكمال الحجز وتأكيد الهوية',
    productDetails: 'تفاصيل المنتج',
    identityVerification: '1. تأكيد الهوية',
    uploadClearPhotos: 'يرجى رفع صور واضحة لإتمام عملية التأجير.',
    idCardPhoto: 'صورة البطاقة الشخصية',
    selfieWithId: 'صورة شخصية مع البطاقة',
    paymentMethod: '2. اختيار طريقة الدفع',
    creditCard: 'بطاقة الائتمان',
    vodafoneCash: 'فودافون كاش',
    cashOnDelivery: 'الدفع عند الاستلام',
    confirmAndPay: 'تأكيد الحجز والدفع',
    // Products
    fridgeName: 'ثلاجة حديثة',
    fridgeDesc: 'ثلاجة نوفروست بسعة كبيرة وتبريد ممتاز.',
    washerName: 'غسالة أوتوماتيك',
    washerDesc: 'غسالة ملابس حديثة ببرامج متعددة.',
    sedanName: 'سيارة سيدان اقتصادية',
    sedanDesc: 'سيارة عائلية مريحة وموفرة في استهلاك الوقود.',
    suvName: 'سيارة دفع رباعي',
    suvDesc: 'سيارة قوية ومناسبة للطرق الوعرة والمغامرات.',
    dressName: 'فستان سهرة',
    dressDesc: 'فستان أنيق ومناسب للمناسبات الخاصة.',
    suitName: 'بدلة رجالي',
    suitDesc: 'بدلة رسمية بتصميم عصري.',
    pricePerDay: 'ج.م / يوم',
    // Confirmation
    bookingConfirmed: 'تم تأكيد حجزك بنجاح! سيتم التواصل معك قريباً.'
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations['en'];

export const getTranslator = (lang: Language) => (key: TranslationKey): string => {
    const translation = translations[lang][key] || translations['en'][key];
    // Fallback for keys that might not exist in one language
    if (!translation) {
        console.warn(`Translation key "${key}" not found for language "${lang}"`);
        return key;
    }
    return translation;
};
