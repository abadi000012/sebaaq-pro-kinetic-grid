
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AdvantageSection from '@/components/AdvantageSection';
import ProductSection from '@/components/ProductSection';
import VideoSection from '@/components/VideoSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-black">
      <HeroSection />
      <AdvantageSection />
      <ProductSection />
      <VideoSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
