import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHeader from '../components/PageHeader';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Mobile Technology in Tanzania',
      excerpt: 'Exploring how 5G networks and advanced smartphones are transforming communication and business in Tanzania.',
      author: 'John Mwangi',
      date: '2024-01-15',
      category: 'Mobile Technology',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Laptop Buying Guide 2024: What to Consider',
      excerpt: 'A comprehensive guide to choosing the perfect laptop for your needs, from budget options to high-performance machines.',
      author: 'Sarah Ahmed',
      date: '2024-01-10',
      category: 'Computers',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Essential Tech Accessories for Students',
      excerpt: 'Discover the must-have accessories that can enhance your study experience and boost productivity.',
      author: 'Michael Joseph',
      date: '2024-01-05',
      category: 'Accessories',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Understanding Smartphone Camera Technology',
      excerpt: 'Learn about the latest camera innovations in smartphones and how to take better photos with your device.',
      author: 'Grace Mwalimu',
      date: '2024-01-02',
      category: 'Mobile Technology',
      image: 'https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'How to Maintain Your Electronics for Longevity',
      excerpt: 'Simple tips and tricks to keep your devices running smoothly and extend their lifespan.',
      author: 'John Mwangi',
      date: '2023-12-28',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Top Gaming Laptops for 2024',
      excerpt: 'Review of the best gaming laptops available in Tanzania, comparing performance, price, and features.',
      author: 'Sarah Ahmed',
      date: '2023-12-25',
      category: 'Gaming',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '10 min read',
      featured: false
    }
  ];

  const categories = [
    'All',
    'Mobile Technology',
    'Computers',
    'Accessories',
    'Gaming',
    'Maintenance'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div>
      <PageHeader 
        title={t('blogTitle')}
        subtitle={t('blogSubtitle')}
        backgroundImage="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <div className="py-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('featured')}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{featuredPost.date}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center">
                      {t('readMore')}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-400 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category === 'All' ? t('all') : 
                 category === 'Mobile Technology' ? t('mobileechnology') :
                 category === 'Computers' ? t('computers') :
                 category === 'Gaming' ? t('gaming') :
                 category === 'Maintenance' ? t('maintenance') :
                 category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center">
                    {t('read')}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-400 dark:bg-blue-600 text-white rounded-lg p-8 text-center transition-colors">
          <h2 className="text-3xl font-bold mb-4">{t('stayUpdated')}</h2>
          <p className="text-xl mb-6 text-blue-100 dark:text-blue-200">
            Subscribe to our newsletter and never miss a tech update
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder={t('enterEmail')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
            />
            <button className="bg-green-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors">
              {t('subscribe')}
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;