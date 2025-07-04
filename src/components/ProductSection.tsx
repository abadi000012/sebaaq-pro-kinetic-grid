
import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  const machines = [
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
    }
  ];

  const seats = [
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
    }
  ];

  const accessories = [
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
    },
    {
      id: 'shifter',
      name: 'ناقل حركة احترافي',
      image: '/lovable-uploads/42c6104b-66aa-4fba-837c-b1b5fc18c871.png',
      category: 'إكسسوارات'
    },
    {
      id: 'pedals',
      name: 'دواسات متطورة',
      image: '/lovable-uploads/3fb38e34-bc46-4944-ac37-a8431a401860.png',
      category: 'إكسسوارات'
    },
    {
      id: 'vr-headset',
      name: 'نظارة الواقع الافتراضي',
      image: '/lovable-uploads/46c3963d-77ae-4bc3-b544-e73cc00ee8f6.png',
      category: 'إكسسوارات'
    }
  ];

  const ProductCard = ({ product, index }) => (
    <Link 
      to={`/product/${product.id}`}
      className="product-card transform hover:scale-105 transition-all duration-300 block"
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
  );

  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-charcoal relative">
      <div className="container mx-auto px-6">
        {/* Main Machines Section */}
        <div className="text-center mb-16">
          <h2 className="font-cairo font-black text-4xl md:text-6xl mb-6 text-white hero-text-outline">
            أجهزة المحاكاة المتميزة
          </h2>
          <p className="text-light-grey text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة أجهزة المحاكاة الاحترافية عالية الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {machines.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Seats Subsection */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-cairo font-black text-3xl md:text-4xl mb-4 text-white hero-text-outline">
              المقاعد المريحة
            </h3>
            <p className="text-light-grey text-lg max-w-2xl mx-auto leading-relaxed">
              مقاعد احترافية مصممة للراحة القصوى أثناء المحاكاة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {seats.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + machines.length} />
            ))}
          </div>
        </div>

        {/* Accessories Subsection */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-cairo font-black text-3xl md:text-4xl mb-4 text-white hero-text-outline">
              الإكسسوارات والحوامل
            </h3>
            <p className="text-light-grey text-lg max-w-2xl mx-auto leading-relaxed">
              إكسسوارات متطورة لتحسين تجربة المحاكاة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {accessories.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + machines.length + seats.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
