import Desk1 from '../Assets/Pictures/daniel-eliashevskyi-aTg26S0_OC0-unsplash.jpg';
import Desk2 from '../Assets/Pictures/domenico-loia-hGV2TfOh0ns-unsplash.jpg';
import Desk3 from '../Assets/Pictures/pexels-pixabay-38568.jpg';
import Mon1 from '../Assets/Pictures/domenico-loia-hGV2TfOh0ns-unsplash.jpg';
import Mon2 from '../Assets/Pictures/pexels-pixabay-38568.jpg';
import Mon3 from '../Assets/Pictures/apple-407122_1280.jpg';
import Print1 from '../Assets/Pictures/filtergrade-oPyAcpkQch0-unsplash.jpg';
import Print2 from '../Assets/Pictures/mahrous-houses-5AoOejjRUrA-unsplash.jpg';
import Print3 from '../Assets/Pictures/pexels-mikhail-nilov-9301887.jpg';
import Phone1 from '../Assets/Pictures/pexels-tracy-le-blanc-67789-607812.jpg'
import Phone2 from '../Assets/Pictures/pexels-solliefoto-336948.jpg';
import Phone3 from '../Assets/Pictures/pexels-pixabay-40739.jpg';
import Mouse1 from '../Assets/Pictures/maar-gaming-fG4BTSKPo3w-unsplash.jpg';
import Mouse2 from '../Assets/Pictures/oscar-ivan-esquivel-arteaga-ZtxED1cpB1E-unsplash.jpg';
import Mouse3 from '../Assets/Pictures/rebekah-yip-wMT0oiL5XjA-unsplash.jpg'
import Tab1 from '../Assets/Pictures/pexels-joshsorenson-1334597.jpg';
import Tab2 from '../Assets/Pictures/pexels-pixabay-40739.jpg';
import Tab3 from '../Assets/Pictures/pexels-pixabay-221185.jpg';
import Key1 from '../Assets/Pictures/keyboard-7270529_1920.jpg';
import Key2 from '../Assets/Pictures/keyboard-915520_1280.jpg';
import Key3 from '../Assets/Pictures/keyboard-943739_1280.jpg';
import Lap1 from '../Assets/Pictures/laptop-1205256_1280.jpg';
import Lap2 from '../Assets/Pictures/laptop-1846277_1280.jpg';
import Lap3 from '../Assets/Pictures/laptop-593327_1280.jpg';
import Acc1 from '../Assets/Pictures/lenovo-1tb-portable-hard-drive-3688029_1280.jpg';
import Acc2 from '../Assets/Pictures/headphones-1868612_1280.jpg';
import Acc3 from '../Assets/Pictures/earphone-3789598_1280.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import PageHeader from '../components/PageHeader';

const ProductsAd = () => {
  const { t } = useLanguage();

  const products = [
    { id: 1, name: 'MacBook Pro 14" M2', category: 'Laptops', image: Lap1 },
    { id: 2, name: 'Dell XPS 13', category: 'Laptops', image: Lap2 },
    { id: 3, name: 'HP Spectre x360', category: 'Laptops', image: Lap3 },
    { id: 4, name: 'iPhone 15 Pro', category: 'Mobile Phones', image: Phone1 },
    { id: 5, name: 'Samsung Galaxy S24', category: 'Mobile Phones', image: Phone2 },
    { id: 6, name: 'Google Pixel 8', category: 'Mobile Phones', image: Phone3 },
    { id: 7, name: 'Desktop PC (Custom Build)', category: 'Desktops', image: Desk1 },
    { id: 8, name: 'All-in-One PC', category: 'Desktops', image: Desk2 },
    { id: 9, name: 'Gaming Tower', category: 'Desktops', image: Desk3 },
    { id: 10, name: '27" 4K Monitor', category: 'Monitors', image: Mon1 },
    { id: 11, name: '34" Ultrawide Monitor', category: 'Monitors', image: Mon2 },
    { id: 12, name: '24" Gaming Monitor', category: 'Monitors', image: Mon3 },
    { id: 13, name: 'Gaming Mouse', category: 'Mouses', image: Mouse1 },
    { id: 14, name: 'Wireless Mouse', category: 'Mouses', image: Mouse2 },
    { id: 15, name: 'Ergonomic Mouse', category: 'Mouses', image: Mouse3 },
    { id: 16, name: 'Mechanical Keyboard', category: 'Keyboards', image: Key1 },
    { id: 17, name: 'Wireless Keyboard', category: 'Keyboards', image: Key2 },
    { id: 18, name: 'RGB Keyboard', category: 'Keyboards', image: Key3 },
    { id: 19, name: 'Laser Printer', category: 'Printers', image: Print1 },
    { id: 20, name: 'Inkjet Printer', category: 'Printers', image: Print2 },
    { id: 21, name: 'Portable Printer', category: 'Printers', image: Print3 },
    { id: 22, name: 'USB Microphone', category: 'Accessories', image: Acc1 },
    { id: 23, name: 'Studio Microphone', category: 'Accessories', image: Acc2 },
    { id: 24, name: 'Wireless Mic', category: 'Accessories', image: Acc3 },
    { id: 25, name: 'iPad Pro 11"', category: 'Tablets', image: Tab1 },
    { id: 26, name: 'Samsung Galaxy Tab S8', category: 'Tablets', image: Tab2 },
    { id: 27, name: 'Microsoft Surface Pro', category: 'Tablets', image: Tab3 },
  ];

  const groups = [
    { key: 'Desktops', title: t('desktops'), description: t('desktopsDesc') },
    { key: 'Laptops', title: t('laptops'), description: t('laptopsDesc') },
    { key: 'Mobile Phones', title: t('mobilePhones'), description: t('mobilePhonesDesc') },
    { key: 'Monitors', title: t('monitors'), description: t('monitorsDesc') },
    { key: 'Tablets', title: t('tablets'), description: t('tabletsDesc') },
    { key: 'Mouses', title: t('mouses'), description: t('mousesDesc') },
    { key: 'Keyboards', title: t('keyboards'), description: t('keyboardsDesc') },
    { key: 'Printers', title: t('printers'), description: t('printersDesc') },
    { key: 'Accessories', title: t('accessories'), description: t('accessoriesDesc') },
  ];

  return (
    <div>
      <PageHeader 
        title={t('productsTitle')}
        subtitle={t('productsSubtitle')}
        backgroundImage="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map(group => {
            const items = products.filter(p => p.category === group.key).slice(0, 3);
            return (
              <div key={group.key} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{group.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{group.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  {items.map(item => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-24 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProductsAd;
