import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Search from "../components/search";

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-sm">
      
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
     
        <Link to="/" className="text-3xl font-bold">
          <span className="text-[#093A3E]">My</span>
          <span className="text-[#F4A261]">nstro</span>
        </Link>


        <div className="relative flex-grow mx-6 max-w-xl">
          <Search />
        </div>

  
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 bg-[#F4A261] font-bold hover:bg-[#f49061] rounded-md"
            onClick={handleLogin}
          >
            Sign In
          </button>

          <button className="relative">
            <FaShoppingCart className="text-3xl" />
            <span className="absolute -top-2 -right-2 bg-[#F4A261] text-xs text-white px-1.5 py-0.5 rounded-full">
              2
            </span>
          </button>
        </div>
      </div>

   
      <nav className="bg-gray-200">
        <div className="container mx-auto px-25 justify-center flex">
          <ul className="flex items-center gap-18 py-3 text-lg font-bold text-gray-700">
            <li>
              <Link to="/" className="hover:text-[#F4A261]">
                Home
              </Link>
            </li><li>
              <Link to="/beauty" className="hover:text-[#F4A261]">
                Beauty
              </Link>
            </li>
            <li>
              <Link to="/fashion" className="hover:text-[#F4A261]">
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/shoes" className="hover:text-[#F4A261]">
                Shoes
              </Link>
            </li>
            <li>
              <Link to="/jewellery" className="hover:text-[#F4A261]">
                Jewellery
              </Link>
            </li>
            <li>
              <Link to="/spectacles" className="hover:text-[#F4A261]">
                Spectacles
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-[#F4A261]">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/disscounts" className="hover:text-[#F4A261]">
                Disscounts
              </Link>
            </li>
             <li>
              <Link to="/aboutus" className="hover:text-[#F4A261]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F4A261]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
