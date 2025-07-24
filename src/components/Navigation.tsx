
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-sm border-b border-light-grey/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-cairo font-bold text-2xl text-white">
            {language === 'ar' ? 'سيباق برو' : 'SeBaaq Pro'}
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/about" 
              className="font-cairo text-white hover:text-racing-red transition-colors duration-300 font-medium"
            >
              {language === 'ar' ? 'من نحن' : 'About Us'}
            </Link>
            <Link 
              to="/services" 
              className="font-cairo text-white hover:text-racing-red transition-colors duration-300 font-medium"
            >
              {language === 'ar' ? 'خدماتنا' : 'Services'}
            </Link>
            <Link 
              to="/products" 
              className="font-cairo text-white hover:text-racing-red transition-colors duration-300 font-medium"
            >
              {language === 'ar' ? 'المنتجات' : 'Products'}
            </Link>
            
            <Button 
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-cairo font-medium"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
