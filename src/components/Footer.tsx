
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-charcoal">
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-cairo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            مستعد للهيمنة على الأسفلت الرقمي؟
          </h2>
          <p className="font-cairo font-light text-lg md:text-xl text-white mb-10 leading-relaxed">
            رحلتك إلى محاكاة السباق المثلى تبدأ مع سيباق برو.
          </p>
          
          <Button className="racing-glow-button mb-12">
            استكشف مجموعتنا الكاملة
          </Button>

          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto">
            <h3 className="font-cairo font-semibold text-xl mb-4 text-white">
              انضم إلى مجتمع سيباق برو
            </h3>
            <p className="font-cairo text-muted-grey mb-6">
              احصل على رؤى حصرية وإعلانات المنتجات الجديدة ونصائح احترافية مباشرة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-charcoal border-light-grey/30 text-white placeholder:text-muted-grey focus:border-racing-red"
              />
              <Button className="racing-glow-button">
                اشترك
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-charcoal py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-cairo font-semibold text-white mb-4">المنتجات</h4>
              <ul className="space-y-2 font-cairo text-muted-grey">
                <li><a href="#" className="hover:text-racing-red transition-colors">منصات الحركة</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">عجلات السباق</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">أنظمة الدواسات</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">المنصات الكاملة</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cairo font-semibold text-white mb-4">الدعم</h4>
              <ul className="space-y-2 font-cairo text-muted-grey">
                <li><a href="#" className="hover:text-racing-red transition-colors">اتصل بالدعم</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">الشحن والإرجاع</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">الضمان والرعاية</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cairo font-semibold text-white mb-4">الشركة</h4>
              <ul className="space-y-2 font-cairo text-muted-grey">
                <li><a href="#" className="hover:text-racing-red transition-colors">عن سيباق برو</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">الوظائف</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">الصحافة</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">الشركاء</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cairo font-semibold text-white mb-4">القانونية</h4>
              <ul className="space-y-2 font-cairo text-muted-grey">
                <li><a href="#" className="hover:text-racing-red transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">شروط الخدمة</a></li>
                <li><a href="#" className="hover:text-racing-red transition-colors">سياسة ملفات تعريف الارتباط</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-charcoal">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-muted-grey hover:text-racing-red transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-grey hover:text-racing-red transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-grey hover:text-racing-red transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-grey hover:text-racing-red transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            
            <p className="font-cairo text-muted-grey text-sm">
              © 2025 سيباق برو. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
