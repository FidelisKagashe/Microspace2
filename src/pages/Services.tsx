import { ShoppingCart, Phone, MessageSquare, Download, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHeader from '../components/PageHeader';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: t('productSales'),
      description: t('productSalesDesc'),
      features: [
        'Laptops, smartphones, and tablets',
        'Genuine accessories and peripherals',
        'Competitive pricing and discounts',
        'Flexible payment options',
        'Warranty on all products'
      ],
      pricing: 'Starting from 100,000 TZS'
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: t('technologySupport'),
      description: t('technologySupportDesc'),
      features: [
        'Software installation',
        'Network setup and configuration',
        'Performance tuning',
        'Virus and malware removal',
        'Data backup and recovery'
      ],
      pricing: 'Consultation from 30,000 TZS'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: t('expressConsultation'),
      description: t('expressConsultationDesc'),
      features: [
        'Same-day appointments',
        'Priority queue',
        'Remote or in-store sessions',
        'Follow-up support',
        '24/7 availability'
      ],
      pricing: 'Additional 20% surcharge'
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('servicesTitle')}
        subtitle={t('servicesSubtitle')}
        backgroundImage="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <div className="py-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{service.pricing}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price List Download */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center transition-colors">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">{t('completeProductCatalog')}</h2>
          <p className="text-blue-700 dark:text-blue-300 mb-6">
            {t('downloadLatestCatalog')}
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
            <Download className="h-5 w-5 mr-2" />
            {t('downloadCatalogPDF')}
          </button>
        </div>

        {/* Contact for Support */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t('getInTouch')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{t('callUs')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('speakWithTeam')}</p>
              <a href="tel:+255123456789" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                +255 123 456 789
              </a>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('quickChatInquiries')}</p>
              <a href="https://wa.me/255123456789" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                {t('chatNow')}
              </a>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{t('visitStore')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('exploreProductsPerson')}</p>
              <a href="/stores" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                {t('findStores')}
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
