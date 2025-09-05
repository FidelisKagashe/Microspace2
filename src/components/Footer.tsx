import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../Assets/ms_logo.png.png';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

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
              <a href="https://www.facebook.com/profile.php?id=61576599515764" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/microspace_tz/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
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
              <a
                href="https://www.google.com/maps?q=-6.8237541,39.2730744"
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[auto_1fr] gap-2 items-start hover:bg-gray-800/40 p-2 rounded-lg transition"
              >
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Dar es Salaam</p>
                  <p className="text-sm text-gray-400">Kariakoo, Uhuru & Likoma</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps?q=-6.1783239,35.7479107"
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[auto_1fr] gap-2 items-start hover:bg-gray-800/40 p-2 rounded-lg transition"
              >
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Dodoma</p>
                  <p className="text-sm text-gray-400">Uhindini Street, Nyerere Square</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps?q=-2.5222568,32.9006342"
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[auto_1fr] gap-2 items-start hover:bg-gray-800/40 p-2 rounded-lg transition"
              >
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Mwanza</p>
                  <p className="text-sm text-gray-400">Karuta Street</p>
                </div>
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+255 794 982 600</span>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                <Mail className="h-4 w-4 text-blue-400" />
                <a 
                  href="mailto:info@microspacetechnology.com" 
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  info@microspacetechnology.com
                </a>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                <Mail className="h-4 w-4 text-blue-400" />
                <a 
                  href="mailto:support@microspacetechnology.com" 
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  support@microspacetechnology.com
                </a>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-2">
                <Clock className="h-4 w-4 mt-1 text-blue-400" />
                <p className="text-gray-400">Mon-Sun: 8:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Microspace Tanzania. {t('allRightsReserved')}.
            </p>

            <p className="text-gray-400 text-sm md:text-right">
              Developed by{" "}
              <a
                href="https://www.instagram.com/nexivo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition text-blue-500"
              >
                Nexivo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;