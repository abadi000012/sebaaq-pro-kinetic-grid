import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { language } = useLanguage();
  const simulators = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      category: 'محاكيات',
      image: '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
      description: 'محاكي سباق بمحورين حركة للمبتدئين والهواة. يوفر تجربة واقعية مع حركات الإمالة والانحناء.'
    },
    {
      id: 'a3',
      name: 'محاكاة القيادة A3', 
      category: 'محاكيات',
      image: '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
      description: 'محاكي متوسط المستوى بثلاثة محاور حركة. يوفر تجربة أكثر واقعية للمتحمسين.'
    },
    {
      id: 'a6',
      name: 'محاكاة القيادة A6',
      category: 'محاكيات', 
      image: '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
      description: 'أقوى محاكي بستة محاور حركة كاملة. تجربة احترافية متكاملة للمحترفين والأندية.'
    }
  ];

  const seats = [
    {
      id: 'gttrack',
      name: 'مقعد GTTrack',
      category: 'مقاعد',
      image: '/lovable-uploads/27bfe8d3-28d1-4885-a5fc-55961e9c05dc.png',
      description: 'مقعد محاكاة احترافي مريح'
    },
    {
      id: 'elite-seat',
      name: 'مقعد ELITE',
      category: 'مقاعد',
      image: '/lovable-uploads/157b2ab3-b1f0-4f57-b008-3a05b52e07d4.png', 
      description: 'مقعد فاخر عالي الجودة'
    }
  ];

  const displayStands = [
    {
      id: 'thermaltake-triple',
      name: 'حامل شاشات ثلاثي Thermaltake',
      category: 'حوامل الشاشات',
      image: '/lovable-uploads/0207fd82-32d1-4749-b1ae-52d182ac2990.png',
      description: 'حامل شاشات احترافي من Thermaltake'
    },
    {
      id: 'quad-monitor-stand',
      name: 'حامل شاشة رباعي',
      category: 'حوامل الشاشات',
      image: '/lovable-uploads/27b513c9-7cf3-4ace-a721-aae6276e2b5a.png',
      description: 'دعم 4 شاشات بعرض بانورامي'
    },
    {
      id: 'next-level-triple',
      name: 'حامل شاشة ثلاثي Next Level',
      category: 'حوامل الشاشات',
      image: '/lovable-uploads/41ed94f9-93b7-46e0-b9cc-4f4f7948af05.png',
      description: 'حامل احترافي من Next Level Racing'
    }
  ];

  const accessories = [
    {
      id: 'dpofirs-handbrake',
      name: 'جلنط Dpofirs',
      category: 'إكسسوارات',
      image: '/lovable-uploads/ee8a1ff1-49ea-459e-8f54-3c7ac41e3af7.png',
      description: 'جلنط USB عالي الجودة'
    },
    {
      id: 'logitech-g923',
      name: 'دركسون G923',
      category: 'إكسسوارات',
      image: '/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png',
      description: 'عجلة قيادة متطورة مع دواسات'
    },
    {
      id: 'thrustmaster-t128',
      name: 'Thrustmaster T128',
      category: 'إكسسوارات',
      image: '/lovable-uploads/993ba08d-0c0c-4cd1-8f7c-a7ba534ba117.png',
      description: 'عجلة قيادة مع قير ودواسات'
    },
    {
      id: 'thrustmaster-th8a',
      name: 'قير Thrustmaster TH8A',
      category: 'إكسسوارات',
      image: '/lovable-uploads/f621ba05-60e4-461e-8be6-83383aef11c9.png',
      description: 'قير احترافي من Thrustmaster'
    },
    {
      id: 'broleo-handbrake',
      name: 'جلنط BROLEO',
      category: 'إكسسوارات',
      image: '/lovable-uploads/2560f5ed-f4bc-4bcc-b41c-b57b6fedeb1a.png',
      description: 'جلنط USB بجودة ممتازة'
    }
  ];

  const renderProductSection = (products, title) => (
    <div className="mb-16">
      <h2 className="font-cairo font-bold text-3xl text-racing-red mb-8 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Link 
            key={product.id}
            to={`/product/${product.id}`}
            className="block group"
          >
            <div 
              className="bg-charcoal/80 backdrop-blur-sm border border-light-grey/20 rounded-2xl p-6 hover:border-racing-red/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h4 className="font-cairo font-bold text-xl mb-3 text-white group-hover:text-racing-red transition-colors duration-300">
                {product.name}
              </h4>
              
              <p className="font-cairo text-muted-grey text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              <button className="w-full bg-racing-red/20 hover:bg-racing-red/30 border border-racing-red/30 text-white px-4 py-2 rounded-lg transition-all duration-300 font-cairo">
                {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-deep-black text-white font-cairo">
      <div className="container mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center text-racing-red hover:text-white transition-colors mb-8">
          <ArrowRight className="ml-2 h-5 w-5" />
          {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-cairo font-black text-5xl md:text-7xl mb-6 text-white hero-text-outline">
            {language === 'ar' ? 'منتجاتنا' : 'Our Products'}
          </h1>
          <p className="text-lg md:text-xl text-light-grey leading-relaxed max-w-3xl mx-auto">
            {language === 'ar' ? 'اكتشف مجموعة محاكيات السباق المتطورة من سيباق برو' : 'Discover SeBaaq Pro\'s advanced racing simulator collection'}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {renderProductSection(simulators, language === 'ar' ? 'محاكيات السباق' : 'Racing Simulators')}
          {renderProductSection(seats, language === 'ar' ? 'مقاعد السباق' : 'Racing Seats')}
          {renderProductSection(displayStands, language === 'ar' ? 'حوامل الشاشات' : 'Display Stands')}
          {renderProductSection(accessories, language === 'ar' ? 'الإكسسوارات' : 'Accessories')}
        </div>
      </div>
    </div>
  );
};

export default Products;
