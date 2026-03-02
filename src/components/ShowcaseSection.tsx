import React from 'react';

const ShowcaseSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <video src="https://via.placeholder.com/640x360.mp4" autoPlay loop muted playsInline className="w-full rounded-lg"></video>
        <video src="https://via.placeholder.com/640x360.mp4" autoPlay loop muted playsInline className="w-full rounded-lg"></video>
        <video src="https://via.placeholder.com/640x360.mp4" autoPlay loop muted playsInline className="w-full rounded-lg"></video>
        <video src="https://via.placeholder.com/640x360.mp4" autoPlay loop muted playsInline className="w-full rounded-lg"></video>
        <video src="https://via.placeholder.com/640x360.mp4" autoPlay loop muted playsInline className="w-full rounded-lg"></video>
        <video src="https://via.placeholder.com/640x360.mp4" autoPlay loop muted playsInline className="w-full rounded-lg"></video>
      </div>
    </section>
  );
};

export default ShowcaseSection;
