
import React,{useState,useEffect} from 'react'
import image1 from "../assets/images/beuties.jpg";
import image2 from "../assets/images/clothes.jpg";
import image3 from "../assets/images/shoes.jpg";
import image4 from "../assets/images/jewelaries.jpg";
import image5 from "../assets/images/specs.jpg";
import ProductCard from '../components/productcard.jsx';

export default function jewellery() {
const slides = [
  {
    title: "Men’s Jewellery",
    desc: "Explore stylish jewellery designed for modern men.\nFrom chains to rings, add a bold and elegant touch to your look.",
    image: image1,
  },
  {
    title: "Women’s Jewellery",
    desc: "Discover elegant and timeless jewellery for every occasion.\nPerfect designs that enhance beauty, style, and confidence.",
    image: image2,
  },
  {
    title: "Kids’ Jewellery",
    desc: "Cute and lightweight jewellery specially designed for kids.\nSafe, colorful, and perfect for special moments.",
    image: image3,
  },
  {
    title: "Traditional Jewellery",
    desc: "Celebrate culture with beautifully crafted traditional jewellery.\nIdeal for weddings, festivals, and ceremonial wear.",
    image: image4,
  },
  {
    title: "Luxury & Daily Wear",
    desc: "Premium and everyday jewellery made for comfort and elegance.\nPerfect balance of luxury, quality, and durability.",
    image: image5,
  },
];



const products = [
  {
    id: 1,
    name: "Men’s Silver Chain",
    description: "Stylish silver chain designed for everyday and casual wear.",
    price: 12500,
    rating: 4.7,
    sold: 320,
    subcategory: "Men",
    image: image1,
  },
  {
    id: 2,
    name: "Women’s Gold Necklace",
    description: "Elegant gold necklace perfect for special occasions.",
    price: 48500,
    rating: 4.9,
    sold: 210,
    subcategory: "Women",
    image: image2,
  },
  {
    id: 3,
    name: "Kids’ Charm Bracelet",
    description: "Lightweight and colorful bracelet designed for kids.",
    price: 6500,
    rating: 4.6,
    sold: 185,
    subcategory: "Kids",
    image: image3,
  },
  {
    id: 4,
    name: "Traditional Bridal Necklace",
    description: "Classic traditional jewellery ideal for weddings.",
    price: 76500,
    rating: 4.8,
    sold: 140,
    subcategory: "Traditional",
    image: image4,
  },
  {
    id: 5,
    name: "Luxury Diamond Ring",
    description: "Premium diamond ring crafted with elegance and precision.",
    price: 125000,
    rating: 5.0,
    sold: 95,
    subcategory: "Luxury",
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
  <h1>Jewellery Store</h1>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
</div>
  )
}
