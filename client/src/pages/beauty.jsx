import React,{useState,useEffect} from 'react'
import image1 from "../assets/images/beuties.jpg";
import image2 from "../assets/images/clothes.jpg";
import image3 from "../assets/images/shoes.jpg";
import image4 from "../assets/images/jewelaries.jpg";
import image5 from "../assets/images/specs.jpg";
import ProductCard from '../components/productcard.jsx';

export default function beauty() {
  const slides = [
  {
    title: "Vibrant Nail Polishes",
    desc: "Express your style with long-lasting, chip-resistant nail polishes.\nFrom bold shades to soft pastels, find the perfect color for every occasion.",
    image: image1,
  },
  {
    title: "Nourishing Shampoos",
    desc: "Revitalize your hair with shampoos designed for strength and shine.\nGentle formulas that cleanse deeply while keeping your hair healthy and smooth.",
    image: image2,
  },
  {
    title: "Luxurious Lipsticks",
    desc: "Enhance your look with richly pigmented lipsticks.\nSmooth application, vibrant colors, and all-day comfort for every smile.",
    image: image3,
  },
  {
    title: "Hydrating Creams",
    desc: "Keep your skin soft and moisturized with nourishing creams.\nPerfect for daily use to restore hydration and natural glow.",
    image: image4,
  },
  {
    title: "Essential Skincare",
    desc: "Care for your skin with gentle and effective skincare solutions.\nDesigned to protect, refresh, and enhance your natural beauty every day.",
    image: image5,
  },
];

const products = [
  {
    id: 1,
    name: "Matte Finish Lipstick",
    description: "Long-lasting matte lipstick with rich pigmentation.",
    price: 1850,
    rating: 4.8,
    sold: 320,
    store: "BeautyStore LK",
    image: image1,
  },
  {
    id: 2,
    name: "Herbal Hair Shampoo",
    description: "Nourishing shampoo for smooth and healthy hair.",
    price: 2450,
    rating: 4.6,
    sold: 210,
    store: "Care Plus",
    image: image2,
  },
   {
    id: 3,
    name: "Herbal Hair Shampoo",
    description: "Nourishing shampoo for smooth and healthy hair.",
    price: 2450,
    rating: 4.6,
    sold: 210,
    store: "Care Plus",
    image: image2,
  },
   {
    id: 4,
    name: "Herbal Hair Shampoo",
    description: "Nourishing shampoo for smooth and healthy hair.",
    price: 2450,
    rating: 4.6,
    sold: 210,
    store: "Care Plus",
    image: image2,
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
  <section className="relative p-6 border-6 border-[#F4A261] rounded-xl overflow-hidden h-95 flex mb-10">

 <div className="w-3/5 p-10 flex flex-col justify-between">

  <div>
    <h1 className="text-4xl font-bold mb-4 text-gray-600">
      {slides[current].title}
    </h1>

    <p className="text-gray-600">
      {slides[current].desc}
    </p>
  </div>
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
<div className='mb-6 justify-center flex text-2xl font-bold mb-4 text-gray-600'>
  <h1>Beuty Store</h1>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
</div>
  )
}
