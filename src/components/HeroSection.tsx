'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headingRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    tl.fromTo(videoRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2 },
      "-=0.7"
    );

  }, []);

  return (
    <section ref={sectionRef} id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 ref={headingRef} className="text-7xl font-bold mb-4">Unleash Your Imagination</h1>
      <p ref={paragraphRef} className="text-xl mb-8">Cinematic AI video generation at your fingertips.</p>
      <video
        ref={videoRef}
        className="w-full max-w-4xl rounded-lg"
        src="https://via.placeholder.com/1280x720.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </section>
  );
};

export default HeroSection;
