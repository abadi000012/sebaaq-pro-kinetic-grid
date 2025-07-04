
import React, { useEffect, useRef, useState } from 'react';

const videos = [
  {
    id: '_-pAH93xvM8',
    title: 'القوة الخام: إعادة تعريف محاكاة الرالي',
    description: 'انغمس في الإثارة الحقيقية لسباق الطرق الوعرة، واختبر كل قفزة وانزلاق.',
    featured: true
  },
  {
    id: '0Pb1po3080g',
    title: 'الحركة ثلاثية الأبعاد: درجات الحرية الثلاث',
    description: 'شاهد نظام الحركة المتطور الذي يحاكي جميع حركات السيارة الحقيقية',
    movements: ['PITCH - الميل الأمامي والخلفي', 'ROLL - الدوران الجانبي', 'YAW - الانحراف اليميني واليساري'],
    highlighted: true
  },
  {
    id: 'eu5iUfqZel8',
    title: 'مصمم للنصر: قابلية التعديل المريحة',
    description: 'شاهد سهولة التعديل المصممة لتحسين وضعية جلوسك لأقصى أداء وراحة.'
  }
];

const VideoSection = () => {
  const [visibleVideos, setVisibleVideos] = useState(new Set());
  const videoRefs = useRef([]);

  useEffect(() => {
    const observers = videoRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const iframe = entry.target.querySelector('iframe');
            if (entry.isIntersecting) {
              setVisibleVideos(prev => new Set([...prev, index]));
              if (iframe) {
                const src = iframe.src;
                if (!src.includes('autoplay=1')) {
                  iframe.src = src.replace('modestbranding=1', 'modestbranding=1&autoplay=1&mute=1');
                }
              }
            } else {
              setVisibleVideos(prev => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
              if (iframe) {
                const src = iframe.src;
                iframe.src = src.replace('&autoplay=1&mute=1', '');
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-charcoal via-deep-black to-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cairo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            اشهد الإثارة
          </h2>
          <p className="font-cairo text-lg md:text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
            انغمس أعمق في الواقعية وإمكانيات محاكيات سيباق برو.
          </p>
        </div>

        <div className="space-y-12">
          {videos.map((video, index) => (
            <div
              key={video.id}
              ref={el => videoRefs.current[index] = el}
              className={`animate-fade-in-up ${
                video.featured 
                  ? 'grid grid-cols-1 lg:grid-cols-5 gap-8 items-center' 
                  : video.highlighted
                  ? 'bg-gradient-to-r from-charcoal/50 to-racing-red/10 rounded-2xl p-8 border border-racing-red/20'
                  : 'grid grid-cols-1 lg:grid-cols-5 gap-8 items-center'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Video Player */}
              <div className={`${video.featured || !video.highlighted ? 'lg:col-span-3' : 'lg:col-span-3'} order-2 lg:order-1`}>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-light-grey/10">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&showinfo=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${video.featured || !video.highlighted ? 'lg:col-span-2' : 'lg:col-span-2'} order-1 lg:order-2 text-center lg:text-right`}>
                <h3 className="font-cairo font-bold text-2xl md:text-3xl mb-4 text-white leading-tight">
                  {video.title}
                </h3>
                
                <p className="font-cairo text-muted-grey text-lg leading-relaxed mb-6">
                  {video.description}
                </p>

                {/* 3-Axis Movement Indicators for highlighted video */}
                {video.highlighted && video.movements && (
                  <div className="space-y-3">
                    <h4 className="font-cairo font-semibold text-racing-red text-xl mb-4">
                      درجات الحرية الثلاث (3 DOF)
                    </h4>
                    {video.movements.map((movement, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-center lg:justify-end gap-3 p-3 bg-racing-red/10 rounded-lg border border-racing-red/20"
                      >
                        <span className="font-cairo text-white font-medium">
                          {movement}
                        </span>
                        <div className="w-2 h-2 bg-racing-red rounded-full animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Call to action for featured video */}
                {video.featured && (
                  <button className="racing-glow-button mt-6">
                    شاهد المزيد
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block bg-gradient-to-r from-racing-red/20 to-transparent p-8 rounded-2xl border border-racing-red/30">
            <h3 className="font-cairo font-bold text-2xl text-white mb-4">
              جرب الواقعية الكاملة
            </h3>
            <p className="font-cairo text-muted-grey mb-6">
              احجز جلسة تجريبية واكتشف الفرق بنفسك
            </p>
            <button className="racing-glow-button">
              احجز الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
