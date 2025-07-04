
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, Zap } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-deep-black text-white font-cairo">
      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-racing-red hover:text-white transition-colors mb-8">
          <ArrowRight className="ml-2 h-5 w-5" />
          العودة للرئيسية
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-cairo font-extrabold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-light-grey to-white bg-clip-text text-transparent">
            من نحن
          </h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-racing-red mb-6">
              مرحباً بكم في سباق برو!
            </h2>
            <p className="text-lg md:text-xl text-light-grey leading-relaxed">
              احنا في "سباق برو" شغفنا نوصل لكم أحدث وأقوى تجارب الواقع الافتراضي، خصوصاً مع منتجات المحاكاة الرهيبة. 
              ندري إنكم تدورون على شي يغير مفهوم اللعب والترفيه، وعشان كذا جبنالكم هذي المنتجات المتطورة مباشرة لبيوتكم في السعودية، وبكل سهولة وراحة.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl text-center mb-12 text-racing-red">
            إيش نقدم؟
          </h2>
          <p className="text-center text-light-grey text-lg mb-8 max-w-3xl mx-auto">
            في "سباق برو"، تخصصنا في توفير منتجات المحاكاة اللي تخليكم تعيشون التجربة كأنها حقيقة. نقدم لكم:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="premium-card">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-racing-red p-3 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">أجهزة المحاكاة الأصلية</h3>
                  <p className="text-light-grey">نوفر لكم أحدث موديلات أجهزة المحاكاة، اللي تضمن لكم أعلى مستويات الواقعية في القيادة والطيران وغيرها.</p>
                </div>
              </div>
            </div>

            <div className="premium-card">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-racing-red p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">سهولة الطلب والتوصيل</h3>
                  <p className="text-light-grey">عملية الشراء عندنا بسيطة، والمنتجات توصلكم مباشرة لباب بيتكم في أي مكان بالسعودية.</p>
                </div>
              </div>
            </div>

            <div className="premium-card">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-racing-red p-3 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">منتجات مختارة بعناية</h3>
                  <p className="text-light-grey">نضمن لكم جودة المنتجات اللي نوفرها، وكلها أصلية ومضمونة.</p>
                </div>
              </div>
            </div>

            <div className="premium-card">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-racing-red p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">تجربة تسوق مريحة</h3>
                  <p className="text-light-grey">كل اللي عليكم تختارون المنتج اللي تبونه، والباقي علينا.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <div className="premium-card text-center">
            <h3 className="font-bold text-2xl mb-6 text-racing-red">رؤيتنا</h3>
            <p className="text-light-grey leading-relaxed">
              نطمح نكون الوجهة الأولى في السعودية لكل مين يدور على تجارب الواقع الافتراضي والمحاكاة الاحترافية. 
              هدفنا إننا نغير طريقة استمتاعكم بالألعاب والمحاكاة، ونخلي أحدث التقنيات في متناول الجميع.
            </p>
          </div>

          {/* Mission */}
          <div className="premium-card text-center">
            <h3 className="font-bold text-2xl mb-6 text-racing-red">مهمتنا</h3>
            <p className="text-light-grey leading-relaxed">
              مهمتنا هي تبسيط عملية الحصول على منتجات المحاكاة المتطورة، وتقديمها لكم بأسرع وأسهل طريقة ممكنة. 
              نبغى نوفر لكم تجربة تسوق مميزة، ونضمن وصول المنتجات اللي تحلمون فيها بدون أي عوائق.
            </p>
          </div>

          {/* Values */}
          <div className="premium-card text-center">
            <h3 className="font-bold text-2xl mb-6 text-racing-red">قيمنا</h3>
            <ul className="text-light-grey leading-relaxed space-y-3 text-right">
              <li><strong className="text-white">الشغف بالتقنية:</strong> نحب كل شي جديد ومبتكر في عالم المحاكاة والواقع الافتراضي</li>
              <li><strong className="text-white">راحة العميل:</strong> نسعى دايمًا إن تجربة تسوقكم تكون سهلة وممتعة من البداية للنهاية</li>
              <li><strong className="text-white">الجودة والموثوقية:</strong> نلتزم بتوفير منتجات أصلية وعالية الجودة</li>
              <li><strong className="text-white">السرعة:</strong> نعمل بجد عشان توصلكم طلباتكم بأسرع وقت ممكن</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl text-center mb-12 text-racing-red">
            ليش تختار سباق برو؟
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="premium-card">
              <h4 className="font-bold text-lg mb-3 text-white">منتجات محاكاة بين يديك</h4>
              <p className="text-light-grey">احنا متخصصين في هذي المنتجات، يعني نضمن لك إنك تحصل على الشي اللي تبيه بالضبط.</p>
            </div>
            <div className="premium-card">
              <h4 className="font-bold text-lg mb-3 text-white">توصيل مباشر للسعودية</h4>
              <p className="text-light-grey">ما تحتاج تشيل هم الشحن الدولي، احنا نوصلها لك.</p>
            </div>
            <div className="premium-card">
              <h4 className="font-bold text-lg mb-3 text-white">سهولة الطلب</h4>
              <p className="text-light-grey">خطوات بسيطة وتكون طلبت منتجك.</p>
            </div>
            <div className="premium-card">
              <h4 className="font-bold text-lg mb-3 text-white">دعم ومتابعة</h4>
              <p className="text-light-grey">فريقنا موجود عشان يجاوب على استفساراتك ويساعدك في أي شي تحتاجه.</p>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl text-center mb-12 text-racing-red">
            كيف نشتغل؟
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="premium-card text-center">
              <div className="bg-racing-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h4 className="font-bold text-lg mb-3 text-white">تصفح منتجاتنا</h4>
              <p className="text-light-grey text-sm">شوف تشكيلتنا من أجهزة المحاكاة على متجرنا</p>
            </div>
            <div className="premium-card text-center">
              <div className="bg-racing-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h4 className="font-bold text-lg mb-3 text-white">اطلب بكل سهولة</h4>
              <p className="text-light-grey text-sm">اختر المنتج اللي يعجبك وكمل عملية الشراء</p>
            </div>
            <div className="premium-card text-center">
              <div className="bg-racing-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h4 className="font-bold text-lg mb-3 text-white">نوصلها لباب بيتك</h4>
              <p className="text-light-grey text-sm">احنا نتكفل بكل شي، والمنتج يوصلك مباشرة</p>
            </div>
            <div className="premium-card text-center">
              <div className="bg-racing-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h4 className="font-bold text-lg mb-3 text-white">استمتع بالتجربة</h4>
              <p className="text-light-grey text-sm">ركب جهازك وعيش تجربة المحاكاة اللي ما صارت!</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/products">
            <Button className="racing-glow-button text-lg px-12 py-4">
              استكشف منتجاتنا
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
