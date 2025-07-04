
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProductSection = () => {
  const featuredSimulators = [
    {
      id: 'a6',
      name: 'محاكاة القيادة A6',
      description: 'تجربة محاكاة القيادة المتكامل A6 SEBAAQ ذو ال6 محاور - القمة في تجربة المحاكاة!',
      image: '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
      features: [
        '• ستة محاور كاملة من الحركة',
        '• تجربة محاكاة متكاملة ومتقدمة',
        '• أعلى مستويات الواقعية',
        '• تقنية حركة احترافية'
      ],
      badge: 'الأكثر تطوراً'
    },
    {
      id: 'a3',
      name: 'محاكاة القيادة A3',
      description: 'المنصة الحركية المثالية لمن يبحث عن محاكاة واقعية بثلاثة محاور من الحركة.',
      image: '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
      features: [
        '• ثلاثة محاور من الحركة',
        '• تجربة محاكاة واقعية ودقيقة',
        '• تصميم احترافي متقدم',
        '• دعم جميع ألعاب السباق الشهيرة'
      ],
      badge: 'الأكثر شعبية'
    },
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      description: 'ابدأ مغامرتك في عالم المحاكاة مع A2 PRO - المنصة الحركية الكاملة للمبتدئين.',
      image: '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
      features: [
        '• محورين من الحركة',
        '• تصميم مريح قابل للتعديل',
        '• نظام حركة متطور',
        '• مقود وبدالات عالية الجودة'
      ],
      badge: 'مثالي للمبتدئين'
    }
  ];

  const quickAccessories = [
    {
      name: 'دركسون G923',
      image: '/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png',
      description: 'تقنية ترو فورس المتقدمة'
    },
    {
      name: 'قير TH8A',
      image: '/lovable-uploads/f621ba05-60e4-461e-8be6-83383aef11c9.png',
      description: 'قير احترافي من Thrustmaster'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-deep-black via-charcoal to-deep-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cairo hero-title-outline text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            منتجاتنا المميزة
          </h2>
          <p className="font-cairo bold-text-outline text-lg md:text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة محاكيات السباق المتطورة من سيباق برو - حيث تلتقي التقنية بالواقعية
          </p>
        </div>

        {/* Featured Racing Simulators */}
        <div className="mb-20">
          <h3 className="font-cairo bold-text-outline text-3xl md:text-4xl text-racing-red text-center mb-12">
            محاكيات السباق الاحترافية
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredSimulators.map((simulator, index) => (
              <div 
                key={simulator.id} 
                className={`premium-card group relative overflow-hidden ${
                  index === 0 ? 'lg:col-span-1 lg:row-span-2 transform lg:scale-110' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-racing-red text-white px-3 py-1 rounded-full text-sm font-cairo font-bold">
                    {simulator.badge}
                  </span>
                </div>

                {/* Image */}
                <div className={`aspect-square mb-6 rounded-xl overflow-hidden ${
                  index === 0 ? 'lg:aspect-[4/5]' : ''
                }`}>
                  <img 
                    src={simulator.image}
                    alt={simulator.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className={`font-cairo bold-text-outline text-white leading-tight ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  }`}>
                    {simulator.name}
                  </h4>
                  
                  <p className={`font-cairo text-muted-grey leading-relaxed ${
                    index === 0 ? 'text-base' : 'text-sm'
                  }`}>
                    {simulator.description}
                  </p>

                  {/* Features - Show more for main featured item */}
                  <div className="space-y-2">
                    {simulator.features.slice(0, index === 0 ? 4 : 2).map((feature, featureIndex) => (
                      <p key={featureIndex} className="font-cairo text-light-grey text-sm">
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button className={`racing-glow-button w-full ${
                      index === 0 ? 'text-lg py-4' : 'text-sm py-3'
                    }`}>
                      اكتشف المزيد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <Link to="/products">
              <Button className="racing-glow-button text-xl px-12 py-4 animate-pulse">
                استكشف جميع المحاكيات
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Accessories Preview */}
        <div className="mb-16">
          <h3 className="font-cairo bold-text-outline text-2xl md:text-3xl text-racing-red text-center mb-8">
            الإكسسوارات المميزة
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {quickAccessories.map((accessory, index) => (
              <div key={index} className="premium-card group flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-cairo font-bold text-white mb-1">
                    {accessory.name}
                  </h4>
                  <p className="font-cairo text-muted-grey text-sm">
                    {accessory.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" className="border-2 border-racing-red text-racing-red hover:bg-racing-red hover:text-white px-8 py-3 font-cairo font-semibold">
                عرض جميع الإكسسوارات
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation to Other Pages */}
        <div className="bg-gradient-to-r from-racing-red/10 to-transparent rounded-2xl p-8 border border-racing-red/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/about" className="premium-card hover:border-racing-red/70 transition-all duration-300 group">
              <h4 className="font-cairo bold-text-outline text-xl text-racing-red mb-3 group-hover:text-white">
                من نحن
              </h4>
              <p className="font-cairo text-muted-grey group-hover:text-white transition-colors">
                تعرف على قصتنا ورؤيتنا في عالم محاكاة السباق
              </p>
            </Link>
            
            <Link to="/services" className="premium-card hover:border-racing-red/70 transition-all duration-300 group">
              <h4 className="font-cairo bold-text-outline text-xl text-racing-red mb-3 group-hover:text-white">
                خدماتنا
              </h4>
              <p className="font-cairo text-muted-grey group-hover:text-white transition-colors">
                اكتشف الخدمات المتكاملة التي نقدمها لعملائنا
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
