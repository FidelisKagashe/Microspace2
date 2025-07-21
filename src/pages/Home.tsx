import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Truck,
  Shield,
  Star,
  ArrowRight,
  Phone as PhoneIcon,
  Laptop as LaptopIcon,
  Headphones
} from 'lucide-react';

import LaptopImg from '../Assets/1340815067.usr17748-removebg-preview.png';
import DesktopImg from '../Assets/Desktop_Removed_Background.png';
import MouseImg from '../Assets/Muse and Keyboard_NoBackground.png';
import PhonesImg from '../Assets/Phones_Removed_Background.png';
import Mikes from '../Assets/Mikes_NoBack.png';
import Ethernet from '../Assets/Ethernet_NoBack.png';

const Home: React.FC = () => {
  const { t } = useLanguage();

  // Testimonials data
  const testimonials = [
    {
      name: "John Mwangi",
      location: "Dar es Salaam",
      rating: 5,
      comment: "Excellent service! Got my laptop repaired quickly and the price was very reasonable. Highly recommended!",
      image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sarah Ahmed",
      location: "Dodoma",
      rating: 5,
      comment: "Great selection of phones and accessories. The staff was very helpful in choosing the right device for my needs.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Joseph",
      location: "Mwanza",
      rating: 5,
      comment: "Fast delivery and authentic products. Microspace is my go-to place for all electronics needs.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  // Features data
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-blue-400" />,
      title: t('freeDelivery'),
      description: t('freeDeliveryDesc')
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: t('warrantyProtection'),
      description: t('warrantyProtectionDesc')
    },
    {
      icon: <Star className="h-8 w-8 text-blue-400" />,
      title: t('expertSupport'),
      description: t('expertSupportDesc')
    }
  ];

  // Categories data
  const categories = [
    {
      icon: <LaptopIcon className="h-12 w-12 text-blue-400" />,
      title: t('computersLaptops'),
      description: t('latestModels'),
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <PhoneIcon className="h-12 w-12 text-blue-400" />,
      title: t('mobilePhones'),
      description: t('smartphonesAccessories'),
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Headphones className="h-12 w-12 text-blue-400" />,
      title: t('electronicsAccessories'),
      description: t('cablesChargers'),
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  // Hero slideshow images
  const heroImages = [LaptopImg, DesktopImg, MouseImg, PhonesImg, Mikes, Ethernet];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Slide every 4 seconds
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-300 dark:from-blue-600 dark:to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors flex items-center justify-center"
                >
                  {t('products')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="https://wa.me/255767525234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  {t('whatsapp')} Us
                </a>
              </div>
            </div>
            {/* Slideshow with slide-in effect */}
            <div className="relative flex justify-center items-center h-96 overflow-hidden">
              {/* Dotted white circle */}
              <div className="absolute bg-white rounded-full border-2 border-dashed border-white opacity-30 w-72 h-72"></div>
              {heroImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Electronics Showcase"
                  className={`absolute rounded-lg w-auto h-96 object-contain transition-all duration-1000 ease-out ${
                    idx === current
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('ourProductCategories')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('exploreWideRange')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-3">{category.icon}<h3 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">{category.title}</h3></div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  <Link to="/products" className="inline-flex items-center text-blue-400 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium">
                    {t('browseProducts')}<ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('whatCustomersSay')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('joinThousands')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-4"><h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4><p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.location}</p></div>
                </div>
                <div className="flex mb-3">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />))}</div>
                <p className="text-gray-700 dark:text-gray-300">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-400 dark:bg-blue-600 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{t('stayUpdated')}</h2>
            <p className="text-xl mb-8 text-blue-100 dark:text-blue-200">{t('stayUpdatedNewsletter')}</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input type="email" placeholder={t('enterEmail')} className="flex-1 px-4 py-3 rounded-lg text-blue-800 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors" />
              <button className="bg-green-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors">{t('subscribe')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
