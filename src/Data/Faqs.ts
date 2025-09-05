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
    answer: 'We offer a variety of secure payment options for your convenience. Kindly contact our store or message us on WhatsApp and our team will be happy to assist you with available methods.'
  },
  {
    id: 2,
    category: 'Shipping & Delivery',
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer delivery services. Delivery options and timelines depend on your location — please contact us and we will gladly arrange the most suitable option for you.'
  },
  {
    id: 3,
    category: 'Returns & Warranty',
    question: 'How long is the warranty coverage?',
    answer: 'Warranty coverage typically ranges from 6 months to 2 years, depending on the product and manufacturer. We are happy to support you with warranty claims and assistance when needed.'
  },
  {
    id: 4,
    category: 'Orders & Payments',
    question: 'Can I reserve a product before purchasing?',
    answer: 'Yes, you may reserve products for up to 24 hours by calling our stores or messaging us on WhatsApp. Please contact us for assistance and we will gladly hold the item for you.'
  },
  {
    id: 5,
    category: 'Shipping & Delivery',
    question: 'How long does delivery take?',
    answer: 'Standard delivery within Dar es Salaam, Dodoma, and Mwanza typically takes 1–2 business days. Inter-city delivery may take 2–5 business days. Please reach out for more precise estimates for your area.'
  },
  {
    id: 6,
    category: 'Account & Services',
    question: 'How can I track my order?',
    answer: 'Once your order is confirmed, you will receive tracking information via SMS or WhatsApp. You may also contact our stores directly and our team will provide an update on your order status.'
  },
  {
    id: 7,
    category: 'Orders & Payments',
    question: 'Are your products genuine?',
    answer: 'Yes — all our products are authentic and sourced from authorized distributors. We provide official warranty cards and certificates of authenticity where applicable.'
  },
  {
    id: 8,
    category: 'Account & Services',
    question: 'Do you offer bulk arrangements for businesses?',
    answer: 'Yes, we accommodate bulk orders and corporate customers. Kindly contact our sales team to discuss your requirements and we will be pleased to assist with arrangements and account setup.'
  }
];
