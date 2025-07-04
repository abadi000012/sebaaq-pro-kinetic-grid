
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const products = {
    'a2-pro': {
      name: 'محاكاة القيادة A2 Pro',
      category: 'محاكيات',
      image: '/lovable-uploads/ddaf6303-f564-47a1-a1df-12010f554d24.png',
      description: 'منصة حركية كاملة بمحورين من الحركة توفر تجربة قيادة واقعية ومثيرة. مصممة خصيصاً لمحبي ألعاب السباق والمحاكاة.',
      features: [
        'محورين من الحركة للواقعية القصوى',
        'متوافق مع جميع منصات الألعاب',
        'تصميم قوي ومتين',
        'سهولة التركيب والاستخدام'
      ]
    },
    'a3': {
      name: 'محاكاة القيادة A3',
      category: 'محاكيات',
      image: '/lovable-uploads/19893509-3604-4099-b51b-2f1aed6230b1.png',
      description: 'ثلاثة محاور من الحركة للتجربة الواقعية الكاملة. يوفر مستوى متقدم من الغمر والواقعية في تجربة القيادة.',
      features: [
        'ثلاثة محاور كاملة من الحركة',
        'نظام تحكم متطور',
        'جودة بناء عالية',
        'تجربة غمر فائقة'
      ]
    },
    'a6': {
      name: 'محاكاة القيادة A6',
      category: 'محاكيات',
      image: '/lovable-uploads/6f3ead03-2456-4bbd-b86b-8be60a2aac95.png',
      description: 'ستة محاور كاملة من الحركة للتجربة الأكثر واقعية. الخيار الأمثل للمحترفين ومحبي التجارب الفائقة.',
      features: [
        'ستة محاور كاملة من الحركة',
        'أعلى مستوى من الواقعية',
        'تقنيات متقدمة',
        'مناسب للاستخدام الاحترافي'
      ]
    },
    'gttrack': {
      name: 'مقعد GTTrack',
      category: 'مقاعد',
      image: '/lovable-uploads/27bfe8d3-28d1-4885-a5fc-55961e9c05dc.png',
      description: 'مقعد محاكاة احترافي مريح مصمم لساعات طويلة من اللعب. يوفر الدعم المثالي والراحة القصوى.',
      features: [
        'تصميم مريح وداعم',
        'قابل للتعديل بالكامل',
        'مواد عالية الجودة',
        'مناسب لجميع الأحجام'
      ]
    },
    'elite-seat': {
      name: 'مقعد ELITE',
      category: 'مقاعد',
      image: '/lovable-uploads/157b2ab3-b1f0-4f57-b008-3a05b52e07d4.png',
      description: 'مقعد فاخر عالي الجودة يجمع بين الأناقة والوظائف المتقدمة. مصنوع من أجود المواد لضمان الراحة والمتانة.',
      features: [
        'تصميم فاخر وأنيق',
        'مواد فائقة الجودة',
        'راحة لا مثيل لها',
        'متانة عالية'
      ]
    },
    'triple-monitor': {
      name: 'حامل شاشات ثلاثي',
      category: 'حوامل',
      image: '/lovable-uploads/0207fd82-32d1-4749-b1ae-52d182ac2990.png',
      description: 'حامل شاشات احترافي من Thermaltake يدعم ثلاث شاشات لتجربة بصرية شاملة ومذهلة.',
      features: [
        'يدعم ثلاث شاشات',
        'تصميم قوي ومستقر',
        'قابل للتعديل',
        'من علامة Thermaltake الموثوقة'
      ]
    },
    'g923': {
      name: 'دركسون G923',
      category: 'إكسسوارات',
      image: '/lovable-uploads/3f630a96-b71c-4fb8-9679-95c26c405d86.png',
      description: 'عجلة قيادة متطورة مع دواسات توفر تحكماً دقيقاً وتجربة قيادة حقيقية. مصممة للاعبين المحترفين.',
      features: [
        'تقنية Force Feedback متقدمة',
        'دواسات احترافية',
        'متوافق مع منصات متعددة',
        'تصميم واقعي ومتين'
      ]
    },
    'handbrake': {
      name: 'جلنط Dpofirs',
      category: 'إكسسوارات',
      image: '/lovable-uploads/ee8a1ff1-49ea-459e-8f54-3c7ac41e3af7.png',
      description: 'جلنط USB عالي الجودة يضيف المزيد من الواقعية لتجربة المحاكاة. مصنوع بدقة عالية لضمان الأداء المثالي.',
      features: [
        'اتصال USB سهل',
        'تصميم واقعي',
        'جودة بناء ممتازة',
        'استجابة دقيقة'
      ]
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-deep-black text-white flex items-center justify-center">
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
      <div className="container mx-auto px-6 py-12">
        <Link to="/products" className="inline-flex items-center text-racing-red hover:text-white transition-colors mb-8">
          <ArrowRight className="ml-2 h-5 w-5" />
          العودة للمنتجات
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="aspect-square rounded-xl overflow-hidden">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-racing-red/20 text-racing-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </span>
              <h1 className="font-cairo font-black text-4xl md:text-5xl mb-4 text-white hero-text-outline">
                {product.name}
              </h1>
              <p className="text-light-grey text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-2xl mb-4 text-racing-red">المميزات:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-light-grey">
                    <span className="w-2 h-2 bg-racing-red rounded-full ml-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="premium-card">
              <h3 className="font-bold text-2xl mb-6 text-racing-red text-center">تواصل معنا للاستفسار</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <Phone className="h-5 w-5 text-racing-red" />
                  <span className="text-white">+966 50 123 4567</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <Mail className="h-5 w-5 text-racing-red" />
                  <span className="text-white">info@sebaaqpro.com</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <MessageCircle className="h-5 w-5 text-racing-red" />
                  <span className="text-white">واتساب: +966 50 123 4567</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button className="racing-glow-button">
                  تواصل معنا الآن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
