import React,{useState,useEffect} from 'react'
import image1 from "../assets/images/beuties.jpg";
import image2 from "../assets/images/clothes.jpg";
import image3 from "../assets/images/shoes.jpg";
import image4 from "../assets/images/jewelaries.jpg";
import image5 from "../assets/images/specs.jpg";
import ProductCard from '../components/productcard.jsx';

export default function spectacles() {
const slides = [
  {
    title: "Men’s Spectacles",
    desc: "Discover stylish and durable spectacles for modern men.\nPerfect for work, casual wear, and everyday comfort.",
    image: image1,
  },
  {
    title: "Women’s Spectacles",
    desc: "Explore elegant and fashionable spectacles for women.\nDesigned to enhance beauty, confidence, and clarity.",
    image: image2,
  },
  {
    title: "Kids’ Spectacles",
    desc: "Lightweight and colorful spectacles specially made for kids.\nSafe, comfortable, and fun for daily use.",
    image: image3,
  },
  {
    title: "Classic & Traditional Frames",
    desc: "Timeless spectacle frames with a classic touch.\nIdeal for formal wear and traditional styling.",
    image: image4,
  },
  {
    title: "Luxury & Daily Wear",
    desc: "Premium and everyday spectacles designed for comfort.\nA perfect balance of style, quality, and durability.",
    image: image5,
  },
];

const products = [
  {
    id: 1,
    name: "Men’s Metal Frame Spectacles",
    description: "Stylish metal frame spectacles suitable for office and casual use.",
    price: 12500,
    rating: 4.7,
    sold: 320,
    subcategory: "Men",
    image: image1,
  },
  {
    id: 2,
    name: "Women’s Cat-Eye Spectacles",
    description: "Elegant cat-eye frame spectacles with a modern look.",
    price: 18500,
    rating: 4.9,
    sold: 210,
    subcategory: "Women",
    image: image2,
  },
  {
    id: 3,
    name: "Kids’ Flexible Frame Spectacles",
    description: "Colorful, lightweight, and flexible frames designed for kids.",
    price: 6500,
    rating: 4.6,
    sold: 185,
    subcategory: "Kids",
    image: image3,
  },
  {
    id: 4,
    name: "Classic Full-Rim Spectacles",
    description: "Traditional full-rim spectacles with a timeless design.",
    price: 16500,
    rating: 4.8,
    sold: 140,
    subcategory: "Classic",
    image: image4,
  },
  {
    id: 5,
    name: "Luxury Titanium Frame Spectacles",
    description: "Premium titanium frame spectacles crafted for elegance and comfort.",
    price: 42500,
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
  <h1>Spectacles Store</h1>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
</div>
  )
}
