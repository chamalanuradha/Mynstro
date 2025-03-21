import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-gray-100 text-[#093A3E] py-4 sticky">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Site Name */}
        <span className="text-3xl font-bold">Mynstro</span>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login & Cart */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">Login</button>
          <button className="relative">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-2 py-0.5 rounded-full">
              2 
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
