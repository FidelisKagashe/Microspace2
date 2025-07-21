// src/Data/Faqs.ts

export const categories = [
  'All',
  'Orders & Payments',
  'Shipping & Delivery',
  'Returns & Warranty',
  'Account & Services'
] as const;

export type Category = typeof categories[number];

export interface FAQItem {
  id: number;
  category: Category;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    category: 'Orders & Payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, mobile money (M-Pesa, Tigo Pesa, Airtel Money), bank transfers, and major credit/debit cards. Payment can be made in-store or through our WhatsApp Business API for online orders.'
  },
  {
    id: 2,
    category: 'Shipping & Delivery',
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer free delivery within city limits for orders over 500,000 TZS. For orders below this amount, standard delivery charges apply. We also offer express delivery for urgent orders.'
  },
  {
    id: 3,
    category: 'Returns & Warranty',
    question: 'What is your return policy?',
    answer: 'We offer a 14-day return policy for unopened products in original packaging. Electronics can be returned within 7 days if defective. All returns must include original receipt and packaging.'
  },
  {
    id: 4,
    category: 'Returns & Warranty',
    question: 'How long is the warranty coverage?',
    answer: 'Warranty periods vary by product and manufacturer. Typically: smartphones (1-2 years), laptops (1-3 years), accessories (6-12 months). We provide comprehensive warranty support and can assist with claims.'
  },
  {
    id: 5,
    category: 'Orders & Payments',
    question: 'Can I reserve a product before purchasing?',
    answer: 'Yes, you can reserve products for up to 24 hours by calling our stores or messaging us on WhatsApp. A small deposit may be required for high-value items.'
  },
  {
    id: 6,
    category: 'Shipping & Delivery',
    question: 'How long does delivery take?',
    answer: 'Standard delivery within Dar es Salaam, Dodoma, and Mwanza takes 1-2 business days. Inter-city delivery may take 2-5 business days.'
  },
  {
    id: 7,
    category: 'Account & Services',
    question: 'How can I track my order?',
    answer: 'Once your order is confirmed, you will receive tracking information via SMS or WhatsApp. You can also call our stores directly for order status updates.'
  },
  {
    id: 8,
    category: 'Orders & Payments',
    question: 'Are your products genuine?',
    answer: 'Yes, all our products are 100% authentic and sourced directly from authorized distributors. We provide official warranty cards and certificates of authenticity with every purchase.'
  },
  {
    id: 9,
    category: 'Account & Services',
    question: 'Do you offer bulk discounts for businesses?',
    answer: 'Yes, we offer special pricing for bulk orders and corporate customers. Contact our sales team for customized quotations and business account setup.'
  }
];
