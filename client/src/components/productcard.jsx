import { Star, Pencil, Trash2 } from "lucide-react";

export default function ProductCard({ product }) {
  // Get user role from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">

      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
          {product.subcategory}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500">
          {product.description.length > 40
            ? product.description.slice(0, 40) + "..."
            : product.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-700">{product.rating}</span>
          </div>
          <span className="text-gray-500">Sold {product.sold}+</span>
        </div>

        <div className="flex items-center justify-end pt-2 gap-2">
          {isAdmin ? (
            <>
              <button
                className="p-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                title="Update"
              >
                <Pencil size={16} />
              </button>
              <button
                className="p-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </>
          ) : (
            <button className="bg-[#F4A261] text-white px-4 py-2 rounded-md hover:opacity-90 text-sm">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
