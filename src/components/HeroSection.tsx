
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particles for the background effect
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-black via-charcoal to-deep-black">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[100vw] min-h-[100vh] transform -translate-x-1/2 -translate-y-1/2 scale-150 opacity-40"
          src="https://www.youtube.com/embed/_-pAH93xvM8?autoplay=1&mute=1&loop=1&playlist=_-pAH93xvM8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0"
          title="SeBaaq Pro Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle animate-particle-float"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-cairo hero-title-outline text-6xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-r from-white via-light-grey to-white bg-clip-text text-transparent leading-tight">
            اطلق البطل الذي بداخلك
          </h1>
          
          <h2 className="font-cairo bold-text-outline text-xl md:text-2xl lg:text-3xl mb-12 text-light-grey max-w-4xl mx-auto leading-relaxed">
            اختبر دقة لا مثيل لها. اشعر بمستقبل السباق
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/products">
              <Button className="racing-glow-button animate-glow">
                اكتشف المحاكيات
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-deep-black px-8 py-4 rounded-lg font-cairo font-semibold text-lg transition-all duration-300"
            >
              شاهد الرحلة
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
