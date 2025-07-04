
import React from 'react';

const ProductSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-deep-black via-charcoal to-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cairo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            منتجاتنا
          </h2>
          <p className="font-cairo text-lg md:text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة محاكيات السباق المتطورة من سيباق برو
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-light-grey/10">
              <img 
                src="/lovable-uploads/9b837f18-10b5-4db2-9236-cb0ccebb4c94.png" 
                alt="محاكاة القيادة A2 - منظر جانبي"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-light-grey/10">
              <img 
                src="/lovable-uploads/f9b8db59-3b41-46c3-a894-bdaacf910538.png" 
                alt="محاكاة القيادة A2 - منظر مائل"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="text-center lg:text-right">
            <h3 className="font-cairo font-bold text-3xl md:text-4xl mb-6 text-white leading-tight">
              محاكاة القيادة A2
            </h3>
            
            <p className="font-cairo text-muted-grey text-lg leading-relaxed mb-8">
              إذا كنت تبحث عن تجربة محاكاة سباق فعّالة من حيث التكلفة، فإن A2 SEBAAQ هو خيارك المثالي.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-racing-red/20 to-transparent p-4 rounded-lg border border-racing-red/30">
                <h4 className="font-cairo font-semibold text-racing-red text-xl mb-2">
                  المواصفات الرئيسية
                </h4>
                <ul className="font-cairo text-white space-y-2 text-right">
                  <li>• تصميم مريح قابل للتعديل</li>
                  <li>• نظام حركة متطور</li>
                  <li>• مقود وبدالات عالية الجودة</li>
                  <li>• دعم جميع ألعاب السباق الشهيرة</li>
                </ul>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-charcoal/80 backdrop-blur-sm border border-light-grey/20 rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center">
                <div className="text-right">
                  <h4 className="font-cairo font-bold text-2xl text-white mb-2">
                    محاكاة القيادة A2
                  </h4>
                  <p className="font-cairo text-muted-grey">
                    الحل الأمثل للمبتدئين والمحترفين
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-cairo font-bold text-xl text-racing-red mb-2">
                    اتصل للاستفسار عن السعر
                  </p>
                  <button className="racing-glow-button text-sm px-6 py-2">
                    تواصل معنا
                  </button>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button className="racing-glow-button">
                احجز جلسة تجريبية
              </button>
              <button className="bg-transparent border-2 border-racing-red text-racing-red px-8 py-4 rounded-lg font-cairo font-bold text-lg transition-all duration-300 hover:bg-racing-red hover:text-white">
                تحميل الكتالوج
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
