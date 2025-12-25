import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Search from "../components/search"

export default function adminheader() {

      const navigate = useNavigate();
    
      const handleLogin = () => {
        navigate("/login");
      };
    

  return (

       <header className="sticky top-0 z-50 bg-gray-100">
      
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
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#F4A261]" : "hover:text-[#F4A261]"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive ? "text-[#F4A261]" : "hover:text-[#F4A261]"
          }
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive ? "text-[#F4A261]" : "hover:text-[#F4A261]"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/offers"
          className={({ isActive }) =>
            isActive ? "text-[#F4A261]" : "hover:text-[#F4A261]"
          }
        >
          Offers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/disscounts"
          className={({ isActive }) =>
            isActive ? "text-[#F4A261]" : "hover:text-[#F4A261]"
          }
        >
          Disscounts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? "text-[#F4A261]" : "hover:text-[#F4A261]"
          }
        >
          Settings
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
</header>
  )
}
