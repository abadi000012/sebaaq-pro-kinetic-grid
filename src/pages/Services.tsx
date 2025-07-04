
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Truck, Shield, Headphones, Sparkles } from 'lucide-react';

const Services = () => {
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
              خدماتنا
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="text-center mb-16">
          <h2 className="font-cairo hero-title-outline text-4xl md:text-5xl text-racing-red mb-8">
            ايش نقدم في سباق برو؟
          </h2>
          <p className="font-cairo bold-text-outline text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto">
            نقدم لكم مجموعة متكاملة من الخدمات اللي تخلي تجربة الحصول على أجهزة المحاكاة الاحترافية سهلة وممتعة. 
            هدفنا نوصلكم لأقوى تجارب الواقع الافتراضي والمحاكاة.
          </p>
        </section>

        {/* Services Grid */}
        <div className="space-y-12">
          {/* Service 1 */}
          <div className="premium-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Cpu className="w-16 h-16 text-racing-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-4">
                  1. توفير أحدث أجهزة المحاكاة
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• إيش نقدم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      نوفر لكم أحدث وأقوى موديلات أجهزة المحاكاة اللي تضمن لكم أعلى مستويات الواقعية في القيادة، الطيران، وغيرها من التجارب.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• كيف نشتغل:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      نختار لكم المنتجات بعناية فائقة، ونضمن إنها أصلية وعالية الجودة عشان تستمتعون بأفضل أداء.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• الفائدة لكم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      تحصلون على أجهزة محاكاة متطورة ومضمونة، وتعيشون تجارب واقعية ومثيرة كأنكم داخل اللعبة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="premium-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Truck className="w-16 h-16 text-racing-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-4">
                  2. سهولة الطلب والتوصيل المباشر
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• إيش نقدم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      عملية شراء بسيطة ومريحة، مع توصيل مباشر لمنتجات المحاكاة لباب بيتكم في أي مكان بالسعودية.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• كيف نشتغل:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      كل اللي عليكم تختارون المنتج من متجرنا، وتكملون خطوات الطلب، والباقي علينا.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• الفائدة لكم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      توفير للوقت والجهد، بدون ما تشيلون هم الشحن الدولي أو الإجراءات المعقدة. المنتج يوصلكم وأنتم مرتاحين.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="premium-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Shield className="w-16 h-16 text-racing-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-4">
                  3. منتجات مختارة بعناية وجودة مضمونة
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• إيش نقدم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      نضمن لكم جودة كل منتج نعرضه، وكلها أصلية ومختارة بعناية فائقة لتلبية أعلى المعايير.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• كيف نشتغل:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      نركز على توفير المنتجات اللي عليها طلب كبير وتجارب المستخدمين عنها ممتازة، عشان نضمن رضاكم.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• الفائدة لكم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      ثقة تامة في جودة المنتج اللي تشترونه، وراحة بال إنكم استثمرتوا في شي يستاهل.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="premium-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Headphones className="w-16 h-16 text-racing-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-4">
                  4. دعم ومتابعة مستمرة
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• إيش نقدم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      فريق دعم عملاء جاهز للإجابة على استفساراتكم وتقديم المساعدة في كل خطوة، من قبل الشراء وحتى بعد استلام المنتج.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• كيف نشتغل:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      نوفر قنوات تواصل متعددة (مثل الواتساب أو الإيميل) عشان نضمن راحتكم وسرعة الرد.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• الفائدة لكم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      ما تشيلون هم أي سؤال أو مشكلة، فريقنا موجود عشان يساعدكم ويخلي تجربتكم سلسة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="premium-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Sparkles className="w-16 h-16 text-racing-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-cairo bold-text-outline text-2xl text-racing-red mb-4">
                  5. تجربة تسوق مريحة وممتعة
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• إيش نقدم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      منصة تسوق سهلة الاستخدام وتصميم جذاب يخلي عملية البحث عن المنتج والطلب ممتعة.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• كيف نشتغل:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      نصمم متجرنا بحيث يكون واضح وسهل التنقل، مع صور ومعلومات واضحة عن كل منتج.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-white mb-2">• الفائدة لكم:</h4>
                    <p className="font-cairo text-muted-grey leading-relaxed">
                      تستمتعون بتجربة تسوق مريحة، وتلاقون اللي تبونه بسرعة وبدون أي تعقيد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
