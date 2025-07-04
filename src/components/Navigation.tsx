
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black/90 backdrop-blur-sm border-b border-racing-red/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-cairo font-bold text-2xl text-white">
            سباق برو
          </Link>
          
          <div className="flex space-x-6 space-x-reverse">
            <Link 
              to="/about" 
              className="text-white hover:text-racing-red transition-colors font-cairo font-semibold"
            >
              من نحن
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-racing-red transition-colors font-cairo font-semibold"
            >
              خدماتنا
            </Link>
            <Link 
              to="/products" 
              className="text-white hover:text-racing-red transition-colors font-cairo font-semibold"
            >
              منتجاتنا
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
