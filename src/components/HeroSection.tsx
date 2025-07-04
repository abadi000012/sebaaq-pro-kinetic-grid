
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

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
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
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
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-exo font-extrabold text-6xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-r from-white via-light-grey to-white bg-clip-text text-transparent leading-tight">
            Unleash Your Inner Champion
          </h1>
          
          <h2 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl mb-12 text-light-grey max-w-4xl mx-auto leading-relaxed">
            Experience Unrivaled Precision. Feel the Future of Racing.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="racing-glow-button animate-glow">
              Discover Simulators
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-deep-black px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300"
            >
              Watch the Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent" />
    </section>
  );
};

export default HeroSection;
