
import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  const products = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      image: '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
      category: 'محاكيات'
    },
    {
      id: 'a3',
      name: 'محاكاة القيادة A3',
      image: '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
      category: 'محاكيات'
    },
    {
      id: 'a6',
      name: 'محاكاة القيادة A6',
      image: '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
      category: 'محاكيات'
    },
    {
      id: 'gttrack',
      name: 'مقعد GTTrack',
      image: '/lovable-uploads/27bfe8d3-28d1-4885-a5fc-55961e9c05dc.png',
      category: 'مقاعد'
    },
    {
      id: 'elite-seat',
      name: 'مقعد ELITE',
      image: '/lovable-uploads/157b2ab3-b1f0-4f57-b008-3a05b52e07d4.png',
      category: 'مقاعد'
    },
    {
      id: 'triple-monitor',
      name: 'حامل شاشات ثلاثي',
      image: '/lovable-uploads/0207fd82-32d1-4749-b1ae-52d182ac2990.png',
      category: 'حوامل'
    },
    {
      id: 'g923',
      name: 'دركسون G923',
      image: '/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png',
      category: 'إكسسوارات'
    },
    {
      id: 'handbrake',
      name: 'جلنط Dpofirs',
      image: '/lovable-uploads/ee8a1ff1-49ea-459e-8f54-3c7ac41e3af7.png',
      category: 'إكسسوارات'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cairo font-black text-4xl md:text-6xl mb-6 text-white hero-text-outline">
            منتجاتنا المتميزة
          </h2>
          <p className="text-light-grey text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة متنوعة من أجهزة المحاكاة والإكسسوارات عالية الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <span className="inline-block bg-racing-red/20 text-racing-red px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {product.category}
                </span>
                
                <h3 className="font-cairo font-bold text-lg text-white">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
