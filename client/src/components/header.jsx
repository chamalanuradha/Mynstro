import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';  

function Header() {

  const handleSearchClick = () => {
    alert("Search icon clicked!");
  };

  const [searchText, setSearchText] = useState("");

  return (
    <header className="bg-gray-100 text-[#093A3E] py-4 sticky">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Site Name */}
        <span className="text-3xl font-bold">
          <span className="text-[#093A3E]">My</span>
          <span className="text-[#F4A261]">nstro</span>
        </span>

        {/* Search Bar */}
        <div className="relative flex-grow mx-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder=" " 
            className="w-full px-4 py-2 pl-10 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
          />
          

          <TypeAnimation
            sequence={[
              'Search products...',
              1000, // Wait 1 second after typing
              'Find the best deals...',
              1000,
              'Shop top categories...',
              1000,
              'Discover amazing offers...',
              1000,
              'Explore trending items...',
              1000
            ]}
            speed={50} // Typing speed
            repeat={Infinity} // Make it loop infinitely
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#000000' }} 
          />
                   <FaSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F4A261] cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>

        {/* Login & Cart */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#F4A261] font-bold hover:bg-[#f49061] rounded-md">Login</button>
          <button className="relative">
            <FaShoppingCart className="text-3xl" />
            <span className="absolute -top-2 -right-2 bg-[#F4A261] text-xs text-white px-1.5 py-0.5 rounded-full">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
