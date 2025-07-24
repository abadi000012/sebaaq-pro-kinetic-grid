
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductSection = () => {
  const { language } = useLanguage();
  const simulators = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      description: 'محاكي سباق بمحورين حركة للمبتدئين والهواة. يوفر تجربة واقعية مع حركات الإمالة والانحناء.',
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
      description: 'محاكي متوسط المستوى بثلاثة محاور حركة. يوفر تجربة أكثر واقعية للمتحمسين.',
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
      description: 'أقوى محاكي بستة محاور حركة كاملة. تجربة احترافية متكاملة للمحترفين والأندية.',
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
      description: 'مقعد سباق مريح وقابل للتعديل مناسب لجلسات طويلة.',
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
      description: 'مقعد متميز فاخر بأعلى مستويات الراحة والجودة.',
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

  const accessories = [
    {
      id: 'dpofirs-handbrake',
      name: 'جلنط Dpofirs 64',
      description: 'إذا كنت من محبي ألعاب السباق وتبحث عن تجربة قيادة واقعية، جلنط Dpofirs USB هو الخيار المثالي لك. يتميز هذا الجلنط بتصميم متين وتقنيات حديثة تمنحك تحكمًا دقيقًا وأداءً موثوقًا.',
      images: [
        '/lovable-uploads/ee8a1ff1-49ea-459e-8f54-3c7ac41e3af7.png'
      ],
      features: [
        '• تصميم متين وقوي',
        '• تقنيات حديثة للتحكم الدقيق',
        '• اتصال USB موثوق',
        '• مثالي لمحبي ألعاب السباق'
      ]
    },
    {
      id: 'logitech-g923',
      name: 'دركسون ودواسات سباق G923',
      description: 'لوجيتيك جي 923 هي عجلة سباق عالية الأداء تحدث ثورة في تجربة السباقات. تمت إعادة تصميم جي 923 لدعم نظام التغذية الراجعة الذي يغير قواعد اللعبة، وهو يتميز بخاصية ترو فورس، وهي الجيل الجديد من التقنيات.',
      images: [
        '/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png',
        '/lovable-uploads/46bbcc78-2b7c-4a7e-ac1b-a2071f5973b0.png'
      ],
      features: [
        '• تقنية ترو فورس المتقدمة',
        '• نظام تغذية راجعة ثوري',
        '• عجلة سباق عالية الأداء',
        '• دواسات احترافية مضمنة'
      ]
    },
    {
      id: 'thrustmaster-t128',
      name: 'Thrustmaster T128 دركسون قير دواسات من ثرست ماستر',
      description: 'عجلة قيادة متطورة من Thrustmaster تجمع بين الأداء العالي والتصميم المريح، مصممة لتوفير تجربة سباق واقعية وممتعة للمبتدئين والمحترفين على حد سواء.',
      images: [
        '/lovable-uploads/993ba08d-0c0c-4cd1-8f7c-a7ba534ba117.png',
        '/lovable-uploads/71467054-f8aa-40a6-b655-631ae142a971.png'
      ],
      features: [
        '• تصميم مريح ومتطور',
        '• قير ودواسات احترافية',
        '• أداء عالي من Thrustmaster',
        '• مناسب للمبتدئين والمحترفين'
      ]
    },
    {
      id: 'thrustmaster-th8a',
      name: 'قير Thrustmaster TH8A',
      description: 'ارتقِ بقيادة السباقات لديك مع Thrustmaster TH8A Add-On Shifter، المصمم لمن يبحث عن أداء احترافي وتجربة قيادة واقعية بجودة عالية.',
      images: [
        '/lovable-uploads/f621ba05-60e4-461e-8be6-83383aef11c9.png'
      ],
      features: [
        '• قير احترافي من Thrustmaster',
        '• تجربة قيادة واقعية',
        '• جودة تصنيع عالية',
        '• سهولة التركيب والاستخدام'
      ]
    },
    {
      id: 'broleo-handbrake',
      name: 'جلنط BROLEO USB – جودة ممتازة وسهولة تشغيل',
      description: 'إذا كنت من محبي ألعاب السباقات وتريد تحكم أدق وتجربة واقعية، جلنط BROLEO هو خيارك المثالي. بتصميمه القوي وأدائه العالي، هذا الجلنط مصمم ليعطيك إحساس قيادة حقيقي ويعزز من تجربتك.',
      images: [
        '/lovable-uploads/2560f5ed-f4bc-4bcc-b41c-b57b6fedeb1a.png',
        '/lovable-uploads/a40f44e2-5571-4ab7-942a-087f3cd74281.png'
      ],
      features: [
        '• جودة تصنيع ممتازة',
        '• سهولة التشغيل والتركيب',
        '• تحكم دقيق وواقعي',
        '• اتصال USB موثوق'
      ]
    }
  ];

  const renderProductSection = (products, title, titleColor = 'text-white', isMain = false) => (
    <div className={`mb-24 ${isMain ? 'mb-32' : ''}`}>
      <div className="text-center mb-16 animate-fade-in-up">
        <h3 className={`font-cairo font-bold ${isMain ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'} mb-6 ${titleColor}`}>
          {title}
        </h3>
      </div>

      {isMain ? (
        // Organized grid layout for main simulators
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className="block group"
            >
              <div 
                className="bg-charcoal/80 backdrop-blur-sm border border-light-grey/20 rounded-2xl p-6 hover:border-racing-red/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <img 
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col">
                  <h4 className="font-cairo font-bold text-xl mb-3 text-white group-hover:text-racing-red transition-colors duration-300">
                    {product.name}
                  </h4>
                  
                  <p className="font-cairo text-muted-grey text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-racing-red/20 to-transparent p-3 rounded-lg border border-racing-red/30">
                      <h5 className="font-cairo font-semibold text-racing-red text-sm mb-2">
                        {language === 'ar' ? 'المواصفات الرئيسية' : 'Key Features'}
                      </h5>
                      <ul className="font-cairo text-white space-y-1 text-right text-xs">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full bg-racing-red/20 hover:bg-racing-red/30 border border-racing-red/30 text-white px-4 py-2 rounded-lg transition-all duration-300 font-cairo">
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // Grid layout for other categories
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
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h4 className="font-cairo font-bold text-xl mb-3 text-white group-hover:text-racing-red transition-colors duration-300">
                  {product.name}
                </h4>
                
                <p className="font-cairo text-muted-grey text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                <button className="w-full bg-racing-red/20 hover:bg-racing-red/30 border border-racing-red/30 text-white px-4 py-2 rounded-lg transition-all duration-300 font-cairo">
                  {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="products" className="py-24 px-6 bg-gradient-to-b from-deep-black via-charcoal to-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cairo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            {language === 'ar' ? 'منتجاتنا' : 'Our Products'}
          </h2>
          <p className="font-cairo text-lg md:text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' ? 'اكتشف مجموعة محاكيات السباق المتطورة من سيباق برو' : 'Discover SeBaaq Pro\'s advanced racing simulator collection'}
          </p>
        </div>

        {/* Main Racing Simulators Section */}
        {renderProductSection(simulators, language === 'ar' ? 'محاكيات السباق' : 'Racing Simulators', 'text-racing-red', true)}

        {/* Racing Seats Section */}
        {renderProductSection(racingSeats, language === 'ar' ? 'مقاعد السباق' : 'Racing Seats', 'text-racing-red')}

        {/* Display Stands Section */}
        {renderProductSection(displayStands, language === 'ar' ? 'حوامل الشاشات' : 'Display Stands', 'text-racing-red')}

        {/* Accessories Section */}
        {renderProductSection(accessories, language === 'ar' ? 'الإكسسوارات' : 'Accessories', 'text-racing-red')}
      </div>
    </section>
  );
};

export default ProductSection;
