import React, { useEffect, useState } from "react";
import image1 from "../assets/images/beuties.jpg";
import image2 from "../assets/images/clothes.jpg";
import image3 from "../assets/images/shoes.jpg";

export default function Landing() {

const slides = [
  {
    title: "Glam Up Your Style",
    desc: "Discover top beauty products to enhance your look and feel fabulous every day.",
    image: image1,
  },
  {
    title: "Trendy Fashion Wear",
    desc: "Explore the latest clothes collection to stay stylish, comfortable, and confident.",
    image: image2,
  },
  {
    title: "Step Into Comfort",
    desc: "Find the perfect shoes for every occasion – stylish, durable, and made for you.",
    image: image3,
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
  <section className="relative p-4 border-4 border-[#F4A261] rounded-xl overflow-hidden h-110 flex">
  {/* Left 2/3: Text */}
  <div className="w-2/3 p-10 flex flex-col justify-center">
    <h1 className="text-4xl font-bold mb-4 text-gray-600">
      {slides[current].title}
    </h1>
    <p className="mb-6 text-gray-600">{slides[current].desc}</p>
    <a
      href="/register"
      className="inline-block w-4/8 bg-[#F4A261] text-black px-6 py-2 rounded-md hover:bg-[#e79347]"
    >
      Get Started
    </a>
  </div>

  {/* Right 1/3: Image */}
  <div className="w-1/3 relative">
    <img
      src={slides[current].image}
      alt={slides[current].title}
      className="h-full w-full object-cover rounded-r-xl"
    />
  </div>

  {/* Dots / carousel navigation */}
  <div className="flex gap-2 justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
    {slides.map((_, index) => (
      <span
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-3 h-3 rounded-full cursor-pointer ${
          index === current ? "bg-[#F4A261]" : "bg-white/50"
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
