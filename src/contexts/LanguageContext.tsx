import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string; // kept permissive as you requested
}

const translations: Record<Language, Record<string, string>> = {
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
    companyDescription: "Tanzania's premier electronics retailer, offering the latest technology and exceptional customer service since 2021.",
    quickLinks: 'Quick Links',
    ourStores: 'Our Stores',
    contactUs: 'Contact Us',
    
    // About page
    storyOne: 'Microspace was founded in 2021 with a simple mission: to make the latest technology accessible to everyone in Tanzania. What started as a small electronics shop in Dar es Salaam has grown into a trusted network of stores serving customers across the country.',
    storyTwo: 'Our journey began when our founder recognized the need for a reliable electronics retailer that could provide genuine products, competitive prices, and exceptional customer service. Today, we continue to uphold these values while expanding our reach and improving our services.',
    storyThree: 'With locations in Dar es Salaam, Dodoma, and Mwanza, we have helped thousands of customers find the perfect technology solutions for their personal and professional needs. From students buying their first laptop to businesses upgrading their IT infrastructure, we are here to help.',
    storyFour: 'To provide Tanzania with access to the latest technology through quality products, competitive pricing, and exceptional customer service. We aim to be the bridge between global innovation and local needs.',
    storyFive: "To become East Africa's leading electronics retailer, known for innovation, reliability, and community impact. We envision a future where technology empowers every Tanzanian to achieve their goals.",
    aboutTitle: 'About Microspace',
    aboutSubtitle: 'Since 2021, Microspace has been Tanzania\'s trusted partner in technology, providing cutting-edge electronics and exceptional service to customers across the country.',
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    ourValues: 'Our Values',
    meetOurTeam: 'Meet Our Team',
    ourStoresGallery: 'Our Stores',
    readyToExperience: 'Ready to Experience Microspace?',
    visitStoreToday: 'Visit one of our stores today and discover why thousands of customers trust us with their technology needs.',
    qualityassurance: 'Quality Assurance',
    qualityassuranceDesc: 'We only sell authentic products from trusted manufacturers with full warranty support.',
    customerfirst: 'Customer First',
    customerfirstDesc: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.',
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
    all: 'All',
    orderspayments: 'Orders & Payments',
    shippingdelivery: 'Shipping & Delivery',
    returnswarranty: 'Returns & Warranty',
    accountservices: 'Account & Services',

    // Category keys (ca1..ca8)
    ca1: 'Orders & Payments',
    ca2: 'Shipping & Delivery',
    ca3: 'Returns & Warranty',
    ca4: 'Orders & Payments',
    ca5: 'Shipping & Delivery',
    ca6: 'Account & Services',
    ca7: 'Orders & Payments',
    ca8: 'Account & Services',

    // Questions (cq1..cq8)
    cq1: 'What payment methods do you accept?',
    cq2: 'Do you offer delivery services?',
    cq3: 'How long is the warranty coverage?',
    cq4: 'Can I reserve a product before purchasing?',
    cq5: 'How long does delivery take?',
    cq6: 'How can I track my order?',
    cq7: 'Are your products genuine?',
    cq8: 'Do you offer bulk arrangements for businesses?',

    // Answers (ans1..ans8)
    ans1:
      'We offer a variety of secure payment options for your convenience. Contact our store or message us on WhatsApp and our team will be happy to assist you with available methods.',
    ans2:
      'Yes — we offer delivery services. Delivery options and timelines depend on your location — please contact us and we will gladly arrange the most suitable option for you.',
    ans3:
      'Warranty coverage typically ranges from 6 months to 2 years, depending on the product and manufacturer. We are happy to support you with warranty claims and assistance when needed.',
    ans4:
      'Yes — you may reserve products for up to 24 hours by calling our stores or messaging us on WhatsApp. Please contact us for assistance and we will gladly hold the item for you.',
    ans5:
      'Standard delivery within Dar es Salaam, Dodoma, and Mwanza typically takes 1–2 business days. Inter-city delivery may take 2–5 business days. Please reach out for more precise estimates for your area.',
    ans6:
      'Once your order is confirmed, you will receive tracking information via SMS or WhatsApp. You may also contact our stores directly and our team will provide an update on your order status.',
    ans7:
      'Yes — all our products are authentic and sourced from authorized distributors. We provide official warranty cards and certificates of authenticity where applicable.',
    ans8:
      'Yes — we accommodate bulk orders and corporate customers. Kindly contact our sales team to discuss your requirements and we will be pleased to assist with arrangements and account setup.',
      
    // Services page
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive sales and technology support services tailored to your needs.',
    productSales: 'Product Sales',
    productSalesDesc: 'Come and get a wide range of electronic devices.',
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
    storeLocatorSubtitle: 'Automatically finds your nearest Microspace outlet, shows it on a map, and lets you get turn-by-turn directions with one click.',
    callStore: 'Call Store',
    manager: 'Manager',
    hours: 'Hours',
    ourFlagshipStore: 'Dar es salaam, Kariakoo, Uhuru & Likoma',
    servingCapital: 'Dodoma mjini, Uhindini Street, Nyerere square',
    lakeZoneHeadquarters: 'Mwanza, Karuta Street',
    
    // Blog page
    blogTitle: 'Microspace Blog',
    blogSubtitle: 'Stay updated with the latest technology trends, tips, and news from Tanzania and beyond',
    featured: 'Featured',
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
    downloadCatalog: 'Pakua Orodha',
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
    joinThousands: 'Jiunge na maelfu ya wateja kote Tanzania',
    freeDelivery: 'Uwasilishaji Bure',
    freeDeliveryDesc: 'Fungua fulsa ya kuwasilishiwa biadhaa zako bure kwa ununuzi unaofaa, kufanya uzoefu wako wa ununuzi kuwa wa urahisi zaidi',
    warrantyProtection: 'Ulinzi wa Dhamana',
    warrantyProtectionDesc: 'Ulinzi kamili wa dhamana kwa bidhaa zetu zote',
    expertSupport: 'Msaada wa Kitaalamu',
    expertSupportDesc: 'Msaada wa kitaalamu wa kiufundi na huduma za ukarabati',
    computersLaptops: 'Kompyuta za mezani na mpakato',
    latestModels: 'Miundo ya hivi karibuni kutoka kwa makampuni makuu',
    mobilePhones: 'Simu za Mkononi',
    smartphonesAccessories: 'Simu zanye ubora na vifaa',
    electronicsAccessories: 'Vifaa vya elektroniki',
    cablesChargers: 'Kebo, chaja, na mengineyo',
    browseProducts: 'Vinjari Bidhaa',
    stayUpdatedNewsletter: 'Jisajili kwenye jarida letu kwa habari za hivi karibuni za teknolojia na matoleo maalum',
    
    // Footer
    companyDescription: 'Muuzaji mkuu wa elektroniki Tanzania, akitoa teknolojia ya hivi karibuni na huduma bora za wateja tangu 2021.',
    quickLinks: 'Viungo vya Haraka',
    ourStores: 'Maduka Yetu',
    contactUs: 'Wasiliana Nasi',
    
    // About page
    storyOne: "Microspace ilianzishwa mnamo 2021 ikiwa na dhamira rahisi: kufanya teknolojia ya kisasa ipatikane kwa kila mtu nchini Tanzania. Microspace ilianza kama duka dogo la vifaa vya elektroniki jijini Dodoma imekua na kuwa na mtandao unaoaminika wa maduka unaohudumia wateja kote nchini.",
    storyTwo: "Safari yetu ilianza wakati mwanzilishi wetu alipogundua hitaji la muuzaji wa vifaa vya elektroniki anayeaminika ambaye angeweza kutoa bidhaa halisi, bei za ushindani, na huduma bora kwa wateja. Leo, tunaendelea kuzingatia maadili haya huku tukipanua ufikiaji wetu na kuboresha huduma zetu.",
    storyThree: "Kukiwa na maduka jijini Dar es Salaam, Dodoma, na Mwanza, tumesaidia maelfu ya wateja kupata suluhisho kamili la kiteknolojia kwa mahitaji yao ya kibinafsi na ya kitaaluma. Kuanzia wanafunzi wanaonunua kompyuta zao za kwanza ndogo hadi biashara zinazoboresha miundombinu yao ya TEHAMA, tupo hapa kusaidia.",
    storyFour: 'Kuwapa Watanzania fursa ya kupata teknolojia ya kisasa kupitia bidhaa zenye ubora, bei za ushindani, na huduma ya kipekee kwa wateja. Tunalenga kuwa daraja kati ya uvumbuzi wa kimataifa na mahitaji ya ndani.',
    storyFive: 'Kuwa muuzaji mkuu wa vifaa vya elektroniki Afrika Mashariki, anayejulikana kwa ubunifu, kutegemewa, na athari chanya kwa jamii. Tunatazamia siku zijazo ambapo teknolojia itawawezesha Watanzania kufikia malengo yao.',
    aboutTitle: 'Kuhusu Microspace',
    aboutSubtitle: 'Tangu 2021, Microspace imekuwa mshirika wa kuaminika wa Tanzania katika teknolojia, ikitoa elektroniki za kisasa na huduma bora kwa wateja kote nchini.',
    ourStory: 'Hadithi Yetu',
    ourMission: 'Dhamira Yetu',
    ourVision: 'Maono Yetu',
    ourValues: 'Maadili Yetu',
    meetOurTeam: 'Kutana na Timu Yetu',
    ourStoresGallery: 'Maduka Yetu',
    readyToExperience: 'Uko Tayari Kupata Uzoefu wa Microspace?',
    visitStoreToday: 'Tembelea mojawapo ya maduka yetu leo na ugundue kwa nini maelfu ya wateja wanatuamini kwa mahitaji yao ya teknolojia.',
    qualityassurance: 'Uhakikisho wa Ubora',
    qualityassuranceDesc: 'Tunauza tu bidhaa halali kutoka kwa wazalishaji wanaoaminika na msaada kamili wa dhamana.',
    customerfirst: 'Mteja wa Kwanza',
    customerfirstDesc: 'Wateja wetu ni muhimu kwetu kwa kila kitu tunachofanya. Kuridhika kwako ni kipaumbele chetu.',
    excellence: 'Ubora',
    excellenceDesc: 'Tunajitahidi katika ubora wa bidhaa, huduma kwa wateja, na msaada wa kiufundi.',
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
    inquiryType: 'Aina ya uhitaji',
    subject: 'Mada',
    message: 'Ujumbe',
    generalInquiry: 'Uhitaji wa Jumla',
    technicalSupport: 'Msaada wa Kiufundi',
    salesPricing: 'Mauzo na Bei',
    warrantyClaim: 'Madai ya Dhamana',
    repairService: 'Huduma ya Ukarabati',
    feedback: 'Maoni',
    pleaseDescribe: 'Tafadhali eleza haja yako kwa undani...',
    phone: 'Simu',
    email: 'Barua Pepe',
    headOffice: 'Ofisi Kuu',
    businessHours: 'Masaa ya Biashara',
    mondaySaturday: 'Jumatatu - Jumamosi: 08:00 AM - 09:00 PM',
    sunday: 'Jumapili: 08:00 AM - 09:00 PM',
    wellRespondWithin: 'Tutajibu ndani ya masaa 24',
    monSat: 'Jumatatu - Jumapili: 08:00 AM - 09:00 PM',
    sun: 'Jumapili: 08:00 AM - 09:00 PM',
    yourEmailAddress: 'Anwani ya barua pepe',
    
    // FAQ page
    faqTitle: 'Maswali Yanayoulizwa Mara kwa Mara',
    faqSubtitle: 'Pata majibu ya maswali ya kawaida kuhusu bidhaa na huduma zetu',
    searchFAQs: 'Tafuta Maswali...',
    stillHaveQuestions: 'Bado una maswali?',
    cantFindLooking: 'Huwezi kupata unachotafuta? Timu yetu ya msaada iko hapa kukusaidia!',
    noFAQsFound: 'Hakuna maswali yaliyopatikana yanayolingana na vigezo vyako vya utafutaji.',
    all: 'Zote',
    orderspayments: 'Maagizo & Malipo',
    shippingdelivery: 'Usafirishaji & Uwasilishaji',
    returnswarranty: 'Kurudisha & Dhamana',
    accountservices: 'Akaunti & Huduma',

    // Category keys (ca1..ca8)
    ca1: 'Maagizo & Malipo',
    ca2: 'Usafirishaji & Uwasilishaji',
    ca3: 'Kurudisha & Dhamana',
    ca4: 'Maagizo & Malipo',
    ca5: 'Usafirishaji & Uwasilishaji',
    ca6: 'Akaunti & Huduma',
    ca7: 'Maagizo & Malipo',
    ca8: 'Akaunti & Huduma',

    // Questions (cq1..cq8)
    cq1: 'Njia gani za malipo mnazokubali?',
    cq2: 'Je, mnapanga huduma za usafirishaji?',
    cq3: 'Dhamana inakaa kwa muda gani?',
    cq4: 'Je, ninaweza kuhifadhi bidhaa kabla ya kununua?',
    cq5: 'Usafirishaji huchukua muda gani?',
    cq6: 'Ninafuatilia vipi oda yangu?',
    cq7: 'Je, bidhaa zenu ni halisi?',
    cq8: 'Je, mnapokea maagizo ya jumla kwa biashara?',

    // Answers (ans1..ans8)
    ans1:
      'Tunakubali njia mbalimbali za malipo za salama. Wasiliana na duka letu au tuma ujumbe kwa WhatsApp na timu yetu itakusaidia.',
    ans2:
      'Ndiyo — tunatoa huduma za usafirishaji. Chaguzi za usafirishaji na muda hutegemea eneo lako — tafadhali wasiliana nasi na tutapanga chaguo linalofaa kwako.',
    ans3:
      'Dhamana kawaida ni kati ya miezi 6 hadi 2, kulingana na bidhaa na mtengenezaji. Tutakusaidia kwa madai ya dhamana pale inapohitajika.',
    ans4:
      'Ndiyo — unaweza kuhifadhi bidhaa kwa hadi saa 24 kwa kupiga simu madukani au kutuma ujumbe kwa WhatsApp. Wasiliana nasi kwa msaada na tutahifadhi bidhaa kwako.',
    ans5:
      'Usafirishaji wa kawaida ndani ya Dar es Salaam, Dodoma, na Mwanza huchukua siku 1–2 za kazi. Usafirishaji kati ya miji unaweza kuchukua siku 2–5. Tafadhali wasiliana kwa maelezo kamili kwa eneo lako.',
    ans6:
      'Mara baada ya oda kuthibitishwa, utapokea taarifa za ufuatiliaji kupitia SMS au WhatsApp. Pia unaweza kuwasiliana na maduka yetu kwa taarifa za oda yako.',
    ans7:
      'Ndiyo — bidhaa zetu ni halisi na zinatoka kwa wasambazaji walioidhinishwa. Tunatoa kadi za dhamana rasmi na vyeti vya uhalisia pale inapofaa.',
    ans8:
      'Ndiyo — tunashughulikia maagizo ya jumla na wateja wa kampuni. Wasiliana na timu yetu ya mauzo kujadili mahitaji yako na mipango ya gharama.',

    
    // Services page
    servicesTitle: 'Huduma Zetu',
    servicesSubtitle: 'Huduma kamili za mauzo na msaada wa teknolojia kulingana na mahitaji yako.',
    productSales: 'Mauzo ya Bidhaa',
    productSalesDesc: 'Elektroniki za ubora wa juu na vifaa vinavyopatikana kwa ununuzi',
    technologySupport: 'Msaada wa Teknolojia',
    technologySupportDesc: 'Msaada wa kitaalamu kwa ufanisi, utatuzi wa matatizo, na uboreshaji',
    expressConsultation: 'Ushauri wa Haraka',
    expressConsultationDesc: 'Vipindi vya msaada vya haraka kwa mahitaji ya dharura',
    completeProductCatalog: 'orodha Kamili ya Bidhaa',
    downloadLatestCatalog: 'Pakua orodha yetu ya hivi karibuni yenye bei na maelezo',
    downloadCatalogPDF: 'Pakua orodha (PDF)',
    speakWithTeam: 'Ongea na timu yetu ya mauzo na msaada',
    quickChatInquiries: 'Mazungumzo ya haraka kwa maswali',
    exploreProductsPerson: 'Chunguza bidhaa kwa kibinafsi',
    findStores: 'Tafuta Maduka',
    
    // Products page
    productsTitle: 'Aina za Bidhaa Zetu',
    productsSubtitle: 'Karibu kuchunguza aina mbalimbali za bidhaa zinazopatikana katika maduka yetu ya Microspace.',
    desktops: 'Kompyuta za Mezani',
    desktopsDesc: 'Mashine zenye nguvu za mezani kwa kazi na michezo.',
    laptops: 'Kompyuta za Mkononi',
    laptopsDesc: 'Kompyuta za mkononi zinazobebeka kirahisi na utendaji bora kwa kila hitaji.',
    mobilePhonesDesc: 'Simu mahiri za hivi karibuni kukuweka umeunganishwa.',
    monitors: 'Skrini',
    monitorsDesc: 'Mionekano mizuri na ya kuvutia kwa kila mpangilio.',
    tablets: 'Kompyuta za Mkononi',
    tabletsDesc: 'Kompyuta za mkononi zenye matumizi mengi kwa kazi na burudani.',
    mouses: 'Mouse za Kompyuta',
    mousesDesc: 'Mouse nzuri kwa michezo na uzalishaji.',
    keyboards: 'Kibodi',
    keyboardsDesc: 'Kibodi zenye muonekano mzuri na ubora.',
    printers: 'Printa',
    printersDesc: 'Printa za haraka na za kuaminika kwa nyumbani na ofisini.',
    accessories: 'Vifaa',
    accessoriesDesc: 'Karibu ujipatie vifaa mbalimbali vya kielekroniki.',
    
    // Store Locator page
    storeLocatorTitle: 'Kitafuta Duka la Microspace',
    storeLocatorSubtitle: 'Kinapata kiotomatiki duka la Microspace lililokaribani nawe, kinalionyesha kwenye ramani, na kinakuruhusu kupata mwelekeo wa hatua kwa hatua kwa kubofya mara moja.',
    callStore: 'Piga Simu Dukani',
    manager: 'Meneja',
    hours: 'Masaa',
    ourFlagshipStore: 'Dar es salaam, Kariakoo, Uhuru & Likoma',
    servingCapital: 'Dodoma mjini, Uhindini Street, Nyerere square',
    lakeZoneHeadquarters: 'Mwanza, Karuta Street',
    
    // Blog page
    blogTitle: 'Blogu ya Microspace',
    blogSubtitle: 'Baki umejulishwa na mitindo ya hivi karibuni ya teknolojia, vidokezo, na habari kutoka Tanzania na zaidi',
    featured: 'Iliyoangaziwa',
    mobileechnology: 'Teknolojia ya Simu za Mkononi',
    computers: 'Kompyuta',
    gaming: 'Michezo',
    maintenance: 'Matengenezo',
    read: 'Soma',
    minRead: 'dakika za kusoma',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem('language') as Language | null;
  if (saved === 'en' || saved === 'sw') return saved;
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sw' : 'en');
  };

  // runtime-safe t() that accepts any string key (keeps your API the same)
  const t = (key: string): string => {
    const localeObj = translations[language] || {};
    if (Object.prototype.hasOwnProperty.call(localeObj, key)) {
      return localeObj[key];
    }
    // fallback: return key unchanged so UI shows the key while you migrate/correct
    return key;
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
