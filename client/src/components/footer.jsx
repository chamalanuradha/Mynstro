import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-black mt-10">
      <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-1">
        <p className="">© All Rights Reserved 2025</p>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <a href="#" className="text-[#093A3E] hover:text-[#F4A261] transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-[#093A3E] hover:text-[#F4A261] transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-[#093A3E] hover:text-[#F4A261] transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-[#093A3E] hover:text-[#F4A261] transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
