import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const simulators = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      category: 'محاكيات',
      image: '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
      description: 'ابدأ مغامرتك في عالم المحاكاة مع A2 PRO، المنصة الحركية الكاملة التي ترتقي بتجربة المحاكاة إلى مستويات جديدة. تتميز هذه المنصة بمحورين من الحركة: الانحناء الطولي والانحناء الجانبي، مما يوفر لك تجربة غامرة تجعلك تشعر بالتسارع، والتوقف، وقوة الجاذبية أثناء المنعطفات الحادة. ما يميز A2 PRO هو قدرتها على تحريك المقعد بالإضافة إلى جميع أدوات التحكم مثل عجلة القيادة، والدواسات، والعصا، والThrottle التي يتم تثبيتها مباشرة على المنصة الحركية. استمتع بتجربة مدهشة مع كل منعطف وكل حركة!'
    },
    {
      id: 'a3',
      name: 'محاكاة القيادة A3', 
      category: 'محاكيات',
      image: '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
      description: 'المنصة الحركية المثالية لمن يبحث عن محاكاة واقعية، حيث توفر ثلاثة محاور من الحركة يعطيك تجربة دقيقة للشعور في محاكاة القيادة، هذه المنصة ليست مجرد جهاز محاكاة عادي—إنها تجربة حقيقية تعكس كل تفاصيل التحكم في السيارة.'
    },
    {
      id: 'a6',
      name: 'محاكاة القيادة A6',
      category: 'محاكيات', 
      image: '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
      description: 'المنصة الحركية الاقوى التي تقدم جميع المحاور الستة للحركة لتجربة لا مثيل لها. هذه المنصة المتطورة والمدمجة قادرة على إعادة جميع الحركات الممكنة في جميع الاتجاهات. من الرفع والدوران والتوجيه إلى الانزلاق الأمامي والتموج الجانبي والحركة الأمامية، A6 هي المنصة المثالية التي تحاكي كل لحظة من المحاكاة بدقة وواقعية. عندما يتعلق الأمر بالأداء، هذه هي القمة—لا شيء آخر يقترب منها. استعد لتجربة غامرة ستجعلك تشعر وكأنك داخل السيارة نفسها!'
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
                عرض التفاصيل
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
          العودة للرئيسية
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-cairo font-black text-5xl md:text-7xl mb-6 text-white hero-text-outline">
            منتجاتنا
          </h1>
          <p className="text-lg md:text-xl text-light-grey leading-relaxed max-w-3xl mx-auto">
            اكتشف مجموعة محاكيات السباق المتطورة من سيباق برو
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {renderProductSection(simulators, 'محاكيات السباق')}
          {renderProductSection(seats, 'مقاعد السباق')}
          {renderProductSection(displayStands, 'حوامل الشاشات')}
          {renderProductSection(accessories, 'الإكسسوارات')}
        </div>
      </div>
    </div>
  );
};

export default Products;
