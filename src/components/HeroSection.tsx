import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-7xl font-bold mb-4">Unleash Your Imagination</h1>
      <p className="text-xl mb-8">Cinematic AI video generation at your fingertips.</p>
      <video
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
