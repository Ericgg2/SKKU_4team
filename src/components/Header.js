import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-lg font-bold">AI News</div>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#news" className="text-gray-700 hover:text-black">
            News
          </a>
          <a href="#ai-tech" className="text-gray-700 hover:text-black">
            AI Tech
          </a>
          <a href="#ai-ethics" className="text-gray-700 hover:text-black">
            AI Ethics
          </a>
          <a href="#about" className="text-gray-700 hover:text-black">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
