import React from 'react';

const ProductSection = () => {
  const products = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      description: 'ابدأ مغامرتك في عالم المحاكاة مع A2 PRO، المنصة الحركية الكاملة التي ترتقي بتجربة المحاكاة إلى مستويات جديدة. تتميز هذه المنصة بمحورين من الحركة: الانحناء الطولي والانحناء الجانبي',
      images: [
        '/lovable-uploads/a2pro-1.png',
        '/lovable-uploads/a2pro-2.png',
        '/lovable-uploads/a2pro-3.png',
        '/lovable-uploads/a2pro-4.png'
      ],
      features: [
        '• محورين من الحركة (الانحناء الطولي والجانبي)',
        '• تصميم مريح قابل للتعديل',
        '• نظام حركة متطور',
        '• مقود وبدالات عالية الجودة'
      ]
    },
    {
      id: 'a3',
      name: 'محاكاة القيادة A3',
      description: 'المنصة الحركية المثالية لمن يبحث عن محاكاة واقعية، حيث توفر ثلاثة محاور من الحركة يعطيك تجربة دقيقة للشعور في محاكاة القيادة، هذه المنصة ليست مجرد جهاز محاكاة عادي—إنها تجربة حقيقية تعكس كل تفاصي',
      images: [
        '/lovable-uploads/a3-1.png',
        '/lovable-uploads/a3-2.png',
        '/lovable-uploads/a3-3.png'
      ],
      features: [
        '• ثلاثة محاور من الحركة',
        '• تجربة محاكاة واقعية ودقيقة',
        '• تصميم احترافي متقدم',
        '• دعم جميع ألعاب السباق الشهيرة'
      ]
    },
    {
      id: 'a6',
      name: 'محاكاة القيادة A6',
      description: 'تجربة محاكاة القيادة المتكامل A6 SEBAAQ ذو ال6 محاور !',
      images: [
        '/lovable-uploads/a6-1.png',
        '/lovable-uploads/a6-2.png',
        '/lovable-uploads/a6-3.png'
      ],
      features: [
        '• ستة محاور كاملة من الحركة',
        '• تجربة محاكاة متكاملة ومتقدمة',
        '• أعلى مستويات الواقعية',
        '• تقنية حركة احترافية'
      ]
    },
    {
      id: 'gttrack',
      name: 'مقعد محاكاة السباق Next Level Racing GTTrack',
      description: 'مقعد محاكاة السباقات المتطور من نيكست ليفل ريسينج، مصمم خصيصاً لتوفير تجربة قيادة مريحة وواقعية',
      images: [
        '/lovable-uploads/gttrack-1.png'
      ],
      features: [
        '• تصميم مريح وقابل للتعديل',
        '• جودة تصنيع عالية',
        '• متوافق مع جميع أنواع المقود والبدالات',
        '• سهولة التركيب والاستخدام'
      ]
    },
    {
      id: 'elite',
      name: 'مقعد ELITE محاكاة السباقات نيكست ليفل ريسينج',
      description: 'مقعد النخبة لمحاكاة السباقات، يوفر أقصى درجات الراحة والاحترافية لتجربة قيادة استثنائية',
      images: [
        '/lovable-uploads/elite-1.png'
      ],
      features: [
        '• تصميم احترافي من الدرجة الأولى',
        '• مواد عالية الجودة ومتينة',
        '• قابلية تعديل متقدمة',
        '• مناسب للاستخدام المكثف'
      ]
    }
  ];

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

        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Product Images */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="grid grid-cols-2 gap-4">
                  {product.images.slice(0, 4).map((image, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className={`aspect-square rounded-2xl overflow-hidden shadow-2xl border border-light-grey/10 ${
                        imgIndex === 0 ? 'col-span-2' : ''
                      }`}
                    >
                      <img 
                        src={image}
                        alt={`${product.name} - صورة ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className={`text-center lg:text-right ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-cairo font-bold text-3xl md:text-4xl mb-6 text-white leading-tight">
                  {product.name}
                </h3>
                
                <p className="font-cairo text-muted-grey text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-racing-red/20 to-transparent p-4 rounded-lg border border-racing-red/30">
                    <h4 className="font-cairo font-semibold text-racing-red text-xl mb-2">
                      المواصفات الرئيسية
                    </h4>
                    <ul className="font-cairo text-white space-y-2 text-right">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-charcoal/80 backdrop-blur-sm border border-light-grey/20 rounded-xl p-6 mb-8">
                  <div className="flex justify-between items-center">
                    <div className="text-right">
                      <h4 className="font-cairo font-bold text-2xl text-white mb-2">
                        {product.name}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
