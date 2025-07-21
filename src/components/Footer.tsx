import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../Assets/ms logo.png';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={Logo}
                alt=""
                className="h-12 md:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              {t('companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">{t('products')}</Link></li>
              <li><Link to="/stores" className="text-gray-400 hover:text-white transition-colors">{t('storeLocator')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">{t('services')}</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">{t('faq')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('about')}</Link></li>
            </ul>
          </div>

          {/* Store Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('ourStores')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Dar es Salaam</p>
                  <p className="text-sm text-gray-400">Kariakoo Market, Shop 15</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Dodoma</p>
                  <p className="text-sm text-gray-400">Central Business District</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Mwanza</p>
                  <p className="text-sm text-gray-400">Nyerere Road, Block 5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@Microspace.co.tz</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-400">Mon-Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-400">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Microspace Tanzania. {t('allRightsReserved')}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('privacyPolicy')}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('termsOfService')}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('returnPolicy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;