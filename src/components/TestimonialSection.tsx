
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    text: "انخفضت أوقات لفاتي فوراً. الانغماس من سيباق برو لا مثيل له ببساطة. لعبة حقيقية تغير قواعد اللعبة لمحاكيات السباق الجدية.",
    author: "أ. خان",
    role: "متسابق محاكاة محترف"
  },
  {
    text: "جودة البناء رائعة، ومنصة الحركة سلسة. هذا ليس مجرد محاكي؛ إنه بُعد جديد للسباق.",
    author: "م. لي",
    role: "متحمس مخصص"
  },
  {
    text: "التركيب كان واضحاً، والأداء أذهلني. سيباق برو قدم أكثر من كل توقعاتي. أنصح به بشدة!",
    author: "ج. سميث",
    role: "مشجع سباق الواقع الافتراضي"
  }
];

const TestimonialSection = () => {
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
            اسمع زئير الرضا
          </h2>
          <p className="font-cairo text-lg md:text-xl text-muted-grey leading-relaxed">
            متسابقون حقيقيون. تقييمات حقيقية. تجارب لا مثيل لها.
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
