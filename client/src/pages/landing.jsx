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
    <div className=" mx-auto p-10">
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
    href="/register"
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


  {/* Dots / carousel navigation */}
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


      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 py-16">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Secure Auth</h3>
          <p className="text-gray-600">
            JWT-based authentication with refresh tokens and email verification.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Optimized backend and frontend built with modern tech.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Scalable</h3>
          <p className="text-gray-600">
            Ready to scale for startups and enterprise solutions.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center bg-gray-100 rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Start building today 🚀
        </h2>
        <p className="text-gray-600 mb-6">
          Join Mynstro and take your project to the next level.
        </p>
        <a
          href="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
        >
          Create Account
        </a>
      </section>

    </div>
  );
}
