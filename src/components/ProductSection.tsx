
import React from 'react';

const ProductSection = () => {
  const simulators = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      description: 'ابدأ مغامرتك في عالم المحاكاة مع A2 PRO، المنصة الحركية الكاملة التي ترتقي بتجربة المحاكاة إلى مستويات جديدة. تتميز هذه المنصة بمحورين من الحركة: الانحناء الطولي والانحناء الجانبي',
      images: [
        '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
        '/lovable-uploads/9cccaa1e-8c23-46fe-a7f1-7eefea6b28a6.png',
        '/lovable-uploads/3fb38e34-bc46-4944-ac37-a8431a401860.png',
        '/lovable-uploads/42c6104b-66aa-4fba-837c-b1b5fc18c871.png'
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
        '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
        '/lovable-uploads/82ffd425-0c66-4075-a310-489bfe8b8cfa.png',
        '/lovable-uploads/eedd9259-15bd-4f14-84a6-1f27cb1cc168.png'
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
        '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
        '/lovable-uploads/01fa237c-fab2-4b52-857c-27687a795b4a.png',
        '/lovable-uploads/46c3963d-77ae-4bc3-b544-e73cc00ee8f6.png'
      ],
      features: [
        '• ستة محاور كاملة من الحركة',
        '• تجربة محاكاة متكاملة ومتقدمة',
        '• أعلى مستويات الواقعية',
        '• تقنية حركة احترافية'
      ]
    }
  ];

  const racingSeats = [
    {
      id: 'gttrack',
      name: 'مقعد محاكاة السباق Next Level Racing GTTrack',
      description: 'مقعد محاكاة السباق المتطور من Next Level Racing يوفر تجربة قيادة واقعية ومريحة للغاية مع تصميم احترافي يناسب جلسات السباق الطويلة',
      images: [
        '/lovable-uploads/27bfe8d3-28d1-4885-a5fc-55961e9c05dc.png',
        '/lovable-uploads/dd135d17-4bde-4784-bd55-0c0b4dc2bce1.png',
        '/lovable-uploads/34afe112-261d-41ea-86c5-46cad450fe89.png'
      ],
      features: [
        '• تصميم مريح ومتطور',
        '• قابل للتعديل بالكامل',
        '• مواد عالية الجودة',
        '• متوافق مع جميع أنواع المحاكيات'
      ]
    },
    {
      id: 'elite-seat',
      name: 'مقعد ELITE محاكاة السباقات نيكست ليفل ريسينج',
      description: 'مقعد ELITE المتميز يوفر أقصى مستويات الراحة والأداء لمحبي محاكاة السباق مع تقنيات متقدمة وتصميم أنيق',
      images: [
        '/lovable-uploads/157b2ab3-b1f0-4f57-b008-3a05b52e07d4.png',
        '/lovable-uploads/8b02efed-9ed8-4744-933f-ba7babbf0877.png'
      ],
      features: [
        '• تصميم ELITE متميز',
        '• راحة فائقة للجلسات الطويلة',
        '• مواد فاخرة عالية الجودة',
        '• نظام تعديل متقدم'
      ]
    }
  ];

  const displayStands = [
    {
      id: 'thermaltake-triple',
      name: 'حامل شاشات سباق ثلاثي من Thermaltake',
      description: 'احصل على تجربة سباق غامرة واحترافية مع حامل الشاشات الثلاثي من Thermaltake، المصمم خصيصاً لمحبي محاكاة السباق والألعاب الاحترافية',
      images: [
        '/lovable-uploads/0207fd82-32d1-4749-b1ae-52d182ac2990.png',
        '/lovable-uploads/a1696c55-9b57-46ab-b849-ec634115ebbf.png'
      ],
      features: [
        '• دعم ثلاث شاشات بأحجام متنوعة',
        '• تصميم قوي ومتين من Thermaltake',
        '• سهولة التركيب والتعديل',
        '• مثالي لمحاكاة السباق الاحترافية'
      ]
    },
    {
      id: 'quad-monitor-stand',
      name: 'حامل شاشة مستقل رباعي',
      description: 'دعم أربع شاشات: يدعم حتى 4 شاشات بحجم يتراوح بين 21 إلى 43 بوصة، ليمنحك عرضاً بانورامياً مذهلاً وتجربة غامرة لا مثيل لها',
      images: [
        '/lovable-uploads/27b513c9-7cf3-4ace-a721-aae6276e2b5a.png',
        '/lovable-uploads/605d2f9a-cb32-48b2-bf78-750bb2df2435.png',
        '/lovable-uploads/ef128616-a7d6-49d7-b06c-638d45cea322.png'
      ],
      features: [
        '• دعم 4 شاشات (21-43 بوصة)',
        '• عرض بانورامي مذهل',
        '• تصميم مستقل قوي',
        '• قابلية تعديل شاملة'
      ]
    },
    {
      id: 'next-level-triple',
      name: 'حامل شاشة ثلاثي من Next Level Racing',
      description: 'ارتقِ بتجربة اللعب والمحاكاة إلى مستوى احترافي مع حامل الشاشات الثلاثية من Next Level Racing، المصمم لتوفير أفضل زوايا المشاهدة',
      images: [
        '/lovable-uploads/41ed94f9-93b7-46e0-b9cc-4f4f7948af05.png',
        '/lovable-uploads/a4fcbc50-690a-4e0b-8ac5-324f4d98b2b1.png',
        '/lovable-uploads/9c257218-9139-4d76-9952-337df7ded453.png',
        '/lovable-uploads/32535fa5-b196-4c48-8d63-fada565c5bff.png'
      ],
      features: [
        '• تصميم احترافي من Next Level Racing',
        '• دعم ثلاث شاشات بزوايا مثالية',
        '• جودة تصنيع عالية',
        '• متوافق مع معظم أحجام الشاشات'
      ]
    }
  ];

  const renderProductSection = (products, title, titleColor = 'text-white') => (
    <div className="mb-24">
      <div className="text-center mb-16 animate-fade-in-up">
        <h3 className={`font-cairo font-bold text-3xl md:text-4xl lg:text-5xl mb-6 ${titleColor}`}>
          {title}
        </h3>
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
              <h4 className="font-cairo font-bold text-3xl md:text-4xl mb-6 text-white leading-tight">
                {product.name}
              </h4>
              
              <p className="font-cairo text-muted-grey text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-racing-red/20 to-transparent p-4 rounded-lg border border-racing-red/30">
                  <h5 className="font-cairo font-semibold text-racing-red text-xl mb-2">
                    المواصفات الرئيسية
                  </h5>
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
                    <h5 className="font-cairo font-bold text-2xl text-white mb-2">
                      {product.name}
                    </h5>
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
  );

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

        {/* Racing Simulators Section */}
        {renderProductSection(simulators, 'محاكيات السباق', 'text-racing-red')}

        {/* Racing Seats Section */}
        {renderProductSection(racingSeats, 'مقاعد السباق', 'text-racing-red')}

        {/* Display Stands Section */}
        {renderProductSection(displayStands, 'حوامل الشاشات', 'text-racing-red')}
      </div>
    </section>
  );
};

export default ProductSection;
