import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-500">
          &copy; 2024 AI News. All rights reserved.
        </p>
        <div className="space-x-4">
          <a href="#privacy" className="text-gray-700 hover:text-black">
            Privacy
          </a>
          <a href="#terms" className="text-gray-700 hover:text-black">
            Terms
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
