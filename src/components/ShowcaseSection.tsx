import React from 'react';

const videos = [
  "https://via.placeholder.com/640x360_1.mp4",
  "https://via.placeholder.com/640x360_2.mp4",
  "https://via.placeholder.com/640x360_3.mp4",
  "https://via.placeholder.com/640x360_4.mp4",
  "https://via.placeholder.com/640x360_5.mp4",
  "https://via.placeholder.com/640x360_6.mp4",
];

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        {videos.map((videoSrc, index) => (
          <video 
            key={index} 
            src={videoSrc} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full rounded-lg"
          ></video>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
