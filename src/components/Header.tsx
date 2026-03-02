import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">Kling</div>
      <nav>
        <a href="#" className="mx-2">Home</a>
        <a href="#" className="mx-2">Showcase</a>
        <a href="#" className="mx-2">FAQ</a>
      </nav>
      <button className="px-4 py-2 bg-blue-500 rounded">Join Waitlist</button>
    </header>
  );
};

export default Header;
