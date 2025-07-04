import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams();

  const simulators = [
    // Simulators
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      category: 'محاكيات السباق',
      description: 'ابدأ مغامرتك في عالم المحاكاة مع A2 PRO، المنصة الحركية الكاملة التي ترتقي بتجربة المحاكاة إلى مستويات جديدة. تتميز هذه المنصة بمحورين من الحركة: الانحناء الطولي والانحناء الجانبي، مما يوفر لك تجربة غامرة تجعلك تشعر بالتسارع، والتوقف، وقوة الجاذبية أثناء المنعطفات الحادة. ما يميز A2 PRO هو قدرتها على تحريك المقعد بالإضافة إلى جميع أدوات التحكم مثل عجلة القيادة، والدواسات، والعصا، والThrottle التي يتم تثبيتها مباشرة على المنصة الحركية. استمتع بتجربة مدهشة مع كل منعطف وكل حركة!\n\nمحورين — درجات الحركة (DOF)\n\nالخصائص\n\nدرجات الحركة (محور): 2 DOF (الرفع + الدوران)\nحركة كاملة للمنصة: نعم\nنطاق الحركة: 20°\nالسرعة: 50 سم/ث (86°/ث)\nعزم الدوران: 25 نيوتن متر',
      images: [
        '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
        '/lovable-uploads/9cccaa1e-8c23-46fe-a7f1-7eefea6b28a6.png',
        '/lovable-uploads/3fb38e34-bc46-4944-ac37-a8431a401860.png',
        '/lovable-uploads/42c6104b-66aa-4fba-837c-b1b5fc18c871.png'
      ],
      features: [
        'محورين من الحركة (الانحناء الطولي والجانبي)',
        'تصميم مريح قابل للتعديل',
        'نظام حركة متطور',
        'مقود وبدالات عالية الجودة'
      ]
    },
    {
      id: 'a3',
      name: 'محاكاة القيادة A3',
      category: 'محاكيات السباق',
      description: 'المنصة الحركية المثالية لمن يبحث عن محاكاة واقعية، حيث توفر ثلاثة محاور من الحركة يعطيك تجربة دقيقة للشعور في محاكاة القيادة، هذه المنصة ليست مجرد جهاز محاكاة عادي—إنها تجربة حقيقية تعكس كل تفاصيل التحكم في السيارة.\n\nثلاثة محاور — درجات الحركة (DOF)\nالخصائص\n\nدرجات الحركة (محور): 3 DOF (الرفع + الدوران + التوجيه/خسارة الجر الخلفية)\nحركة كاملة للمنصة: نعم\nنطاق الحركة: 20°\nالسرعة: 50 سم/ث (86°/ث)\nعزم الدوران: 25 نيوتن متر',
      images: [
        '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
        '/lovable-uploads/82ffd425-0c66-4075-a310-489bfe8b8cfa.png',
        '/lovable-uploads/eedd9259-15bd-4f14-84a6-1f27cb1cc168.png'
      ],
      features: [
        'ثلاثة محاور من الحركة',
        'تجربة محاكاة واقعية ودقيقة',
        'تصميم احترافي متقدم',
        'دعم جميع ألعاب السباق الشهيرة'
      ]
    },
    {
      id: 'a6',
      name: 'محاكاة القيادة A6',
      category: 'محاكيات السباق',
      description: 'المنصة الحركية الاقوى التي تقدم جميع المحاور الستة للحركة لتجربة لا مثيل لها. هذه المنصة المتطورة والمدمجة قادرة على إعادة جميع الحركات الممكنة في جميع الاتجاهات. من الرفع والدوران والتوجيه إلى الانزلاق الأمامي والتموج الجانبي والحركة الأمامية، A6 هي المنصة المثالية التي تحاكي كل لحظة من المحاكاة بدقة وواقعية. عندما يتعلق الأمر بالأداء، هذه هي القمة—لا شيء آخر يقترب منها. استعد لتجربة غامرة ستجعلك تشعر وكأنك داخل السيارة نفسها!\n\nستة محاور — درجات الحركة (DOF)\n\nالانحناء الطولي\nالانحناء الجانبي\nالدوران\nالتوجيه\nالانزلاق\nالتموج الجانبي\nالحركة الأمامية\n\nالخصائص\n\nدرجات الحركة (محور): 6 DOF (الرفع، الدوران، التوجيه، الانزلاق الأمامي، التموج الجانبي، الحركة الأمامية)\nحركة كاملة للمنصة: نعم\nنطاق الحركة: 17°\nالسرعة: 50 سم/ث (86°/ث)\nعزم الدوران: 28 نيوتن متر',
      images: [
        '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
        '/lovable-uploads/01fa237c-fab2-4b52-857c-27687a795b4a.png',
        '/lovable-uploads/46c3963d-77ae-4bc3-b544-e73cc00ee8f6.png'
      ],
      features: [
        'ستة محاور كاملة من الحركة',
        'تجربة محاكاة متكاملة ومتقدمة',
        'أعلى مستويات الواقعية',
        'تقنية حركة احترافية'
      ]
    }
  ];

  const racingSeats = [
    // Racing Seats
    {
      id: 'gttrack',
      name: 'مقعد محاكاة السباق Next Level Racing GTTrack',
      category: 'مقاعد السباق',
      description: 'مقعد محاكاة السباق المتطور من Next Level Racing يوفر تجربة قيادة واقعية ومريحة للغاية مع تصميم احترافي يناسب جلسات السباق الطويلة',
      images: [
        '/lovable-uploads/27bfe8d3-28d1-4885-a5fc-55961e9c05dc.png',
        '/lovable-uploads/dd135d17-4bde-4784-bd55-0c0b4dc2bce1.png',
        '/lovable-uploads/34afe112-261d-41ea-86c5-46cad450fe89.png'
      ],
      features: [
        'تصميم مريح ومتطور',
        'قابل للتعديل بالكامل',
        'مواد عالية الجودة',
        'متوافق مع جميع أنواع المحاكيات'
      ]
    },
    {
      id: 'elite-seat',
      name: 'مقعد ELITE محاكاة السباقات نيكست ليفل ريسينج',
      category: 'مقاعد السباق',
      description: 'مقعد ELITE المتميز يوفر أقصى مستويات الراحة والأداء لمحبي محاكاة السباق مع تقنيات متقدمة وتصميم أنيق',
      images: [
        '/lovable-uploads/157b2ab3-b1f0-4f57-b008-3a05b52e07d4.png',
        '/lovable-uploads/8b02efed-9ed8-4744-933f-ba7babbf0877.png'
      ],
      features: [
        'تصميم ELITE متميز',
        'راحة فائقة للجلسات الطويلة',
        'مواد فاخرة عالية الجودة',
        'نظام تعديل متقدم'
      ]
    }
  ];

  const displayStands = [
    // Display Stands
    {
      id: 'thermaltake-triple',
      name: 'حامل شاشات سباق ثلاثي من Thermaltake',
      category: 'حوامل الشاشات',
      description: 'احصل على تجربة سباق غامرة واحترافية مع حامل الشاشات الثلاثي من Thermaltake، المصمم خصيصاً لمحبي محاكاة السباق والألعاب الاحترافية',
      images: [
        '/lovable-uploads/0207fd82-32d1-4749-b1ae-52d182ac2990.png',
        '/lovable-uploads/a1696c55-9b57-46ab-b849-ec634115ebbf.png'
      ],
      features: [
        'دعم ثلاث شاشات بأحجام متنوعة',
        'تصميم قوي ومتين من Thermaltake',
        'سهولة التركيب والتعديل',
        'مثالي لمحاكاة السباق الاحترافية'
      ]
    },
    {
      id: 'quad-monitor-stand',
      name: 'حامل شاشة مستقل رباعي',
      category: 'حوامل الشاشات',
      description: 'دعم أربع شاشات: يدعم حتى 4 شاشات بحجم يتراوح بين 21 إلى 43 بوصة، ليمنحك عرضاً بانورامياً مذهلاً وتجربة غامرة لا مثيل لها',
      images: [
        '/lovable-uploads/27b513c9-7cf3-4ace-a721-aae6276e2b5a.png',
        '/lovable-uploads/605d2f9a-cb32-48b2-bf78-750bb2df2435.png',
        '/lovable-uploads/ef128616-a7d6-49d7-b06c-638d45cea322.png'
      ],
      features: [
        'دعم 4 شاشات (21-43 بوصة)',
        'عرض بانورامي مذهل',
        'تصميم مستقل قوي',
        'قابلية تعديل شاملة'
      ]
    },
    {
      id: 'next-level-triple',
      name: 'حامل شاشة ثلاثي من Next Level Racing',
      category: 'حوامل الشاشات',
      description: 'ارتقِ بتجربة اللعب والمحاكاة إلى مستوى احترافي مع حامل الشاشات الثلاثية من Next Level Racing، المصمم لتوفير أفضل زوايا المشاهدة',
      images: [
        '/lovable-uploads/41ed94f9-93b7-46e0-b9cc-4f4f7948af05.png',
        '/lovable-uploads/a4fcbc50-690a-4e0b-8ac5-324f4d98b2b1.png',
        '/lovable-uploads/9c257218-9139-4d76-9952-337df7ded453.png',
        '/lovable-uploads/32535fa5-b196-4c48-8d63-fada565c5bff.png'
      ],
      features: [
        'تصميم احترافي من Next Level Racing',
        'دعم ثلاث شاشات بزوايا مثالية',
        'جودة تصنيع عالية',
        'متوافق مع معظم أحجام الشاشات'
      ]
    }
  ];

  const accessories = [
    // Accessories
    {
      id: 'dpofirs-handbrake',
      name: 'جلنط Dpofirs 64',
      category: 'الإكسسوارات',
      description: 'إذا كنت من محبي ألعاب السباق وتبحث عن تجربة قيادة واقعية، جلنط Dpofirs USB هو الخيار المثالي لك. يتميز هذا الجلنط بتصميم متين وتقنيات حديثة تمنحك تحكمًا دقيقًا وأداءً موثوقًا.',
      images: [
        '/lovable-uploads/ee8a1ff1-49ea-459e-8f54-3c7ac41e3af7.png'
      ],
      features: [
        'تصميم متين وقوي',
        'تقنيات حديثة للتحكم الدقيق',
        'اتصال USB موثوق',
        'مثالي لمحبي ألعاب السباق'
      ]
    },
    {
      id: 'logitech-g923',
      name: 'دركسون ودواسات سباق G923',
      category: 'الإكسسوارات',
      description: 'لوجيتيك جي 923 هي عجلة سباق عالية الأداء تحدث ثورة في تجربة السباقات. تمت إعادة تصميم جي 923 لدعم نظام التغذية الراجعة الذي يغير قواعد اللعبة، وهو يتميز بخاصية ترو فورس، وهي الجيل الجديد من التقنيات.',
      images: [
        '/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png',
        '/lovable-uploads/46bbcc78-2b7c-4a7e-ac1b-a2071f5973b0.png'
      ],
      features: [
        'تقنية ترو فورس المتقدمة',
        'نظام تغذية راجعة ثوري',
        'عجلة سباق عالية الأداء',
        'دواسات احترافية مضمنة'
      ]
    },
    {
      id: 'thrustmaster-t128',
      name: 'Thrustmaster T128 دركسون قير دواسات من ثرست ماستر',
      category: 'الإكسسوارات',
      description: 'عجلة قيادة متطورة من Thrustmaster تجمع بين الأداء العالي والتصميم المريح، مصممة لتوفير تجربة سباق واقعية وممتعة للمبتدئين والمحترفين على حد سواء.',
      images: [
        '/lovable-uploads/993ba08d-0c0c-4cd1-8f7c-a7ba534ba117.png',
        '/lovable-uploads/71467054-f8aa-40a6-b655-631ae142a971.png'
      ],
      features: [
        'تصميم مريح ومتطور',
        'قير ودواسات احترافية',
        'أداء عالي من Thrustmaster',
        'مناسب للمبتدئين والمحترفين'
      ]
    },
    {
      id: 'thrustmaster-th8a',
      name: 'قير Thrustmaster TH8A',
      category: 'الإكسسوارات',
      description: 'ارتقِ بقيادة السباقات لديك مع Thrustmaster TH8A Add-On Shifter، المصمم لمن يبحث عن أداء احترافي وتجربة قيادة واقعية بجودة عالية.',
      images: [
        '/lovable-uploads/f621ba05-60e4-461e-8be6-83383aef11c9.png'
      ],
      features: [
        'قير احترافي من Thrustmaster',
        'تجربة قيادة واقعية',
        'جودة تصنيع عالية',
        'سهولة التركيب والاستخدام'
      ]
    },
    {
      id: 'broleo-handbrake',
      name: 'جلنط BROLEO USB – جودة ممتازة وسهولة تشغيل',
      category: 'الإكسسوارات',
      description: 'إذا كنت من محبي ألعاب السباقات وتريد تحكم أدق وتجربة واقعية، جلنط BROLEO هو خيارك المثالي. بتصميمه القوي وأدائه العالي، هذا الجلنط مصمم ليعطيك إحساس قيادة حقيقي ويعزز من تجربتك.',
      images: [
        '/lovable-uploads/2560f5ed-f4bc-4bcc-b41c-b57b6fedeb1a.png',
        '/lovable-uploads/a40f44e2-5571-4ab7-942a-087f3cd74281.png'
      ],
      features: [
        'جودة تصنيع ممتازة',
        'سهولة التشغيل والتركيب',
        'تحكم دقيق وواقعي',
        'اتصال USB موثوق'
      ]
    }
  ];

  const allProducts = [...simulators, ...racingSeats, ...displayStands, ...accessories];
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-deep-black text-white font-cairo flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">المنتج غير موجود</h1>
          <Link to="/products" className="text-racing-red hover:underline">
            العودة للمنتجات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black text-white font-cairo">
      <div className="container mx-auto px-6 py-8">
        <Link to="/products" className="inline-flex items-center text-racing-red hover:text-white transition-colors mb-8">
          <ArrowRight className="ml-2 h-5 w-5" />
          العودة للمنتجات
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-charcoal">
              <img 
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-charcoal">
                    <img 
                      src={image}
                      alt={`${product.name} - ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="font-cairo font-bold text-4xl text-white">
              {product.name}
            </h1>
            
            <div className="text-muted-grey text-lg leading-relaxed whitespace-pre-line">
              {product.description}
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-racing-red/20 to-transparent p-6 rounded-lg border border-racing-red/30">
              <h3 className="font-cairo font-semibold text-racing-red text-xl mb-4">
                المواصفات الرئيسية
              </h3>
              <ul className="space-y-2 text-white">
                {product.features.map((feature, index) => (
                  <li key={index} className="font-cairo">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-charcoal/80 backdrop-blur-sm border border-light-grey/20 rounded-xl p-6">
              <h3 className="font-cairo font-bold text-2xl text-white mb-4">
                تواصل معنا للحصول على هذا المنتج
              </h3>
              <p className="text-muted-grey mb-6">
                للاستفسار عن الأسعار والتوفر، تواصل معنا مباشرة
              </p>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-cairo flex items-center justify-center gap-2"
                onClick={() => window.open('https://wa.me/9660594196930', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                تواصل عبر الواتساب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
