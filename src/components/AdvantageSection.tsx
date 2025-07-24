
import React from 'react';
import { Zap, Target, Gamepad2, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getAdvantages = (language) => [
  {
    icon: Zap,
    title: language === 'ar' ? 'حركة فائقة الواقعية' : 'Ultra-Realistic Motion',
    description: language === 'ar' ? 'اشعر بكل قوة جي، كل حافة، كل انزلاق. منصات الحركة لدينا تعيد تعريف الانغماس، وتربطك مباشرة بالأسفلت.' : 'Feel every g-force, every edge, every slip. Our motion platforms redefine immersion, connecting you directly to the asphalt.'
  },
  {
    icon: Target,
    title: language === 'ar' ? 'دقة لا تقبل المساومة' : 'Uncompromising Precision',
    description: language === 'ar' ? 'تحكم في كل منعطف بضوابط عالية الجودة: ردود فعل قوية حادة، دواسات خطية، وناقلات سرعة فائقة.' : 'Master every turn with high-quality controls: sharp force feedback, linear pedals, and lightning-fast shifters.'
  },
  {
    icon: Gamepad2,
    title: language === 'ar' ? 'توافق شامل' : 'Universal Compatibility',
    description: language === 'ar' ? 'تكامل سلس مع ألعاب السباق المفضلة لديك على الكمبيوتر وبلايستيشن وإكسبوكس. اربط والعب وهيمن.' : 'Seamless integration with your favorite racing games on PC, PlayStation, and Xbox. Connect, play, and dominate.'
  },
  {
    icon: Shield,
    title: language === 'ar' ? 'مصنوع للتحمل' : 'Built to Last',
    description: language === 'ar' ? 'مصنوع من مواد بدرجة الطيران، منصاتنا تتحمل آلاف اللفات، مما يضمن الأداء الثابت لسنوات.' : 'Crafted from aerospace-grade materials, our platforms endure thousands of laps, ensuring consistent performance for years.'
  }
];

const AdvantageSection = () => {
  const { language } = useLanguage();
  const advantages = getAdvantages(language);
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-deep-black to-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cairo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            {language === 'ar' ? 'ميزة سيباق برو' : 'SeBaaq Pro Advantage'}
          </h2>
          <p className="font-cairo text-lg md:text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' ? 'حيث تلتقي الدقة بالشغف. مصمم للتميز. مصنوع لتجربة السباق المثلى.' : 'Where precision meets passion. Designed for excellence. Built for the ultimate racing experience.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="premium-card group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-racing-red/10 group-hover:bg-racing-red/20 transition-all duration-300">
                    <IconComponent 
                      className="w-8 h-8 text-racing-red group-hover:animate-pulse" 
                      strokeWidth={2}
                    />
                  </div>
                  
                  <h3 className="font-cairo font-semibold text-xl mb-4 text-white group-hover:text-racing-red transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="font-cairo text-muted-grey leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
