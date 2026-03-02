'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  "https://via.placeholder.com/640x360_1.mp4",
  "https://via.placeholder.com/640x360_2.mp4",
  "https://via.placeholder.com/640x360_3.mp4",
  "https://via.placeholder.com/640x360_4.mp4",
  "https://via.placeholder.com/640x360_5.mp4",
  "https://via.placeholder.com/640x360_6.mp4",
];

const ShowcaseSection = () => {
  useEffect(() => {
    gsap.fromTo('.showcase-video',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.showcase-video',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, []);

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
            className="showcase-video w-full rounded-lg"
          ></video>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
