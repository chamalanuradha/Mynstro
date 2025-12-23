import React, { useEffect, useState } from "react";
import image1 from "../assets/images/beuties.jpg";
import image2 from "../assets/images/clothes.jpg";
import image3 from "../assets/images/shoes.jpg";
import image4 from "../assets/images/jewelaries.jpg";
import image5 from "../assets/images/specs.jpg";

export default function Landing() {

const slides = [
  {
    title: "Glam Up Your Style",
    desc: "Discover premium beauty and skincare products crafted to enhance your natural glow.\nFrom everyday essentials to luxury picks, feel confident and radiant every day.",
    image: image1,
  },
  {
    title: "Trendy Fashion Wear",
    desc: "Explore the latest fashion trends with clothing designed for comfort and style.\nUpgrade your wardrobe with outfits that match every mood and moment.",
    image: image2,
  },
  {
    title: "Step Into Comfort",
    desc: "Find the perfect pair of shoes for work, travel, or casual wear.\nStylish designs combined with lasting comfort for every step you take.",
    image: image3,
  },
  {
    title: "Elegant Jewelleries",
    desc: "Adorn yourself with timeless jewellery crafted with elegance and precision.\nPerfect pieces to celebrate moments, style, and lasting beauty.",
    image: image4,
  },
  {
    title: "Stylish Spectacles",
    desc: "Discover fashionable and comfortable eyewear designed for clear vision.\nModern frames that perfectly blend style, protection, and confidence.",
    image: image5,
  },
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mx-auto py-10 px-25">
  <section className="relative p-6 border-6 border-[#F4A261] rounded-xl overflow-hidden h-95 flex">

 <div className="w-3/5 p-10 flex flex-col justify-between">

  <div>
    <h1 className="text-4xl font-bold mb-4 text-gray-600">
      {slides[current].title}
    </h1>

    <p className="text-gray-600">
      {slides[current].desc}
    </p>
  </div>


  <a
    href="/login"
    className="w-fit bg-transparent font-bold text-[#F4A261] px-6 py-2 rounded-md border-3 border-[#F4A261] hover:bg-[#F4A261] hover:text-white hover:border-white transition-colors duration-300"
  >
    Get Started
  </a>
</div>
<div className="w-2/5 relative overflow-hidden">
  <img
    src={slides[current].image}
    alt={slides[current].title}
    className="h-full w-full object-cover"
  />
</div>

  <div className="flex gap-2 justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
    {slides.map((_, index) => (
      <span
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-3 h-3 rounded-full cursor-pointer ${
          index === current ? "bg-[#F4A261]" : "bg-black/30"
        }`}
      />
    ))}
  </div>
</section>



      <section className="grid md:grid-cols-3 gap-6 py-16">
  <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-2">Top Selling</h3>
    <p className="text-gray-600">
      Explore our best-selling products loved by thousands of customers for
      their quality, style, and value.
    </p>
     <p className="p-15">
   
    </p>
  </div>

  <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-2">Recently Updated</h3>
    <p className="text-gray-600">
      Stay ahead with newly arrived products and the latest fashion and
      lifestyle trends added just for you.
    </p>
  </div>

  <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-2">Top Rated</h3>
    <p className="text-gray-600">
      Discover highly rated items reviewed by real customers for comfort,
      durability, and satisfaction.
    </p>
  </div>
</section>


      <section className="py-16 text-center bg-gray-100 rounded-lg mb-10">
  <h2 className="text-2xl font-bold mb-4">
    Special Offers 🚀
  </h2>

  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
    Get started with Mynstro today and enjoy exclusive features designed to
    help you build, manage, and scale your projects faster.
  </p>

  <a
    href="/register"
    className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
  >
    Create Free Account
  </a>
</section>


    </div>
  );
}
