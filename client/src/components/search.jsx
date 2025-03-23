import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder=" "
        className="w-full px-4 py-2 pl-10 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
      />

      {/* Show animation only if the search box is empty */}
      {searchText === "" && (
        <TypeAnimation
          sequence={[
            "Search products...",
            1000,
            "Find the best deals...",
            1000,
            "Shop top categories...",
            1000,
            "Discover amazing offers...",
            1000,
            "Explore trending items...",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#000000",
            pointerEvents: "none", // Prevent interaction
          }}
        />
      )}

      {/* Search Icon */}
      <FaSearch
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F4A261] cursor-pointer"
        onClick={handleSearchClick}
      />
    </div>
  );
}

export default Search;
