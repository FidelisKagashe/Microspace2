import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    storeLocator: 'Store Locator',
    services: 'Services',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    
    // Common
    search: 'Search products...',
    whatsapp: 'WhatsApp',
    callUs: 'Call Us',
    getDirections: 'Get Directions',
    readMore: 'Read More',
    subscribe: 'Subscribe',
    viewAll: 'View All',
    learnMore: 'Learn More',
    shopNow: 'Shop Now',
    getStarted: 'Get Started',
    findStore: 'Find Store',
    chatNow: 'Chat Now',
    visitStore: 'Visit Store',
    sendMessage: 'Send Message',
    downloadCatalog: 'Download Catalog',
    stayUpdated: 'Stay Updated',
    enterEmail: 'Enter your email',
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    returnPolicy: 'Return Policy',
    
    // Home page
    heroTitle: "Tanzania's Premier Electronics Store",
    heroSubtitle: 'Discover the latest technology at unbeatable prices. From smartphones to laptops, we have everything you need.',
    ourProductCategories: 'Our Product Categories',
    exploreWideRange: 'Explore our wide range of electronics and accessories',
    whatCustomersSay: 'What Our Customers Say',
    joinThousands: 'Join thousands of satisfied customers across Tanzania',
    freeDelivery: 'Free Delivery',
    freeDeliveryDesc: 'Unlock free delivery with qualifying purchases, making your shopping experience even more convenient',
    warrantyProtection: 'Warranty Protection',
    warrantyProtectionDesc: 'Comprehensive warranty coverage on all our products',
    expertSupport: 'Expert Support',
    expertSupportDesc: 'Professional technical support and repair services',
    computersLaptops: 'Computers & Laptops',
    latestModels: 'Latest models from top brands',
    mobilePhones: 'Mobile Phones',
    smartphonesAccessories: 'Smartphones and accessories',
    electronicsAccessories: 'Electronics & Accessories',
    cablesChargers: 'Cables, chargers, and more',
    browseProducts: 'Browse Products',
    stayUpdatedNewsletter: 'Subscribe to our newsletter for the latest tech news and exclusive offers',
    
    // Footer
    companyDescription: "Tanzania's premier electronics retailer, offering the latest technology and exceptional customer service since 2015.",
    quickLinks: 'Quick Links',
    ourStores: 'Our Stores',
    contactUs: 'Contact Us',
    
    // About page
    aboutTitle: 'About Microspace',
    aboutSubtitle: 'Since 2015, Microspace has been Tanzania\'s trusted partner in technology, providing cutting-edge electronics and exceptional service to customers across the country.',
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    ourValues: 'Our Values',
    meetOurTeam: 'Meet Our Team',
    ourStoresGallery: 'Our Stores',
    readyToExperience: 'Ready to Experience Microspace?',
    visitStoreToday: 'Visit one of our stores today and discover why thousands of customers trust us with their technology needs.',
    qualityAssurance: 'Quality Assurance',
    qualityAssuranceDesc: 'We only sell authentic products from trusted manufacturers with full warranty support.',
    customerFirst: 'Customer First',
    customerFirstDesc: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.',
    excellence: 'Excellence',
    excellenceDesc: 'We strive for excellence in product quality, customer service, and technical support.',
    community: 'Community',
    communityDesc: 'We are committed to serving the Tanzanian community and contributing to digital advancement.',
    
    // Contact page
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with our team for any inquiries or support',
    sendUsMessage: 'Send us a Message',
    getInTouch: 'Get in Touch',
    whatsappSupport: 'WhatsApp Support',
    getInstantHelp: 'Get instant help from our team',
    needImmediateAssistance: 'Need immediate assistance? Chat with our support team on WhatsApp for quick responses to your questions.',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    inquiryType: 'Inquiry Type',
    subject: 'Subject',
    message: 'Message',
    generalInquiry: 'General Inquiry',
    technicalSupport: 'Technical Support',
    salesPricing: 'Sales & Pricing',
    warrantyClaim: 'Warranty Claim',
    repairService: 'Repair Service',
    feedback: 'Feedback',
    pleaseDescribe: 'Please describe your inquiry in detail...',
    phone: 'Phone',
    email: 'Email',
    headOffice: 'Head Office',
    businessHours: 'Business Hours',
    mondaySaturday: 'Monday - Saturday: 8:00 AM - 8:00 PM',
    sunday: 'Sunday: 10:00 AM - 6:00 PM',
    wellRespondWithin: 'We\'ll respond within 24 hours',
    monSat: 'Mon-Sat: 8:00 AM - 8:00 PM',
    sun: 'Sun: 10:00 AM - 6:00 PM',
    yourEmailAddress: 'Your email address',
    
    // FAQ page
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to common questions about our products and services',
    searchFAQs: 'Search FAQs...',
    stillHaveQuestions: 'Still have questions?',
    cantFindLooking: 'Can\'t find what you\'re looking for? Our support team is here to help!',
    noFAQsFound: 'No FAQs found matching your search criteria.',
    
    // Services page
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive sales and technology support services tailored to your needs.',
    productSales: 'Product Sales',
    productSalesDesc: 'High-quality electronics and accessories available for purchase',
    technologySupport: 'Technology Support',
    technologySupportDesc: 'Expert assistance for setup, troubleshooting, and optimization',
    expressConsultation: 'Express Consultation',
    expressConsultationDesc: 'Quick support sessions for urgent needs',
    completeProductCatalog: 'Complete Product Catalog',
    downloadLatestCatalog: 'Download our latest product catalog with pricing and specifications',
    downloadCatalogPDF: 'Download Catalog (PDF)',
    speakWithTeam: 'Speak with our sales and support team',
    quickChatInquiries: 'Quick chat for inquiries',
    exploreProductsPerson: 'Explore products in person',
    findStores: 'Find Stores',
    
    // Products page
    productsTitle: 'Our Product Categories',
    productsSubtitle: 'Welcome to explore the wide range of products available at our Microspace stores.',
    desktops: 'Desktops',
    desktopsDesc: 'Powerful desktop machines for work and play.',
    laptops: 'Laptops',
    laptopsDesc: 'Portable and performant laptops for every need.',
    mobilePhonesDesc: 'Latest smartphones to keep you connected.',
    monitors: 'Monitors',
    monitorsDesc: 'Crisp and immersive displays for every setup.',
    tablets: 'Tablets',
    tabletsDesc: 'Versatile tablets for work and entertainment.',
    mouses: 'Mouses',
    mousesDesc: 'Precision mice for gaming and productivity.',
    keyboards: 'Keyboards',
    keyboardsDesc: 'Comfortable keyboards with mechanical switches.',
    printers: 'Printers',
    printersDesc: 'Fast and reliable printers for home and office.',
    accessories: 'Accessories',
    accessoriesDesc: 'High-quality mics for streaming and recording.',
    
    // Store Locator page
    storeLocatorTitle: 'Microspace Store Locator',
    storeLocatorSubtitle: 'Automatically finds your nearest Microspace outlet, shows it on a map, and lets you get turn‑by‑turn directions with one click.',
    callStore: 'Call Store',
    manager: 'Manager',
    hours: 'Hours',
    ourFlagshipStore: 'Our flagship store',
    servingCapital: 'Serving the capital',
    lakeZoneHeadquarters: 'Lake zone headquarters',
    
    // Blog page
    blogTitle: 'Microspace Blog',
    blogSubtitle: 'Stay updated with the latest technology trends, tips, and news from Tanzania and beyond',
    featured: 'Featured',
    all: 'All',
    mobileTechnology: 'Mobile Technology',
    computers: 'Computers',
    gaming: 'Gaming',
    maintenance: 'Maintenance',
    read: 'Read',
    minRead: 'min read',
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    products: 'Bidhaa',
    storeLocator: 'Mahali pa Duka',
    services: 'Huduma',
    about: 'Kuhusu',
    faq: 'Maswali',
    contact: 'Mawasiliano',
    
    // Common
    search: 'Tafuta bidhaa...',
    whatsapp: 'WhatsApp',
    callUs: 'Piga Simu',
    getDirections: 'Pata Mwelekeo',
    readMore: 'Soma Zaidi',
    subscribe: 'Jisajili',
    viewAll: 'Ona Zote',
    learnMore: 'Jifunze Zaidi',
    shopNow: 'Nunua Sasa',
    getStarted: 'Anza',
    findStore: 'Tafuta Duka',
    chatNow: 'Ongea Sasa',
    visitStore: 'Tembelea Duka',
    sendMessage: 'Tuma Ujumbe',
    downloadCatalog: 'Pakua Katalogi',
    stayUpdated: 'Baki Umejulishwa',
    enterEmail: 'Ingiza barua pepe yako',
    allRightsReserved: 'Haki zote zimehifadhiwa',
    privacyPolicy: 'Sera ya Faragha',
    termsOfService: 'Masharti ya Huduma',
    returnPolicy: 'Sera ya Kurudisha',
    
    // Home page
    heroTitle: 'Duka Kuu la Elektroniki Tanzania',
    heroSubtitle: 'Gundua teknolojia ya hivi karibuni kwa bei za ushindani. Kutoka simu za mkononi hadi kompyuta za mkononi, tuna kila kitu unachohitaji.',
    ourProductCategories: 'Aina za Bidhaa Zetu',
    exploreWideRange: 'Chunguza aina mbalimbali za elektroniki na vifaa vyetu',
    whatCustomersSay: 'Wateja Wetu Wanasema Nini',
    joinThousands: 'Jiunge na maelfu ya wateja walioridhi kote Tanzania',
    freeDelivery: 'Uwasilishaji Bure',
    freeDeliveryDesc: 'Fungua uwasilishaji bure kwa ununuzi unaofaa, kufanya uzoefu wako wa ununuzi kuwa wa urahisi zaidi',
    warrantyProtection: 'Ulinzi wa Dhamana',
    warrantyProtectionDesc: 'Ulinzi kamili wa dhamana kwa bidhaa zetu zote',
    expertSupport: 'Msaada wa Kitaalamu',
    expertSupportDesc: 'Msaada wa kitaalamu wa kiufundi na huduma za ukarabati',
    computersLaptops: 'Kompyuta na Laptops',
    latestModels: 'Miundo ya hivi karibuni kutoka kwa makampuni makuu',
    mobilePhones: 'Simu za Mkononi',
    smartphonesAccessories: 'Simu mahiri na vifaa',
    electronicsAccessories: 'Elektroniki na Vifaa',
    cablesChargers: 'Kebo, chaja, na mengine',
    browseProducts: 'Vinjari Bidhaa',
    stayUpdatedNewsletter: 'Jisajili kwenye jarida letu kwa habari za hivi karibuni za teknolojia na matoleo maalum',
    
    // Footer
    companyDescription: 'Muuzaji mkuu wa elektroniki Tanzania, akitoa teknolojia ya hivi karibuni na huduma bora za wateja tangu 2015.',
    quickLinks: 'Viungo vya Haraka',
    ourStores: 'Maduka Yetu',
    contactUs: 'Wasiliana Nasi',
    
    // About page
    aboutTitle: 'Kuhusu Microspace',
    aboutSubtitle: 'Tangu 2015, Microspace imekuwa mshirika wa kuaminika wa Tanzania katika teknolojia, ikitoa elektroniki za kisasa na huduma bora kwa wateja kote nchini.',
    ourStory: 'Hadithi Yetu',
    ourMission: 'Dhamira Yetu',
    ourVision: 'Maono Yetu',
    ourValues: 'Maadili Yetu',
    meetOurTeam: 'Kutana na Timu Yetu',
    ourStoresGallery: 'Maduka Yetu',
    readyToExperience: 'Uko Tayari Kupata Uzoefu wa Microspace?',
    visitStoreToday: 'Tembelea mojawapo ya maduka yetu leo na ugundua kwa nini maelfu ya wateja wanatuamini kwa mahitaji yao ya teknolojia.',
    qualityAssurance: 'Uhakikisho wa Ubora',
    qualityAssuranceDesc: 'Tunauza tu bidhaa halali kutoka kwa wazalishaji wanaoaminika na msaada kamili wa dhamana.',
    customerFirst: 'Mteja wa Kwanza',
    customerFirstDesc: 'Wateja wetu ni katika moyo wa kila kitu tunachofanya. Kuridhika kwako ni kipaumbele chetu.',
    excellence: 'Ubora',
    excellenceDesc: 'Tunajitahidi kwa ubora katika ubora wa bidhaa, huduma kwa wateja, na msaada wa kiufundi.',
    community: 'Jamii',
    communityDesc: 'Tumejitolea kutumikia jamii ya Tanzania na kuchangia maendeleo ya kidijitali.',
    
    // Contact page
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Wasiliana na timu yetu kwa maswali yoyote au msaada',
    sendUsMessage: 'Tutumie Ujumbe',
    getInTouch: 'Wasiliana',
    whatsappSupport: 'Msaada wa WhatsApp',
    getInstantHelp: 'Pata msaada wa haraka kutoka kwa timu yetu',
    needImmediateAssistance: 'Unahitaji msaada wa haraka? Ongea na timu yetu ya msaada kwenye WhatsApp kwa majibu ya haraka ya maswali yako.',
    fullName: 'Jina Kamili',
    emailAddress: 'Anwani ya Barua Pepe',
    phoneNumber: 'Nambari ya Simu',
    inquiryType: 'Aina ya Ulizo',
    subject: 'Mada',
    message: 'Ujumbe',
    generalInquiry: 'Ulizo wa Jumla',
    technicalSupport: 'Msaada wa Kiufundi',
    salesPricing: 'Mauzo na Bei',
    warrantyClaim: 'Madai ya Dhamana',
    repairService: 'Huduma ya Ukarabati',
    feedback: 'Maoni',
    pleaseDescribe: 'Tafadhali eleza ulizo lako kwa undani...',
    phone: 'Simu',
    email: 'Barua Pepe',
    headOffice: 'Ofisi Kuu',
    businessHours: 'Masaa ya Biashara',
    mondaySaturday: 'Jumatatu - Jumamosi: 8:00 AM - 8:00 PM',
    sunday: 'Jumapili: 10:00 AM - 6:00 PM',
    wellRespondWithin: 'Tutajibu ndani ya masaa 24',
    monSat: 'Jum-Jum: 8:00 AM - 8:00 PM',
    sun: 'Jum: 10:00 AM - 6:00 PM',
    yourEmailAddress: 'Anwani yako ya barua pepe',
    
    // FAQ page
    faqTitle: 'Maswali Yanayoulizwa Mara kwa Mara',
    faqSubtitle: 'Pata majibu ya maswali ya kawaida kuhusu bidhaa na huduma zetu',
    searchFAQs: 'Tafuta Maswali...',
    stillHaveQuestions: 'Bado una maswali?',
    cantFindLooking: 'Huwezi kupata unachotafuta? Timu yetu ya msaada iko hapa kusaidia!',
    noFAQsFound: 'Hakuna maswali yaliyopatikana yanayolingana na vigezo vyako vya utafutaji.',
    
    // Services page
    servicesTitle: 'Huduma Zetu',
    servicesSubtitle: 'Huduma kamili za mauzo na msaada wa teknolojia zilizobinafsishwa kulingana na mahitaji yako.',
    productSales: 'Mauzo ya Bidhaa',
    productSalesDesc: 'Elektroniki za ubora wa juu na vifaa vinavyopatikana kwa ununuzi',
    technologySupport: 'Msaada wa Teknolojia',
    technologySupportDesc: 'Msaada wa kitaalamu kwa usanidi, utatuzi wa matatizo, na uboreshaji',
    expressConsultation: 'Ushauri wa Haraka',
    expressConsultationDesc: 'Vipindi vya msaada vya haraka kwa mahitaji ya dharura',
    completeProductCatalog: 'Katalogi Kamili ya Bidhaa',
    downloadLatestCatalog: 'Pakua katalogi yetu ya hivi karibuni yenye bei na maelezo',
    downloadCatalogPDF: 'Pakua Katalogi (PDF)',
    speakWithTeam: 'Ongea na timu yetu ya mauzo na msaada',
    quickChatInquiries: 'Mazungumzo ya haraka kwa maswali',
    exploreProductsPerson: 'Chunguza bidhaa kwa kibinafsi',
    findStores: 'Tafuta Maduka',
    
    // Products page
    productsTitle: 'Aina za Bidhaa Zetu',
    productsSubtitle: 'Karibu kuchunguza aina mbalimbali za bidhaa zinazopatikana katika maduka yetu ya Microspace.',
    desktops: 'Kompyuta za Mezani',
    desktopsDesc: 'Mashine zenye nguvu za mezani kwa kazi na mchezo.',
    laptops: 'Kompyuta za Mkononi',
    laptopsDesc: 'Kompyuta za mkononi zinazobeba na zenye utendaji kwa kila hitaji.',
    mobilePhonesDesc: 'Simu mahiri za hivi karibuni kukuweka umeunganishwa.',
    monitors: 'Skrini',
    monitorsDesc: 'Mionyo ya wazi na ya kuvutia kwa kila mpangilio.',
    tablets: 'Kompyuta za Mkononi',
    tabletsDesc: 'Kompyuta za mkononi zenye matumizi mengi kwa kazi na burudani.',
    mouses: 'Panya za Kompyuta',
    mousesDesc: 'Panya za usahihi kwa michezo na uzalishaji.',
    keyboards: 'Kibodi',
    keyboardsDesc: 'Kibodi za starehe zenye vitufe vya mitambo.',
    printers: 'Printa',
    printersDesc: 'Printa za haraka na za kuaminika kwa nyumbani na ofisini.',
    accessories: 'Vifaa',
    accessoriesDesc: 'Maikrofoni za ubora wa juu kwa utiririshaji na kurekodi.',
    
    // Store Locator page
    storeLocatorTitle: 'Kitafuta Duka la Microspace',
    storeLocatorSubtitle: 'Kinapata kiotomatiki duka la Microspace lililokaribuni nawe, kinalionyesha kwenye ramani, na kinakuruhusu kupata mwelekeo wa hatua kwa hatua kwa kubofya mara moja.',
    callStore: 'Piga Simu Duka',
    manager: 'Meneja',
    hours: 'Masaa',
    ourFlagshipStore: 'Duka letu kuu',
    servingCapital: 'Kutumikia mji mkuu',
    lakeZoneHeadquarters: 'Makao makuu ya eneo la ziwa',
    
    // Blog page
    blogTitle: 'Blogu ya Microspace',
    blogSubtitle: 'Baki umejulishwa na mitindo ya hivi karibuni ya teknolojia, vidokezo, na habari kutoka Tanzania na zaidi',
    featured: 'Iliyoangaziwa',
    all: 'Zote',
    mobileechnology: 'Teknolojia ya Simu za Mkononi',
    computers: 'Kompyuta',
    gaming: 'Michezo',
    maintenance: 'Matengenezo',
    read: 'Soma',
    minRead: 'dakika za kusoma',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sw' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};