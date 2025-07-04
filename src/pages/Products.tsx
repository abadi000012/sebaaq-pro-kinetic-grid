
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Products = () => {
  const simulators = [
    {
      id: 'a2-pro',
      name: 'محاكاة القيادة A2 Pro',
      description: 'ابدأ مغامرتك في عالم المحاكاة مع A2 PRO، المنصة الحركية الكاملة التي ترتقي بتجربة المحاكاة إلى مستويات جديدة.',
      images: [
        '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
        '/lovable-uploads/9cccaa1e-8c23-46fe-a7f1-7eefea6b28a6.png',
        '/lovable-uploads/3fb38e34-bc46-4944-ac37-a8431a401860.png',
        '/lovable-uploads/42c6104b-66aa-4fba-837c-b1b5fc18c871.png'
      ],
      price: 'اتصل للاستفسار',
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
      description: 'المنصة الحركية المثالية لمن يبحث عن محاكاة واقعية، حيث توفر ثلاثة محاور من الحركة.',
      images: [
        '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
        '/lovable-uploads/82ffd425-0c66-4075-a310-489bfe8b8cfa.png',
        '/lovable-uploads/eedd9259-15bd-4f14-84a6-1f27cb1cc168.png'
      ],
      price: 'اتصل للاستفسار',
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
      description: 'تجربة محاكاة القيادة المتكامل A6 SEBAAQ ذو ال6 محاور!',
      images: [
        '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
        '/lovable-uploads/01fa237c-fab2-4b52-857c-27687a795b4a.png',
        '/lovable-uploads/46c3963d-77ae-4bc3-b544-e73cc00ee8f6.png'
      ],
      price: 'اتصل للاستفسار',
      features: [
        '• ستة محاور كاملة من الحركة',
        '• تجربة محاكاة متكاملة ومتقدمة',
        '• أعلى مستويات الواقعية',
        '• تقنية حركة احترافية'
      ]
    }
  ];

  const accessories = [
    {
      id: 'logitech-g923',
      name: 'دركسون ودواسات سباق G923',
      description: 'لوجيتيك جي 923 هي عجلة سباق عالية الأداء تحدث ثورة في تجربة السباقات.',
      images: ['/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png'],
      price: 'اتصل للاستفسار'
    },
    {
      id: 'thrustmaster-t128',
      name: 'Thrustmaster T128 دركسون قير دواسات',
      description: 'عجلة قيادة متطورة من Thrustmaster تجمع بين الأداء العالي والتصميم المريح.',
      images: ['/lovable-uploads/993ba08d-0c0c-4cd1-8f7c-a7ba534ba117.png'],
      price: 'اتصل للاستفسار'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Header */}
      <header className="bg-charcoal/80 backdrop-blur-sm border-b border-racing-red/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white hover:text-racing-red transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-cairo font-semibold">العودة للرئيسية</span>
            </Link>
            <h1 className="font-cairo bold-text-outline text-2xl md:text-3xl text-white">
              منتجاتنا
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Racing Simulators Section */}
        <section className="mb-20">
          <h2 className="font-cairo bold-text-outline text-4xl md:text-5xl text-racing-red text-center mb-12">
            محاكيات السباق
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {simulators.map((simulator) => (
              <div key={simulator.id} className="premium-card group">
                <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={simulator.images[0]}
                    alt={simulator.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-cairo font-bold text-xl text-white mb-4">
                  {simulator.name}
                </h3>
                <p className="font-cairo text-muted-grey text-sm mb-6 leading-relaxed">
                  {simulator.description}
                </p>
                <div className="space-y-2 mb-6">
                  {simulator.features.map((feature, idx) => (
                    <p key={idx} className="font-cairo text-light-grey text-sm">
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-cairo font-bold text-racing-red">
                    {simulator.price}
                  </span>
                  <button className="racing-glow-button text-sm px-4 py-2">
                    تواصل معنا
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accessories Section */}
        <section>
          <h2 className="font-cairo bold-text-outline text-3xl md:text-4xl text-racing-red text-center mb-12">
            الإكسسوارات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((accessory) => (
              <div key={accessory.id} className="premium-card group">
                <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={accessory.images[0]}
                    alt={accessory.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-cairo font-bold text-lg text-white mb-4">
                  {accessory.name}
                </h3>
                <p className="font-cairo text-muted-grey text-sm mb-6 leading-relaxed">
                  {accessory.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-cairo font-bold text-racing-red">
                    {accessory.price}
                  </span>
                  <button className="racing-glow-button text-sm px-4 py-2">
                    تواصل معنا
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
