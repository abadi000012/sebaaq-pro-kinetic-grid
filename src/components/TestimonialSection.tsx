
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const getTestimonials = (language) => [
  {
    text: language === 'ar' ? "انخفضت أوقات لفاتي فوراً. الانغماس من سيباق برو لا مثيل له ببساطة. لعبة حقيقية تغير قواعد اللعبة لمحاكيات السباق الجدية." : "My lap times improved instantly. The immersion from SeBaaq Pro is simply unmatched. A real game-changer for serious racing simulation.",
    author: language === 'ar' ? "أ. خان" : "A. Khan",
    role: language === 'ar' ? "متسابق محاكاة محترف" : "Professional Sim Racer"
  },
  {
    text: language === 'ar' ? "جودة البناء رائعة، ومنصة الحركة سلسة. هذا ليس مجرد محاكي؛ إنه بُعد جديد للسباق." : "The build quality is amazing, and the motion platform is so smooth. This isn't just a simulator; it's a new dimension of racing.",
    author: language === 'ar' ? "م. لي" : "M. Lee",
    role: language === 'ar' ? "متحمس مخصص" : "Dedicated Enthusiast"
  },
  {
    text: language === 'ar' ? "التركيب كان واضحاً، والأداء أذهلني. سيباق برو قدم أكثر من كل توقعاتي. أنصح به بشدة!" : "Setup was straightforward, and the performance blew me away. SeBaaq Pro delivered beyond all expectations. Highly recommend!",
    author: language === 'ar' ? "ج. سميث" : "J. Smith",
    role: language === 'ar' ? "مشجع سباق الواقع الافتراضي" : "VR Racing Fan"
  }
];

const TestimonialSection = () => {
  const { language } = useLanguage();
  const testimonials = getTestimonials(language);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-deep-black to-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cairo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            {language === 'ar' ? 'اسمع زئير الرضا' : 'Hear the Roar of Satisfaction'}
          </h2>
          <p className="font-cairo text-lg md:text-xl text-muted-grey leading-relaxed">
            {language === 'ar' ? 'متسابقون حقيقيون. تقييمات حقيقية. تجارب لا مثيل لها.' : 'Real racers. Real reviews. Unmatched experiences.'}
          </p>
        </div>

        <div className="relative">
          <div className="premium-card text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <div className="text-racing-red text-6xl mb-6 font-serif">"</div>
              <p className="font-cairo text-xl md:text-2xl text-white leading-relaxed mb-8">
                {testimonials[currentIndex].text}
              </p>
              <div className="font-cairo">
                <p className="font-semibold text-lg text-white">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-grey">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-racing-red' : 'bg-muted-grey'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
