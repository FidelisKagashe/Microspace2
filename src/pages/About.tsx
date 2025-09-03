import { Users, Award, Shield, Heart, Target, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHeader from '../components/PageHeader';

import InPicture from '../Assets/inpicture.jpg';
import Inpicture2 from '../Assets/picha ya ndani.jpg'

import InPictureMwanza from '../Assets/inpicturemwanza.jpg';
import InPictureDar from '../Assets/inpicturedaressalaam.jpg';
import InPictureDodoma from '../Assets/dodomandani.jpg'

import Chikondo from '../Assets/20250820_173018.webp';
import Johnson from '../Assets/IMG_2158 (1).jpg';
import Michael from '../Assets/Michael.jpg'

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: 'Years in Business', value: '4+' },
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products Sold', value: '100K+' },
    { label: 'Store Locations', value: '3' },
  ];

  const team = [
    {
      name: 'Michael Mbeti',
      position: 'Store Manager - Dar es Salaam',
      image: Michael,
      bio: '+255 794 982 600'
    },
    {
      name: 'Johnson Isaya',
      position: 'Store Manager - Dodoma',
      image: Johnson,
      bio: '+255 779 665 922'
    },
    {
      name: 'Faustine Chikondo',
      position: 'Store Manager - Mwanza',
      image: Chikondo,
      bio: '+255 748 442 007'
    },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'We only sell authentic products from trusted manufacturers with full warranty support.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in product quality, customer service, and technical support.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community',
      description: 'We are committed to serving the Tanzanian community and contributing to digital advancement.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('aboutTitle')}
        subtitle={t('aboutSubtitle')}
        // backgroundImage="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <div className="py-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src = {InPicture}
            alt="Microspace Store"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('ourStory')}</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  {t('storyOne')}
                </p>
                <p>
                  {t('storyTwo')}
                </p>
                <p>
                  {t('storyThree')}
                </p>
              </div>
            </div>
            <div>
              <img
                src={Inpicture2}
                alt="Microspace History"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">{t('ourMission')}</h3>
              </div>
              <p className="text-blue-800 dark:text-blue-200">
                {t('storyFour')}
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">{t('ourVision')}</h3>
              </div>
              <p className="text-green-800 dark:text-green-200">
                {t('storyFive')}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('ourValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{t(value.title.toLowerCase().replace(' ', ''))}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t(value.title.toLowerCase().replace(' ', '') + 'Desc')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('meetOurTeam')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('ourStoresGallery')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={InPictureDar}
                alt="Dar es Salaam Store"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Dar es Salaam</h3>
                <p className="text-white/90 text-sm">{t('ourFlagshipStore')}</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={InPictureDodoma}
                alt="Dodoma Store"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Dodoma</h3>
                <p className="text-white/90 text-sm">{t('servingCapital')}</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={InPictureMwanza}
                alt="Mwanza Store"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Mwanza</h3>
                <p className="text-white/90 text-sm">{t('lakeZoneHeadquarters')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-400 dark:bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('readyToExperience')}</h2>
          <p className="text-xl mb-6 text-blue-100 dark:text-blue-200">
            {t('visitStoreToday')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/stores"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('findStore')}
            </a>
            <a
              href="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;