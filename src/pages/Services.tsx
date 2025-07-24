
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Star, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  const services = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "توفير أحدث أجهزة المحاكاة",
      description: "نوفر لكم أحدث وأقوى موديلات أجهزة المحاكاة اللي تضمن لكم أعلى مستويات الواقعية في القيادة، الطيران، وغيرها من التجارب.",
      details: [
        "نختار لكم المنتجات بعناية فائقة",
        "نضمن إنها أصلية وعالية الجودة",
        "تستمتعون بأفضل أداء",
        "تجارب واقعية ومثيرة كأنكم داخل اللعبة"
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "سهولة الطلب والتوصيل المباشر", 
      description: "عملية شراء بسيطة ومريحة، مع توصيل مباشر لمنتجات المحاكاة لباب بيتكم في أي مكان بالسعودية.",
      details: [
        "اختارون المنتج من متجرنا",
        "كملون خطوات الطلب البسيطة",
        "توفير للوقت والجهد",
        "المنتج يوصلكم وأنتم مرتاحين"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "منتجات مختارة بعناية وجودة مضمونة",
      description: "نضمن لكم جودة كل منتج نعرضه، وكلها أصلية ومختارة بعناية فائقة لتلبية أعلى المعايير.",
      details: [
        "منتجات عليها طلب كبير",
        "تجارب المستخدمين ممتازة",
        "ثقة تامة في الجودة",
        "راحة بال إنكم استثمرتوا في شي يستاهل"
      ]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "دعم ومتابعة مستمرة",
      description: "فريق دعم عملاء جاهز للإجابة على استفساراتكم وتقديم المساعدة في كل خطوة، من قبل الشراء وحتى بعد استلام المنتج.",
      details: [
        "قنوات تواصل متعددة (واتساب، إيميل)",
        "سرعة في الرد",
        "مساعدة في كل خطوة",
        "تجربة سلسة ومريحة"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "تجربة تسوق مريحة وممتعة",
      description: "منصة تسوق سهلة الاستخدام وتصميم جذاب يخلي عملية البحث عن المنتج والطلب ممتعة.",
      details: [
        "تصميم واضح وسهل التنقل",
        "صور ومعلومات واضحة",
        "تستمتعون بتجربة مريحة",
        "تلاقون اللي تبونه بسرعة"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-deep-black text-white font-cairo">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center text-racing-red hover:text-white transition-colors mb-8">
          <ArrowRight className="ml-2 h-5 w-5" />
          {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
        </Link>

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-cairo font-black text-5xl md:text-7xl mb-6 text-white hero-text-outline">
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-racing-red mb-6">
              {language === 'ar' ? 'ايش نقدم في سباق برو؟' : 'What do we offer at SeBaaq Pro?'}
            </h2>
            <p className="text-lg md:text-xl text-light-grey leading-relaxed">
              {language === 'ar' 
                ? 'في "سباق برو"، نقدم لكم مجموعة متكاملة من الخدمات اللي تخلي تجربة الحصول على أجهزة المحاكاة الاحترافية سهلة وممتعة. هدفنا نوصلكم لأقوى تجارب الواقع الافتراضي والمحاكاة، ونضمن لكم جودة المنتج وراحته في التوصيل.'
                : 'At SeBaaq Pro, we offer you a comprehensive set of services that make the experience of getting professional simulation devices easy and enjoyable. Our goal is to bring you the most powerful virtual reality and simulation experiences, and guarantee you product quality and delivery comfort.'
              }
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="premium-card text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-racing-red p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {service.icon}
              </div>
              
              <h3 className="font-cairo font-bold text-xl mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-light-grey mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center justify-start text-sm text-light-grey">
                    <span className="w-2 h-2 bg-racing-red rounded-full ml-3 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/products" 
              className="racing-glow-button"
            >
              {language === 'ar' ? 'استكشف منتجاتنا' : 'Explore Our Products'}
            </Link>
            <Link 
              to="/about" 
              className="bg-charcoal hover:bg-racing-red/20 border border-racing-red/30 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
            >
              {language === 'ar' ? 'من نحن' : 'About Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
