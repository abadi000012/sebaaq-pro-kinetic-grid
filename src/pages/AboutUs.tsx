
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Heart, Zap } from 'lucide-react';

const AboutUs = () => {
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
              من نحن
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="text-center mb-16">
          <h2 className="font-cairo hero-title-outline text-4xl md:text-6xl text-racing-red mb-8">
            مرحباً بكم في سباق برو!
          </h2>
          <p className="font-cairo bold-text-outline text-xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            احنا في "سباق برو" شغفنا نوصل لكم أحدث وأقوى تجارب الواقع الافتراضي، خصوصاً مع منتجات المحاكاة الرهيبة.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h3 className="font-cairo bold-text-outline text-3xl md:text-4xl text-racing-red text-center mb-12">
            إيش نقدم؟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card">
              <h4 className="font-cairo bold-text-outline text-xl text-white mb-4">
                • أجهزة المحاكاة الأصلية
              </h4>
              <p className="font-cairo text-muted-grey leading-relaxed">
                نوفر لكم أحدث موديلات أجهزة المحاكاة، اللي تضمن لكم أعلى مستويات الواقعية في القيادة والطيران وغيرها.
              </p>
            </div>
            <div className="premium-card">
              <h4 className="font-cairo bold-text-outline text-xl text-white mb-4">
                • سهولة الطلب والتوصيل
              </h4>
              <p className="font-cairo text-muted-grey leading-relaxed">
                عملية الشراء عندنا بسيطة، والمنتجات توصلكم مباشرة لباب بيتكم في أي مكان بالسعودية.
              </p>
            </div>
            <div className="premium-card">
              <h4 className="font-cairo bold-text-outline text-xl text-white mb-4">
                • منتجات مختارة بعناية
              </h4>
              <p className="font-cairo text-muted-grey leading-relaxed">
                نضمن لكم جودة المنتجات اللي نوفرها، وكلها أصلية ومضمونة.
              </p>
            </div>
            <div className="premium-card">
              <h4 className="font-cairo bold-text-outline text-xl text-white mb-4">
                • تجربة تسوق مريحة
              </h4>
              <p className="font-cairo text-muted-grey leading-relaxed">
                كل اللي عليكم تختارون المنتج اللي تبونه، والباقي علينا.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="premium-card text-center">
              <Eye className="w-16 h-16 text-racing-red mx-auto mb-6" />
              <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-6">
                رؤيتنا
              </h3>
              <p className="font-cairo text-white leading-relaxed">
                • نطمح نكون الوجهة الأولى في السعودية لكل مين يدور على تجارب الواقع الافتراضي والمحاكاة الاحترافية
                <br />
                • هدفنا إننا نغير طريقة استمتاعكم بالألعاب والمحاكاة
                <br />
                • نخلي أحدث التقنيات في متناول الجميع
              </p>
            </div>
            <div className="premium-card text-center">
              <Target className="w-16 h-16 text-racing-red mx-auto mb-6" />
              <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-6">
                مهمتنا
              </h3>
              <p className="font-cairo text-white leading-relaxed">
                • تبسيط عملية الحصول على منتجات المحاكاة المتطورة
                <br />
                • تقديمها لكم بأسرع وأسهل طريقة ممكنة
                <br />
                • توفير تجربة تسوق مميزة
                <br />
                • ضمان وصول المنتجات اللي تحلمون فيها بدون أي عوائق
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h3 className="font-cairo bold-text-outline text-3xl md:text-4xl text-racing-red text-center mb-12">
            قيمنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="premium-card text-center">
              <Heart className="w-12 h-12 text-racing-red mx-auto mb-4" />
              <h4 className="font-cairo bold-text-outline text-lg text-white mb-3">
                الشغف بالتقنية
              </h4>
              <p className="font-cairo text-muted-grey text-sm">
                نحب كل شي جديد ومبتكر في عالم المحاكاة والواقع الافتراضي
              </p>
            </div>
            <div className="premium-card text-center">
              <Target className="w-12 h-12 text-racing-red mx-auto mb-4" />
              <h4 className="font-cairo bold-text-outline text-lg text-white mb-3">
                راحة العميل
              </h4>
              <p className="font-cairo text-muted-grey text-sm">
                نسعى دايمًا إن تجربة تسوقكم تكون سهلة وممتعة من البداية للنهاية
              </p>
            </div>
            <div className="premium-card text-center">
              <Eye className="w-12 h-12 text-racing-red mx-auto mb-4" />
              <h4 className="font-cairo bold-text-outline text-lg text-white mb-3">
                الجودة والموثوقية
              </h4>
              <p className="font-cairo text-muted-grey text-sm">
                نلتزم بتوفير منتجات أصلية وعالية الجودة
              </p>
            </div>
            <div className="premium-card text-center">
              <Zap className="w-12 h-12 text-racing-red mx-auto mb-4" />
              <h4 className="font-cairo bold-text-outline text-lg text-white mb-3">
                السرعة
              </h4>
              <p className="font-cairo text-muted-grey text-sm">
                نعمل بجد عشان توصلكم طلباتكم بأسرع وقت ممكن
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us & How We Work Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="premium-card">
            <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-8 text-center">
              ليش تختار سباق برو؟
            </h3>
            <ul className="space-y-4 font-cairo text-white">
              <li>• <span className="font-bold">منتجات محاكاة بين يديك:</span> احنا متخصصين في هذي المنتجات</li>
              <li>• <span className="font-bold">توصيل مباشر للسعودية:</span> ما تحتاج تشيل هم الشحن الدولي</li>
              <li>• <span className="font-bold">سهولة الطلب:</span> خطوات بسيطة وتكون طلبت منتجك</li>
              <li>• <span className="font-bold">دعم ومتابعة:</span> فريقنا موجود عشان يجاوب على استفساراتك</li>
            </ul>
          </div>
          <div className="premium-card">
            <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-8 text-center">
              كيف نشتغل؟
            </h3>
            <ul className="space-y-4 font-cairo text-white">
              <li>• <span className="font-bold">تصفح منتجاتنا:</span> شوف تشكيلتنا من أجهزة المحاكاة</li>
              <li>• <span className="font-bold">اطلب بكل سهولة:</span> اختر المنتج اللي يعجبك وكمل عملية الشراء</li>
              <li>• <span className="font-bold">نوصلها لباب بيتك:</span> احنا نتكفل بكل شي</li>
              <li>• <span className="font-bold">استمتع بالتجربة:</span> ركب جهازك وعيش تجربة المحاكاة اللي ما صارت!</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
