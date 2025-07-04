
import React from 'react';
import { Zap, Target, Gamepad2, Shield } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Hyper-Realistic Motion',
    description: 'Feel every g-force, every curb, every slip. Our motion platforms redefine immersion, connecting you directly to the asphalt.'
  },
  {
    icon: Target,
    title: 'Uncompromising Precision',
    description: 'Command every corner with industrial-grade controls: razor-sharp force feedback, linear pedals, and lightning-fast shifters.'
  },
  {
    icon: Gamepad2,
    title: 'Universal Compatibility',
    description: 'Seamless integration with your favorite racing titles on PC, PlayStation, and Xbox. Plug in, play, and dominate.'
  },
  {
    icon: Shield,
    title: 'Built for Endurance',
    description: 'Constructed from aerospace-grade materials, our rigs endure countless laps, ensuring unwavering performance for years.'
  }
];

const AdvantageSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-deep-black to-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-exo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            The SeBaaq Pro Advantage
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
            Where Precision Meets Passion. Engineered for excellence. Crafted for the ultimate race experience.
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
                  
                  <h3 className="font-montserrat font-semibold text-xl mb-4 text-white group-hover:text-racing-red transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="font-open-sans text-muted-grey leading-relaxed">
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
