// src/pages/Faq.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../contexts/LanguageContext';

type CategoryKey =
  | 'all'
  | 'orderspayments'
  | 'shippingdelivery'
  | 'returnswarranty'
  | 'accountservices';

interface FAQItem {
  id: number;
  category: Exclude<CategoryKey, 'all'>; // FAQ category keys (not 'all')
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number): void => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // category keys (use these for comparisons). Render label with t(key).
  const categoryKeys: CategoryKey[] = [
    'all',
    'orderspayments',
    'shippingdelivery',
    'returnswarranty',
    'accountservices',
  ];

  // Build faqs *inside render* so t(...) gives translated question/answer labels
  const faqs: FAQItem[] = [
    { id: 1, category: 'orderspayments', question: t('cq1'), answer: t('ans1') },
    { id: 2, category: 'shippingdelivery', question: t('cq2'), answer: t('ans2') },
    { id: 3, category: 'returnswarranty', question: t('cq3'), answer: t('ans3') },
    { id: 4, category: 'orderspayments', question: t('cq4'), answer: t('ans4') },
    { id: 5, category: 'shippingdelivery', question: t('cq5'), answer: t('ans5') },
    { id: 6, category: 'accountservices', question: t('cq6'), answer: t('ans6') },
    { id: 7, category: 'orderspayments', question: t('cq7'), answer: t('ans7') },
    { id: 8, category: 'accountservices', question: t('cq8'), answer: t('ans8') },
  ];

  const search = searchTerm.toLowerCase().trim();
  const filteredFAQs = faqs.filter((faq) => {
    // match category by key: either 'all' selected or faq.category equals selectedCategory
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return (
      (faq.question?.toLowerCase().includes(search) ||
        faq.answer?.toLowerCase().includes(search)) &&
      matchesCategory
    );
  });

  return (
    <div>
      <PageHeader
        title={t('faqTitle') || 'Frequently Asked Questions'}
        subtitle={t('faqSubtitle') || 'Find quick answers to common questions or reach out to support'}
      />

      <div className="py-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder={t('searchFAQs') || 'Search FAQs'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === key
                      ? 'bg-blue-400 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {/* show translated label */}
                  {t(key)}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium mb-2">
                        {t(faq.category)} {/* translated category label */}
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
                {t('noFAQsFound') || 'No FAQs matched your search.'}
              </p>
            </div>
          )}

          {/* Contact Support */}
          <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center transition-colors">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              {t('stillHaveQuestions') || 'Still have questions?'}
            </h2>
            <p className="text-blue-700 dark:text-blue-300 mb-6">
              {t('cantFindLooking') || "Can't find what you're looking for? Get in touch and we'll help."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/255794982600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                {t('whatsapp') || 'WhatsApp'} Support
              </a>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('contact') || 'Contact'}
              </a>
              <a
                href="tel:+255794982600"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                {t('callUs') || 'Call Us'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
