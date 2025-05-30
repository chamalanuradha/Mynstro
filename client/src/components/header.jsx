import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/search";
import { useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate();

   const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="bg-gray-100 text-[#093A3E] py-4 sticky">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Site Name */}
        <Link to={'/'} className="text-3xl font-bold lg:text-3xl sm:text-xl">
          <span className="text-[#093A3E]">My</span>
          <span className="text-[#F4A261]">nstro</span>
        </Link>

        {/* Search Bar */}
        <div className="relative flex-grow mx-4">
         <Search/>
        </div>

        {/* Login & Cart */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#F4A261] font-bold hover:bg-[#f49061] rounded-md cursor-pointer"  onClick={handleLogin}>Login</button>
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
