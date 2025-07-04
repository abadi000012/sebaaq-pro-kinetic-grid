
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-sm border-b border-light-grey/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-cairo font-bold text-2xl text-white">
            سيباق برو
          </div>
          
          <div className="flex gap-6">
            <Link 
              to="/about" 
              className="font-cairo text-white hover:text-racing-red transition-colors duration-300 font-medium"
            >
              من نحن
            </Link>
            <Link 
              to="/services" 
              className="font-cairo text-white hover:text-racing-red transition-colors duration-300 font-medium"
            >
              خدماتنا
            </Link>
            <Link 
              to="/products" 
              className="font-cairo text-white hover:text-racing-red transition-colors duration-300 font-medium"
            >
              المنتجات
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
