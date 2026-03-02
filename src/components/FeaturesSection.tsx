'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  useEffect(() => {
    gsap.fromTo('.feature-card', 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.feature-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="feature-card p-8 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Feature One</h3>
          <p>Description of feature one.</p>
        </div>
        <div className="feature-card p-8 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
          <p>Description of feature two.</p>
        </div>
        <div className="feature-card p-8 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
          <p>Description of feature three.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
