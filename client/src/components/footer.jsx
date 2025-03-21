import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function footer() {
  return (
    <footer>
      <div className="container mx-auto p-4 text-center flex flex-col gap-1">
        
        <p className="">© All Right Reserved 2025</p>
        <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-300">
            <FaLinkedin />
          </a>
      </div>

      </div>
     
    </footer>
  );
}

export default footer;
