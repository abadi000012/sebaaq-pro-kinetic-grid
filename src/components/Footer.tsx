
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Youtube, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-charcoal">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-cairo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            مستعد للهيمنة على الأسفلت الرقمي؟
          </h2>
          <p className="font-cairo font-light text-lg md:text-xl text-white mb-10 leading-relaxed">
            رحلتك إلى محاكاة السباق المثلى تبدأ مع سيباق برو.
          </p>
          
          <Button 
            className="racing-glow-button mb-12"
            onClick={() => window.open('https://wa.me/9660594196930', '_blank')}
          >
            <MessageCircle className="ml-2 h-5 w-5" />
            تواصل معنا عبر الواتساب
          </Button>

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

      <div className="border-t border-charcoal py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-cairo font-semibold text-white mb-4">سياسة الاستبدال والإسترجاع</h4>
              <p className="font-cairo text-muted-grey text-sm leading-relaxed">
                لمن تطلب أي منتج، سواء كان جاهز أو بتخصيص خاص، يحق للعميل يسترجع قيمة المنتج بس لو المنتج ما اشتغل وما قدرنا احنا وياكم نصلحه ونخليه يشتغل. العميل ما يقدر يسترجع المبلغ لو بس ندم على الشراء. تكاليف الشحن (ذهاب وعودة) تكون على العميل. ولمن يرجع المنتج، مسؤولية تغليفه تكون على العميل.
              </p>
            </div>
            
            <div>
              <h4 className="font-cairo font-semibold text-white mb-4">تواصل معنا</h4>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-cairo flex items-center justify-center gap-2"
                onClick={() => window.open('https://wa.me/9660594196930', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                تواصل عبر الواتساب
              </Button>
            </div>
          </div>

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
