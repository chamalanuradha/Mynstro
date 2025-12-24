import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
   
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
          {product.store}
        </span>
      </div>


      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>


        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-700">{product.rating}</span>
          </div>
          <span className="text-gray-500">
            Sold {product.sold}+
          </span>
        </div>

     
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-[#F4A261]">
            Rs {product.price}
          </span>

          <button className="bg-[#F4A261] text-white px-4 py-2 rounded-md hover:opacity-90 text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
