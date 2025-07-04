
import React from 'react';

const videos = [
  {
    id: '_-pAH93xvM8',
    title: 'Raw Power: Rally Simulation Redefined',
    description: 'Immerse yourself in the visceral excitement of off-road racing, experiencing every jump and slide.',
    featured: true
  },
  {
    id: '0Pb1po3080g',
    title: 'Precision in Motion: The Art of Lateral Feedback',
    description: 'Explore how our motion system precisely articulates, putting you in tune with every shift of weight.'
  },
  {
    id: 'eu5iUfqZel8',
    title: 'Tailored for Victory: Ergonomic Adjustability',
    description: 'See the effortless adjustability designed to optimize your seating position for peak performance and comfort.'
  }
];

const VideoSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-charcoal to-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-exo font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Witness The Thrill
          </h2>
          <p className="font-montserrat text-lg md:text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
            Dive deeper into the realism and capabilities of SeBaaq Pro simulators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`premium-card animate-fade-in-up ${video.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-white">
                {video.title}
              </h3>
              
              <p className="font-open-sans text-muted-grey leading-relaxed">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
