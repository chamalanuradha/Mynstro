import React,{useState,useEffect} from 'react'
import image1 from "../assets/images/beuties.jpg";
import image2 from "../assets/images/clothes.jpg";
import image3 from "../assets/images/shoes.jpg";
import image4 from "../assets/images/jewelaries.jpg";
import image5 from "../assets/images/specs.jpg";
import ProductCard from '../components/productcard.jsx';

export default function fashion() {
const slides = [
  {
    title: "Men’s Clothing",
    desc: "Stylish and comfortable clothing designed for everyday wear.\nFrom casual looks to formal styles, find outfits that suit every occasion.",
    image: image1,
  },
  {
    title: "Women’s Clothing",
    desc: "Discover elegant and trendy fashion for every moment.\nOutfits crafted to highlight confidence, comfort, and modern style.",
    image: image2,
  },
  {
    title: "Kids’ Clothing",
    desc: "Soft, colorful, and playful outfits for children.\nDesigned for comfort, movement, and all-day fun.",
    image: image3,
  },
  {
    title: "Traditional Wear",
    desc: "Celebrate heritage with beautifully crafted traditional clothing.\nPerfect for festivals, ceremonies, and special occasions.",
    image: image4,
  },
  {
    title: "Sportswear",
    desc: "High-performance sportswear made for active lifestyles.\nBreathable, flexible designs for workouts, training, and daily fitness.",
    image: image5,
  },
];



const products = [
  {
    id: 1,
    name: "Men's Casual T-Shirt",
    description: "Comfortable cotton t-shirt perfect for everyday casual wear.",
    price: 1850,
    rating: 4.7,
    sold: 320,
    subcategory: "Men",
    image: image1,
  },
  {
    id: 2,
    name: "Women's Floral Dress",
    description: "Elegant floral dress ideal for parties and casual outings.",
    price: 3450,
    rating: 4.8,
    sold: 210,
    subcategory: "Women",
    image: image2,
  },
  {
    id: 3,
    name: "Kids Cotton Outfit Set",
    description: "Soft and breathable cotton outfit for kids’ daily comfort.",
    price: 2150,
    rating: 4.6,
    sold: 185,
    subcategory: "Kids",
    image: image3,
  },
  {
    id: 4,
    name: "Men's Formal Shirt",
    description: "Classic slim-fit formal shirt suitable for office and events.",
    price: 2950,
    rating: 4.5,
    sold: 160,
    subcategory: "Men",
    image: image4,
  },
  {
    id: 5,
    name: "Women's Casual Top",
    description: "Stylish and lightweight top designed for everyday wear.",
    price: 2250,
    rating: 4.7,
    sold: 245,
    subcategory: "Women",
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
  <h1>Fashion Store</h1>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
</div>
  )
}
