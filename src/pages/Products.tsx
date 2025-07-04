
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      category: 'محاكيات',
      image: '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
      description: 'منصة حركية كاملة بمحورين من الحركة'
    },
    {
      id: 'a3',
      name: 'محاكاة القيادة A3', 
      category: 'محاكيات',
      image: '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
      description: 'ثلاثة محاور من الحركة للتجربة الواقعية'
    },
    {
      id: 'a6',
      name: 'محاكاة القيادة A6',
      category: 'محاكيات', 
      image: '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
      description: 'ستة محاور كاملة من الحركة'
    },
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
    },
    {
      id: 'triple-monitor',
      name: 'حامل شاشات ثلاثي',
      category: 'حوامل',
      image: '/lovable-uploads/0207fd82-32d1-4749-b1ae-52d182ac2990.png',
      description: 'حامل شاشات احترافي من Thermaltake'
    },
    {
      id: 'g923',
      name: 'دركسون G923',
      category: 'إكسسوارات',
      image: '/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png',
      description: 'عجلة قيادة متطورة مع دواسات'
    },
    {
      id: 'handbrake',
      name: 'جلنط Dpofirs',
      category: 'إكسسوارات', 
      image: '/lovable-uploads/ee8a1ff1-49ea-459e-8f54-3c7ac41e3af7.png',
      description: 'جلنط USB عالي الجودة'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-black text-white font-cairo">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center text-racing-red hover:text-white transition-colors mb-8">
          <ArrowRight className="ml-2 h-5 w-5" />
          العودة للرئيسية
        </Link>

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-cairo font-black text-5xl md:text-7xl mb-6 text-white hero-text-outline">
            منتجاتنا
          </h1>
          <p className="text-lg md:text-xl text-light-grey leading-relaxed max-w-3xl mx-auto">
            اكتشف مجموعة محاكيات السباق المتطورة من سيباق برو
          </p>
        </div>

        {/* Diagonal Product Grid */}
        <div className="diagonal-grid max-w-7xl mx-auto mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="text-center">
                <span className="inline-block bg-racing-red/20 text-racing-red px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {product.category}
                </span>
                
                <h3 className="font-cairo font-bold text-xl mb-2 text-white">
                  {product.name}
                </h3>
                
                <p className="text-light-grey text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/about" 
              className="bg-charcoal hover:bg-racing-red/20 border border-racing-red/30 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
            >
              من نحن
            </Link>
            <Link 
              to="/services" 
              className="bg-charcoal hover:bg-racing-red/20 border border-racing-red/30 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
            >
              خدماتنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
