import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHeader from '../components/PageHeader';
import { categories, faqs } from '../Data/Faqs';

const Faq = () => {
  const { t } = useLanguage();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const search = searchTerm.toLowerCase();
    return (
      faq.question.toLowerCase().includes(search) ||
      faq.answer.toLowerCase().includes(search)
    ) && matchesCategory;
  });

  const toggleItem = (id: number): void => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <PageHeader 
        title={t('faqTitle')}
        subtitle={t('faqSubtitle')}
        backgroundImage="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <div className="py-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder={t('searchFAQs')}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-400 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category === 'All' ? t('all') : category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map(faq => (
            <div key={faq.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {openItems[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              {openItems[faq.id] && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {t('noFAQsFound')}
            </p>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center transition-colors">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            {t('stillHaveQuestions')}
          </h2>
          <p className="text-blue-700 dark:text-blue-300 mb-6">
            {t('cantFindLooking')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/255123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              {t('whatsapp')} Support
            </a>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('contact')}
            </a>
            <a
              href="tel:+255123456789"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              {t('callUs')}
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;
