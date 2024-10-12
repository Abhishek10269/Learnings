import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">JobPortal</a>
        <div>
          <a href="/jobs" className="text-white mx-4">Jobs</a>
          <a href="/about" className="text-white mx-4">About Us</a>
          <a href="/contact" className="text-white mx-4">Contact</a>
          <a href="/login" className="text-white mx-4">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
