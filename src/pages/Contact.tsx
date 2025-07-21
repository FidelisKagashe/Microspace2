import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHeader from '../components/PageHeader';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general',
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <PageHeader 
        title={t('contactTitle')}
        subtitle={t('contactSubtitle')}
        backgroundImage="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <div className="py-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('sendUsMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full focus:outline-none px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    {t('emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full focus:outline-none px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    {t('phoneNumber')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full focus:outline-none px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    {t('inquiryType')}
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full focus:outline-none px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors"
                  >
                    <option value="general">{t('generalInquiry')}</option>
                    <option value="support">{t('technicalSupport')}</option>
                    <option value="sales">{t('salesPricing')}</option>
                    <option value="warranty">{t('warrantyClaim')}</option>
                    <option value="repair">{t('repairService')}</option>
                    <option value="feedback">{t('feedback')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  {t('subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full focus:outline-none px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full focus:outline-none px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors"
                  placeholder={t('pleaseDescribe')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                {t('sendMessage')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('getInTouch')}</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('phone')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">+255 123 456 789</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('monSat')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('email')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@Microspace.co.tz</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('wellRespondWithin')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('headOffice')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Kariakoo Market, Shop 15</p>
                    <p className="text-gray-600 dark:text-gray-300">Dar es Salaam, Tanzania</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('businessHours')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('mondaySaturday')}</p>
                    <p className="text-gray-600 dark:text-gray-300">{t('sunday')}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* WhatsApp Support */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">{t('whatsappSupport')}</h3>
                  <p className="text-green-700 dark:text-green-300">{t('getInstantHelp')}</p>
                </div>
              </div>
              <p className="text-green-700 dark:text-green-300 mb-4">
                {t('needImmediateAssistance')}
              </p>
              <a
                href="https://wa.me/255123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                {t('whatsapp')}
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 transition-colors">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">{t('stayUpdated')}</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Subscribe to our newsletter for the latest tech news, product updates, and exclusive offers.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder={t('yourEmailAddress')}
                  className="flex-1 focus:outline-none px-4 py-2 border border-blue-300 dark:border-blue-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <button
                  className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  {t('subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
